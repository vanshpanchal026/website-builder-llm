# Quick Start Guide

Get your Website Builder LLM running in minutes!

## 🚀 Immediate Next Steps

### 1. Verify Your Setup
```bash
node check-setup.js
```
This script will check your environment and tell you exactly what's needed.

### 2. Install Node.js (if needed)
If the check script says "Command not found", install Node.js:
- **macOS**: `brew install node` OR download from [nodejs.org](https://nodejs.org/)
- **Windows/Linux**: Download from [nodejs.org](https://nodejs.org/)

### 3. Install Dependencies
```bash
npm install
```

### 4. Set Up API Key
Create `.env.local` file:
```bash
echo "ANTHROPIC_API_KEY=your_actual_api_key_here" > .env.local
```
Get your API key from [Anthropic Console](https://console.anthropic.com/)

### 5. Start the Application
```bash
npm run dev
```

### 6. Open Your Browser
Go to [http://localhost:3000](http://localhost:3000)

## 🧪 Test It Out

Try this prompt:
```
Create a website for 'Moonlight Bakery', a local artisan bakery. Include a hero section with their tagline 'Fresh Baked Daily with Love', menu items like Croissants ($3), Sourdough Bread ($6), Chocolate Cake ($25), an about section mentioning baker Emma's 15 years of experience, location at 456 Oak Avenue, and contact form. Use warm colors with rustic design elements.
```

## ❗ Quick Troubleshooting

| Problem | Quick Fix |
|---------|-----------|
| `npm: command not found` | Install Node.js |
| `Module not found` errors | Run `npm install` |
| API key errors | Set up `.env.local` file |
| Port 3000 in use | Use `npm run dev -- -p 3001` |

## 📚 Need More Help?

- **Detailed Setup**: See `SETUP.md`
- **Project Status**: See `PROJECT_STATUS.md`
- **Full Documentation**: See `README.md`

That's it! You should have a working AI website builder in just a few minutes! 🎉 