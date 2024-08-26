import { GoogleGenerativeAI } from "@google/generative-ai";

<<<<<<< HEAD
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;
=======
const apiKey = process.env.GEMINI_API_KEY!;
>>>>>>> f707cf4413582c0a185e9a61bccc8152d79f8e8d
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig: generationConfig,
  history: [],
});
