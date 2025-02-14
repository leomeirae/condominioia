import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { nome, email, mensagem } = req.body;
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM || 'onboarding@resend.dev', // Remetente verificado
      to: 'lelecomeiralins@gmail.com',
      subject: 'Nova solicitação de contato',
      html: `<p><strong>Nome:</strong> ${nome}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong><br/>${mensagem}</p>`,
    });
    return res.status(200).json({ message: 'E-mail enviado com sucesso', data });
  } catch (error) {
    console.error('Erro no envio de e-mail:', error);
    return res.status(500).json({ message: 'Erro ao enviar e-mail', error });
  }
};

export default handler; 