# Job Readiness Assessment Platform

A comprehensive Next.js web application for conducting job readiness assessments. This platform helps users evaluate their job readiness across multiple categories including technical skills, portfolio, CV optimization, LinkedIn presence, references, and interview readiness.

## Overview

This application provides an interactive assessment experience where users can:
- Complete a multi-section job readiness assessment
- Receive detailed analytics and scores across different categories
- View personalized recommendations and insights
- Track their progress with visual charts and gauges

## Key Features

### 🏠 Home Page
- **Hero Section**: Engaging introduction to the job readiness assessment
- **Call-to-Action (CTA)**: Prominent section encouraging users to start the assessment
- **Assessment Features**: Animated feature cards showcasing what users get from the assessment
- **Responsive Design**: Fully responsive layout optimized for all devices

### 📝 Assessment Flow
- **Guidelines Page**: Instructions and guidelines before starting the assessment
- **Multi-Section Test**: 
  - Questions organized into multiple sections (Tech Skills, Portfolio, CV, LinkedIn, References, Interview Readiness)
  - Each section contains multiple questions with selectable options
  - Alphabet-prefixed section titles (A, B, C, etc.)
  - Progress tracking with step indicators
  - Form validation ensuring all questions are answered before proceeding
  - Back navigation to review previous sections

### 📊 Results & Analytics
- **Success Page**: Celebration screen after completing the assessment
- **Detailed Results Page**: 
  - Overall job readiness score with visual gauge
  - Category-wise breakdown with color-coded cards
  - Interactive line chart showing performance across categories
  - Mastery level indicators
  - Performance percentage comparisons
  - Personalized summary and recommendations

### 🎨 UI/UX Features
- **3D Button Effects**: Custom-styled buttons with 3D top effects for enhanced visual appeal
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging page transitions
- **Mobile Drawer**: Responsive navigation drawer for mobile devices
- **Loading States**: Comprehensive loading and error handling throughout the application
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Technology Stack

### Frontend
- **Next.js 16.1.1**: React framework with App Router
- **React 19.2.3**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Recharts**: Data visualization library for charts and gauges
- **AOS**: Animate On Scroll library
- **Lucide React**: Icon library

### Styling & Design
- **Custom Fonts**: 
  - Nunito (primary font)
  - Clash Display (secondary font for headings)
- **Custom Color Palette**: Primary color `#146374` (teal/cyan)
- **Responsive Breakpoints**: Mobile-first design approach

### API Integration
- **RESTful API**: Integration with backend API for:
  - Fetching assessment questions (`GET /questions`)
  - Submitting answers (`POST /answers`)
  - Retrieving statistics (`GET /statistics/{id}`)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── assessment/        # Assessment flow pages
│   │   ├── page.tsx      # Guidelines page
│   │   ├── test/         # Test page with questions
│   │   └── result/[id]/  # Results page with dynamic ID
│   └── layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── assessment/       # Assessment-specific components
│   ├── home/             # Home page components
│   ├── result/           # Results visualization components
│   ├── site-header/      # Navigation header
│   └── ui/               # Base UI components
└── lib/                  # Utility functions
```

## Key Components

### Assessment Components
- `QuestionCard`: Displays individual questions with selectable options
- `SurveyOption`: Custom option button with checkmark on selection
- `NextAssessmentBtn`: Primary action button with 3D styling
- `BackButton`: Navigation button with 3D styling

### Results Components
- `ScoreGauge`: Circular progress gauge showing overall score
- `CategoryCard`: Category breakdown cards with color-coded variants
- `AssessmentLineChart`: Line chart visualizing category scores
- `ResultComp`: Main results display component

### Home Components
- `JobReadinessHero`: Hero section component
- `CTA`: Call-to-action section
- `AssessmentSection`: Features and benefits section
- `FeatureCard`: Animated feature cards

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_API_BASE_URL=your_api_base_url
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
