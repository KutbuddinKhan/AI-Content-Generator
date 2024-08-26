
---

# CreativeAI

![CreativeAI Dashboard](path_to_image.png)

[![CreativeAI Live](https://img.shields.io/badge/Live-Website-brightgreen)](https://creativeai-murex.vercel.app/)

## Overview

**CreativeAI** is a cutting-edge AI-powered content generation platform designed to streamline the creation of engaging social media content. Whether you need YouTube video descriptions, Instagram hashtags, LinkedIn posts, or other content types, CreativeAI provides tailored AI solutions to meet your needs.

## Features

- **AI-Powered Content Generation:** Supports YouTube, Instagram, TikTok, LinkedIn, and Twitter content creation.
- **User Account Management:** Secure user authentication and account management powered by Clerk.
- **Credits System:** Track your usage and manage your credits with an integrated system.
- **Output History:** Access and review previously generated content through the history feature.
- **Payment Integration:** Secure payment processing using Stripe for credit purchases.

## Technologies Used

- **Next.js**: React framework for building high-performance web applications.
- **TypeScript**: Provides type safety and enhances the development experience.
- **NeonDB**: PostgreSQL database for reliable and scalable data management.
- **GeminiAI**: AI model for generating high-quality content across various platforms.
- **Clerk**: User authentication and management.
- **Stripe**: Payment processing and subscription management.

## Environment Variables

The following environment variables are used in the project:

```env
# Clerk API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Gemini AI API Key
NEXT_PUBLIC_GEMINI_API_KEY=

# Database URL
DATABASE_URL=

# Stripe API Keys
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Installation

To get started with CreativeAI locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KutbuddinKhan/AI-Content-Generator
   cd CreativeAI
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   Create a `.env` file in the root directory and add the following environment variables based on the provided keys:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   DATABASE_URL=your_database_url
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

CreativeAI is deployed on Vercel. You can visit the live application at [CreativeAI](https://creativeai-murex.vercel.app/).

To deploy your own instance:

1. **Connect to Vercel:**
   - Link your GitHub repository.
   - Set up the environment variables in the Vercel dashboard.

2. **Deploy:**
   - Push your code to the main branch, and Vercel will automatically deploy the latest version.

## Usage

1. **Sign In:**
   - Register or log in to your account through Clerk's secure authentication.

2. **Use Magic Tools:**
   - Select a tool from the dashboard (e.g., YouTube Video Description, Instagram Hashtags).
   - Input the necessary details and generate content.

3. **Manage Credits:**
   - Track your usage in the dashboard.
   - Purchase additional credits through Stripe when needed.

4. **Review Output History:**
   - Access and manage your previously generated content in the Output History section.



## Contact

For questions, feedback, or support, please reach out via email: [kutbuddinkha82@gmail.com](mailto:kutbuddinkha82@gmail.com).

---