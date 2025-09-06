# Gigs & Gains Guild

A Base MiniApp that curates legitimate online earning opportunities and provides micro-skill guides for individuals seeking to earn money online.

## Features

- **Curated Earning Listings**: Verified remote jobs, gig opportunities, and freelance projects
- **Micro-Skill Guides**: Bite-sized tutorials on in-demand online earning skills
- **Task Competency Checks**: Assessments to verify skill proficiency
- **Base Integration**: Built with OnchainKit and MiniKit for seamless Web3 experience

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Blockchain**: Base network integration via OnchainKit
- **AI**: OpenAI/OpenRouter for content generation
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gigs-gains-guild
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys:
   - `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
   - `OPENROUTER_API_KEY`: Your OpenRouter API key for AI content generation

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main homepage
│   ├── providers.tsx      # MiniKit and other providers
│   └── globals.css        # Global styles and design tokens
├── components/            # Reusable UI components
│   ├── AppShell.tsx       # Main app layout
│   ├── ArticleCard.tsx    # Card component for listings/guides
│   ├── HeroSection.tsx    # Homepage hero section
│   └── ...
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript type definitions
│   ├── constants.ts       # Mock data and constants
│   └── openai.ts          # AI content generation utilities
└── public/                # Static assets
```

## Key Components

### AppShell
Main application layout with header, navigation, and wallet connection.

### ArticleCard
Versatile card component that displays both job listings and skill guides with appropriate metadata.

### HeroSection
Eye-catching landing section with animated elements and key metrics.

### FeaturedSection
Tabbed interface showing curated listings and guides with filtering capabilities.

## Design System

The app uses a custom design system with:
- **Colors**: Purple to cyan gradient theme with glass morphism effects
- **Typography**: Clean, modern font hierarchy
- **Components**: Consistent button styles, cards, and interactive elements
- **Animations**: Subtle floating animations and smooth transitions

## Integration Points

### Base MiniKit
- Uses `MiniKitProvider` for Base network integration
- Wallet connection via OnchainKit components
- Ready for on-chain payments and transactions

### AI Content Generation
- OpenAI/OpenRouter integration for dynamic content
- Personalized recommendations based on user skills
- Automated micro-skill guide generation

### Future Integrations
- Supabase for backend data management
- Stripe for fiat payment processing
- Privy for enhanced wallet management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
