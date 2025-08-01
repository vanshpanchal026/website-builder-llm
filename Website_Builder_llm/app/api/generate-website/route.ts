import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key is not configured' },
        { status: 500 }
      )
    }

    const systemPrompt = `You are an expert web developer that creates complete, modern, and responsive websites. When given a description, you create beautiful HTML and CSS code that is:

1. Modern and responsive (mobile-first design)
2. Uses semantic HTML5 elements
3. Includes proper CSS styling with modern techniques (flexbox, grid, gradients, etc.)
4. Has good UX/UI principles
5. Includes interactive elements when appropriate
6. Uses proper color schemes and typography
7. Is production-ready and clean

CONTENT REQUIREMENTS:
- Generate REALISTIC and CONTEXTUAL content that matches the prompt exactly
- For restaurants: Include realistic menu items, prices, restaurant names, food descriptions
- For portfolios: Include realistic project names, descriptions, skills, bio information
- For businesses: Include realistic company names, services, team members, testimonials
- For e-commerce: Include realistic product names, descriptions, prices, categories
- For blogs: Include realistic article titles, excerpts, author information
- For agencies: Include realistic service offerings, case studies, client names
- Use appropriate industry terminology and realistic details
- Content should feel authentic and professional, not generic placeholders

STYLING REQUIREMENTS:
- Choose colors, fonts, and design elements that match the industry/theme
- For restaurants: Warm, appetizing colors and elegant typography
- For tech/SaaS: Modern, clean design with blue/purple gradients
- For creative agencies: Bold, artistic designs with vibrant colors
- For law firms: Professional, conservative design with navy/gray colors
- For healthcare: Clean, trustworthy design with blue/green colors

IMPORTANT RULES:
- Return your response as a JSON object with exactly these fields: "html", "css", "js"
- The HTML should be the body content only (no <!DOCTYPE>, <html>, <head>, or <body> tags)
- The CSS should be complete styling for the website
- Include JavaScript only if needed for interactivity (can be empty string if not needed)
- Use modern CSS features like CSS Grid, Flexbox, custom properties
- Make it responsive with mobile-first approach
- Use semantic HTML elements
- ALL content must be contextually relevant to the prompt - no generic "Lorem ipsum" or "Sample text"
- Don't use external dependencies or CDNs

Example response format:
{
  "html": "<main>...</main>",
  "css": "/* Complete CSS styling */",
  "js": "// JavaScript if needed"
}`

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
                 {
          role: 'user',
          content: `Create a website based on this description: ${prompt}

IMPORTANT: Generate realistic, contextual content that matches the specific industry, business type, or theme mentioned in the prompt. Include:
- Realistic names, titles, and descriptions
- Industry-appropriate terminology and details
- Authentic-looking data (prices, services, features, etc.)
- Professional content that feels real, not placeholder text

Please return the response in the exact JSON format specified in the system prompt.`
        }
      ]
    })

    const responseText = message.content[0].type === 'text' ? message.content[0].text : ''
    
    // Try to extract JSON from the response
    let websiteData
    try {
      // Look for JSON in the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        websiteData = JSON.parse(jsonMatch[0])
      } else {
        throw new Error('No JSON found in response')
      }
    } catch (parseError) {
      console.error('Failed to parse Claude response:', parseError)
      return NextResponse.json(
        { error: 'Failed to parse website generation response' },
        { status: 500 }
      )
    }

    // Validate the response structure
    if (!websiteData.html || !websiteData.css) {
      return NextResponse.json(
        { error: 'Invalid response format from Claude' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      html: websiteData.html,
      css: websiteData.css,
      js: websiteData.js || ''
    })

  } catch (error) {
    console.error('Error generating website:', error)
    return NextResponse.json(
      { error: 'Failed to generate website' },
      { status: 500 }
    )
  }
} 