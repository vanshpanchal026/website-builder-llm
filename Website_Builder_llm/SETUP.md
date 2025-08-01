# Setup Instructions

Follow these steps to get your Website Builder LLM up and running:

## 1. Install Node.js

Since Node.js is not currently installed on your system, you'll need to install it first:

### Option A: Install via Official Website
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version (recommended)
3. Run the installer and follow the setup wizard

### Option B: Install via Homebrew (macOS)
```bash
brew install node
```

### Option C: Install via Node Version Manager (nvm)
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or source your profile
source ~/.bashrc  # or ~/.zshrc

# Install latest LTS Node.js
nvm install --lts
nvm use --lts
```

## 2. Verify Installation

After installing Node.js, verify it's working:

```bash
node --version  # Should show v18.x.x or later
npm --version   # Should show npm version
```

## 3. Install Project Dependencies

Navigate to your project directory and install dependencies:

```bash
cd Website_Builder_llm
npm install
```

## 4. Set Up Environment Variables

1. Create a `.env.local` file in the project root:
   ```bash
   touch .env.local
   ```

2. Add your Anthropic API key:
   ```env
   ANTHROPIC_API_KEY=your_actual_api_key_here
   ```

3. Get your API key from [Anthropic Console](https://console.anthropic.com/)

## 5. Run the Application

Start the development server:

```bash
npm run dev
```

Your website builder will be available at [http://localhost:3000](http://localhost:3000)

## 6. Test the Application

1. Open your browser to `http://localhost:3000`
2. Enter a detailed prompt like "Create a website for 'Luna Photography', a wedding photographer. Include a hero with her tagline 'Capturing Love Stories', portfolio of 3 weddings, about section mentioning 8 years experience, pricing packages (Basic $1200, Premium $2500), and contact form"
3. Click "Generate Website"
4. Watch your AI-generated website appear with realistic, contextual content!

## Troubleshooting

### Common Issues:

1. **Command not found: npm**
   - Node.js is not installed or not in PATH
   - Follow step 1 to install Node.js

2. **API key error**
   - Check that your `.env.local` file exists
   - Verify your Anthropic API key is correct
   - Ensure you have credits in your Anthropic account

3. **Module not found errors**
   - Run `npm install` to install dependencies
   - Delete `node_modules` and `package-lock.json`, then run `npm install` again

4. **Port 3000 in use**
   - Use a different port: `npm run dev -- -p 3001`
   - Or kill the process using port 3000

### Getting Help

If you encounter issues:
1. Check the terminal console for error messages
2. Check the browser console (F12) for client-side errors
3. Verify all environment variables are set correctly
4. Ensure you have a stable internet connection

## What's Next?

Once everything is running:
- Try detailed, specific prompts to generate realistic websites
- Include actual names, prices, services, and industry details in your prompts
- Use the example prompts to see how specificity creates better results
- Download generated websites to explore the high-quality code
- Experiment with different industries and business types

### 💡 Writing Effective Prompts

The AI generates much better websites when you provide specific details:

**❌ Generic prompt:**
"Create a restaurant website"

**✅ Specific prompt:**
"Create a website for 'Ocean Breeze Seafood', a coastal restaurant specializing in fresh catch. Include menu items like Grilled Salmon ($24), Fish & Chips ($16), Lobster Roll ($28), chef Maria's 15-year culinary background, location at 789 Harbor Drive, and reservation system. Use ocean blue and white colors with nautical design elements."

The more specific you are, the more realistic and professional your generated website will look!

Happy building! 🚀 