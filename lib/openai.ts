import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY || '',
  baseURL: "https://openrouter.ai/api/v1",
  dangerouslyAllowBrowser: true,
});

export async function generateMicroSkillContent(topic: string, level: string = 'beginner'): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: 'You are an expert in online earning and micro-skills. Create concise, actionable guides that help people earn money online.'
        },
        {
          role: 'user',
          content: `Create a micro-skill guide for "${topic}" at ${level} level. Include practical steps, tools needed, and earning potential. Keep it under 500 words and make it immediately actionable.`
        }
      ],
      max_tokens: 600,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || 'Content generation failed. Please try again.';
  } catch (error) {
    console.error('Error generating content:', error);
    return 'Unable to generate content at this time. Please check back later.';
  }
}

export async function generatePersonalizedRecommendations(userSkills: string[], interests: string[]): Promise<string[]> {
  try {
    const completion = await openai.chat.completions.create({
      model: 'google/gemini-2.0-flash-001',
      messages: [
        {
          role: 'system',
          content: 'You are a career advisor specializing in online earning opportunities. Provide personalized recommendations based on user skills and interests.'
        },
        {
          role: 'user',
          content: `Based on these skills: ${userSkills.join(', ')} and interests: ${interests.join(', ')}, recommend 5 specific online earning opportunities with brief descriptions.`
        }
      ],
      max_tokens: 400,
      temperature: 0.8,
    });

    const content = completion.choices[0]?.message?.content || '';
    return content.split('\n').filter(line => line.trim().length > 0).slice(0, 5);
  } catch (error) {
    console.error('Error generating recommendations:', error);
    return [
      'Virtual Assistant - Provide administrative support remotely',
      'Content Writing - Create articles and blog posts for businesses',
      'Social Media Management - Manage social media accounts for brands',
      'Online Tutoring - Teach subjects you're knowledgeable about',
      'Freelance Design - Create graphics and visual content'
    ];
  }
}
