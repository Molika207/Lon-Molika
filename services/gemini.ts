
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SERVICES, BIO, STATS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the AI assistant for ${BIO.name}, a ${BIO.role} based in ${BIO.location}.

BIO & STATS:
- Summary: ${BIO.summary}
- Story: ${BIO.story}
- Experience: ${BIO.experience}
- Key Stats: ${STATS.map(s => `${s.value} ${s.label}`).join(', ')}

SKILLS:
- UI/UX: Figma, Framer, User Research, Design Systems.
- WEB: React, TypeScript, Tailwind CSS, Next.js, Gemini API.
- STRATEGY: Market positioning, Brand Identity.

PROJECTS:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tags: ${p.tags.join(', ')})`).join('\n')}

SERVICES:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Guidelines:
1. Be professional, sophisticated, and concise. 
2. Use the designer's voice: confident, creative, and technical.
3. If asked about availability, say: "Alex is currently open for select high-impact projects starting next month. You can use the 'Hire Me' button to reach out directly."
4. When talking about the "About" section, mention the journey from designer to product leader.
5. Keep responses under 3 sentences unless asked for more detail.
`;

export const getGeminiResponse = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my creative brain right now. Please try again or reach out directly!";
  }
};
