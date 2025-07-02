# FanRink

This project uses Next.js, TypeScript and TailwindCSS with a simple Supabase client.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Create a `.env.local` file and add your Supabase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

Vercel deployments will automatically run the build and use the environment variables configured in the dashboard.

The project configures a path alias `@/` that maps to the `src` directory. Import modules using
`@/lib/supabase` or other paths under `src/`.

