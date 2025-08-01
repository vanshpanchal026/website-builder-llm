# Website Builder LLM

A powerful AI-powered website builder that uses Claude AI to generate complete websites from natural language prompts. Simply describe your website idea and watch it come to life!

## Features

- 🤖 **AI-Powered Generation**: Uses Claude AI to create websites from natural language descriptions
- 🎯 **Contextual Content**: Generates realistic, industry-specific content that matches your prompt (not generic placeholders!)
- 🎨 **Modern UI**: Beautiful, responsive interface built with React and Tailwind CSS
- 📱 **Responsive Preview**: Preview your websites in desktop, tablet, and mobile views
- 💾 **Download Websites**: Export complete websites as downloadable ZIP files
- 🔄 **Regeneration**: Easily regenerate websites with different variations
- 📝 **Code Viewing**: View and inspect the generated HTML, CSS, and JavaScript
- 💡 **Smart Examples**: Pre-built prompts that show how to get realistic content

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- Anthropic API key

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd Website_Builder_llm
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:
   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

   You can get your API key from [Anthropic Console](https://console.anthropic.com/)

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Use

1. **Enter a prompt**: Describe the website you want to create in the text area
2. **Generate**: Click "Generate Website" to let AI create your site
3. **Preview**: View your website in different device sizes
4. **Download**: Export your website as a ZIP file
5. **Regenerate**: Try different variations of the same prompt

### Example Prompts (The More Specific, The Better!)

- "Create a website for 'Sarah Chen', a UX designer specializing in mobile apps. Include her tagline 'Designing Digital Experiences That Matter', projects like FinanceFlow banking app and MoodTracker wellness app, 5 years experience at tech companies, and contact form"
- "Build a SaaS landing page for 'TaskMaster Pro', a team productivity tool. Include pricing (Starter $9/month, Pro $19/month), features like real-time collaboration and automated reporting, testimonials from TechCorp and InnovateLabs"
- "Design a website for 'Bella Vista', an Italian restaurant. Include menu items with prices (Spaghetti Carbonara $18, Tiramisu $8), Chef Marco's 20-year experience, location at 123 Main Street, and reservation form"

### 💡 Pro Tips for Better Results

1. **Be Specific**: Include actual names, prices, services, and details
2. **Industry Context**: Mention the specific industry or business type
3. **Content Details**: Specify what content you want (menu items, services, team members)
4. **Design Preferences**: Include color schemes, style preferences, and layout ideas
5. **Realistic Data**: The AI will use your specifics to create authentic-looking content

## Project Structure

```
Website_Builder_llm/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── generate-website/ # Claude integration
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ActionBar.tsx     # Download/regenerate controls
│   ├── ExamplePrompts.tsx # Prompt examples
│   ├── Header.tsx        # App header
│   ├── LoadingState.tsx  # Loading animation
│   ├── PromptInput.tsx   # Input form
│   ├── WebsiteBuilder.tsx # Main component
│   └── WebsitePreview.tsx # Preview iframe
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
└── README.md            # This file
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Claude AI** - Anthropic's AI model for website generation
- **React Hot Toast** - Beautiful notifications
- **Lucide React** - Beautiful icons
- **JSZip** - ZIP file generation for downloads
- **File Saver** - File download utility

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key | Yes |

## API Routes

### POST /api/generate-website

Generates a website based on a text prompt.

**Request Body:**
```json
{
  "prompt": "Description of the website to generate"
}
```

**Response:**
```json
{
  "html": "Generated HTML content",
  "css": "Generated CSS styles",
  "js": "Generated JavaScript (optional)"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Troubleshooting

### Common Issues

1. **API Key not working**: Make sure your Anthropic API key is correct and has sufficient credits
2. **Generation fails**: Check the browser console for error messages
3. **Preview not loading**: Ensure the generated HTML is valid

### Support

If you encounter any issues, please check the following:

1. Verify your API key is set correctly in `.env.local`
2. Check the browser console for any error messages
3. Ensure you have a stable internet connection
4. Try regenerating the website if the first attempt fails

## Acknowledgments

- [Anthropic](https://anthropic.com) for providing the Claude AI API
- [Vercel](https://vercel.com) for the Next.js framework
- [Tailwind CSS](https://tailwindcss.com) for the styling framework 