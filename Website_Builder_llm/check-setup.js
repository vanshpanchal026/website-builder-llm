#!/usr/bin/env node

/**
 * Website Builder LLM - Setup Verification Script
 * Run with: node check-setup.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Website Builder LLM - Setup Verification\n');

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
console.log(`📦 Node.js version: ${nodeVersion}`);
if (majorVersion >= 18) {
  console.log('   ✅ Node.js version is compatible\n');
} else {
  console.log('   ⚠️  Node.js 18+ recommended\n');
}

// Check if package.json exists
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
  console.log('✅ package.json found');
  try {
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    console.log(`   📝 Project: ${pkg.name} v${pkg.version}\n`);
  } catch (e) {
    console.log('   ⚠️  Could not parse package.json\n');
  }
} else {
  console.log('❌ package.json not found\n');
}

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('✅ node_modules directory found');
  console.log('   📦 Dependencies appear to be installed\n');
} else {
  console.log('⚠️  node_modules not found');
  console.log('   💡 Run: npm install\n');
}

// Check for environment file
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  console.log('✅ .env.local file found');
  const envContent = fs.readFileSync(envPath, 'utf8');
  if (envContent.includes('ANTHROPIC_API_KEY') && !envContent.includes('your_anthropic_api_key_here')) {
    console.log('   🔑 API key appears to be configured\n');
  } else {
    console.log('   ⚠️  Please set your actual Anthropic API key\n');
  }
} else {
  console.log('⚠️  .env.local file not found');
  console.log('   💡 Create .env.local with: ANTHROPIC_API_KEY=your_key_here\n');
}

// Check essential files
const essentialFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/api/generate-website/route.ts',
  'components/WebsiteBuilder.tsx',
  'components/PromptInput.tsx',
  'components/WebsitePreview.tsx',
  'tailwind.config.ts',
  'tsconfig.json'
];

console.log('📁 Essential files check:');
let allFilesPresent = true;
essentialFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - MISSING`);
    allFilesPresent = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allFilesPresent && fs.existsSync(nodeModulesPath) && fs.existsSync(envPath)) {
  console.log('🎉 Setup appears complete! Try running: npm run dev');
} else {
  console.log('⚠️  Setup incomplete. Please check the issues above.');
  
  if (!fs.existsSync(nodeModulesPath)) {
    console.log('   1. Run: npm install');
  }
  
  if (!fs.existsSync(envPath)) {
    console.log('   2. Create .env.local with your Anthropic API key');
  }
  
  console.log('   3. Then run: npm run dev');
}

console.log('\n📖 For detailed setup instructions, see: SETUP.md');
console.log('🔧 For project status, see: PROJECT_STATUS.md'); 