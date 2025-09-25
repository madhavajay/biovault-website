# BioVault Website Structure

This project uses [Hono JSX](https://hono.dev/docs/guides/jsx) for better organization and maintainability.

## Structure

```
src/
├── index.tsx          # Main Hono app with routing
├── website/           # Website page components
│   ├── Layout.tsx     # Shared layout and components
│   ├── MainPage.tsx   # Home page
│   ├── ResearcherPage.tsx  # Researcher-focused page
│   └── ParticipantPage.tsx # Participant-focused page
├── api/               # API route handlers
│   └── waitlist.tsx   # Waitlist form handling
└── assets/            # Static assets (styles, images)
    ├── styles.css
    └── images/
```

## Key Features

- **Hono JSX**: Using Hono's JSX capabilities for server-side rendering
- **Modular Structure**: Pages and API routes are organized in separate folders
- **Type Safety**: Full TypeScript support with proper typing
- **Clean Routing**: Using Hono's routing patterns for organization

## Development

The main entry point is `src/index.tsx` which:

1. Sets up the Hono app
2. Defines website routes (`/`, `/researcher`, `/participant`)
3. Mounts API routes under `/api/waitlist`
4. Handles 404s for unmatched routes

Each page component is self-contained and uses the shared `Layout` component for consistency.
