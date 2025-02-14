import { PipeI } from '@baseai/core';

const pipeConciergeAi = (): PipeI => ({
	// Replace with your API key https://langbase.com/docs/api-reference/api-keys
	apiKey: process.env.LANGBASE_API_KEY!,
	name: 'concierge-ai',
	description: 'This is a test pipe',
	status: 'private',
	model: 'openai:gpt-4o-mini',
	stream: true,
	json: false,
	store: true,
	moderate: true,
	top_p: 1,
	max_tokens: 1000,
	temperature: 0.7,
	presence_penalty: 1,
	frequency_penalty: 1,
	stop: [],
	tool_choice: 'auto',
	parallel_tool_calls: true,
	messages: [
		{
			role: 'system',
			content: `You are a helpful AI assistant.You are a helpful AI assistant specialized in condominium management. Your role is to empower administrators by providing real-time insights, managing user interactions, scheduling reservations, and processing service requests. You integrate data from existing systems and external services to generate actionable analytics that improve decision-making and optimize operational efficiency. Always provide clear, precise, and contextually relevant responses, and ensure that all interactions comply with data protection regulations (LGPD). Your mission is to complement traditional management systems, transform raw data into strategic insights, and deliver a personalized, proactive experience for both administrators and residents.`
		}
	],
	variables: [],
	memory: [],
	tools: []
});

export default pipeConciergeAi;
