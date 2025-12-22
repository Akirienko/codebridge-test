# Article Search Application

A Single Page Application built with React and TypeScript that allows users to search and browse articles from the Spaceflight News API.

## 🚀 Features

- **Article Search**: Filter articles by keywords with real-time search functionality
- **Smart Highlighting**: Automatically highlights matched keywords in article titles and descriptions
- **Priority-based Filtering**: Results are ranked by relevance (title matches have higher priority than description matches)
- **Load More Pagination**: Display 6 articles initially with "Load More" functionality
- **Detailed Article View**: Click on any article to view its full details
- **Responsive Design**: Clean and modern UI using Material-UI components
- **State Management**: Global state management using Zustand
- **Type Safety**: Full TypeScript implementation for better code quality

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Material-UI (MUI)** - React component library
- **SCSS** - CSS preprocessor with CSS Modules
- **Spaceflight News API** - Data source for articles

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd codebridge-test
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

## 🚀 Running the Application

### Development Mode
\`\`\`bash
npm run dev
\`\`\`
The application will start at \`http://localhost:5173\`

### Build for Production
\`\`\`bash
npm run build
\`\`\`

### Preview Production Build
\`\`\`bash
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/          # Reusable React components
│   ├── ArticleCard/    # Article card component
│   ├── ArticleList/    # List of articles
│   ├── SearchBar/      # Search input component
│   ├── MainInput/      # Reusable input component
│   └── Loader/         # Loading spinner
├── pages/              # Page components
│   ├── Home/           # Home page with article list
│   └── Article/        # Individual article page
├── hooks/              # Custom React hooks
│   └── useSearch.ts    # Search and filtering logic
├── store/              # Zustand state management
│   └── useArticlesStore.ts
├── utils/              # Utility functions
│   └── utils.ts        # Date formatting, text highlighting
├── types/              # TypeScript type definitions
│   └── types.ts
├── styles/             # Global styles and variables
│   ├── globals.scss
│   ├── _variables.scss
│   └── _reset.scss
└── App.tsx             # Main app component with routing
\`\`\`

## 🎯 Key Features Explanation

### Search & Filtering
- Articles are filtered by keywords (space-separated)
- Each keyword is searched in both title and summary
- **Priority scoring system:**
  - Title match: 2 points per keyword
  - Summary match: 1 point per keyword
- Results are sorted by score (highest first)
- Articles with no matches are excluded

### Keyword Highlighting
- Matched keywords are highlighted with yellow background
- Works in both article titles and descriptions
- Case-insensitive matching

### Load More Pagination
- Initially displays 6 articles
- "Load More" button loads 6 more articles
- Automatically resets to 6 when search query changes
- Button disappears when all articles are displayed

## 🔧 Code Quality Features

- **Custom Hooks**: \`useSearch\` for search logic separation
- **State Management**: Zustand for global article state
- **Performance Optimization**: \`useMemo\` for expensive computations
- **Type Safety**: Full TypeScript coverage
- **Component Isolation**: CSS Modules for scoped styling
- **Clean Code**: Separated concerns, reusable components

## 📡 API

Uses [Spaceflight News API v4](https://api.spaceflightnewsapi.net/v4/docs/)
- Endpoint: \`https://api.spaceflightnewsapi.net/v4/articles/?limit=100\`
- Fetches 100 most recent articles on app load

## 🎨 Styling

- SCSS for advanced styling features
- CSS Modules for component-scoped styles
- Global variables for consistent theming
- Material-UI components for consistent design
- Responsive design considerations

## 📝 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint

## 🌐 Browser Support

Modern browsers with ES6+ support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👤 Author

Created as a test assignment project

## 📄 License

This project is open source and available for educational purposes.
