"use client"
import { motion } from "framer-motion"
import { 
  BrainCircuit, 
  ClipboardCheck, 
  TrendingUp, 
  UserCheck 
} from "lucide-react"

const DynamicDashboardBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0C111D] p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto text-white overflow-hidden relative"
    >
      <motion.div
        className="absolute inset-0 bg-[#483285] opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-white relative z-10"
      >
        Dashboard Inteligente do CondominioIA
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-8 text-gray-300 relative z-10 leading-relaxed"
      >
        Este painel centraliza as informações coletadas pelo Agente ConciergeAI. 
        Com dados precisos e em tempo real, você pode:
      </motion.p>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="space-y-4 relative z-10"
      >
        {[
          { 
            icon: BrainCircuit, 
            text: "Tomar decisões assertivas com base em análises preditivas e relatórios personalizados"
          },
          { 
            icon: UserCheck, 
            text: "Aprimorar serviços, antecipando demandas e personalizando experiências"
          },
          { 
            icon: ClipboardCheck, 
            text: "Registrar recebimento de documentos da administração pelo condômino, garantindo transparência e organização"
          },
          { 
            icon: TrendingUp, 
            text: "Otimizar a gestão, reduzindo custos e aumentando a satisfação dos moradores"
          },
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
            className="flex items-center space-x-3 bg-[#483285]/10 p-4 rounded-lg hover:bg-[#483285]/20 transition-colors"
          >
            <item.icon className="w-6 h-6 text-[#00A3FF]" />
            <span className="text-gray-200">{item.text}</span>
          </motion.li>
        ))}
      </motion.ul>

      <div className="absolute inset-0 bg-gradient-to-b from-[#483285]/5 to-transparent pointer-events-none" />
    </motion.div>
  )
}

export default DynamicDashboardBox 