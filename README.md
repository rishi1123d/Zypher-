# Zypher

Zero-Knowledge Proof Protocol for secure identity verification.

## Prerequisites

- Node.js (version 18 or later)
- npm or yarn or pnpm

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Zypher-.git
cd Zypher-
```

### 2. Install dependencies

Using npm:
```bash
npm install --legacy-peer-deps
```

Using yarn:
```bash
yarn install --legacy-peer-deps
```

Using pnpm:
```bash
pnpm install --legacy-peer-deps
```

The `--legacy-peer-deps` flag is required to handle dependency conflicts.

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory with the following content:

```
NEXT_PUBLIC_PRIVY_APP_ID=your-privy-app-id
```

You can get your Privy App ID by signing up at [privy.io](https://privy.io) and creating a new application.

### 4. Run the development server

```bash
npm run dev
```

or

```bash
yarn dev
```

or

```bash
pnpm dev
```

### 5. View the application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Authentication

This project uses Privy for authentication, which provides:

- Email/social login
- Wallet connections (Ethereum, Solana, etc.)
- Embedded wallets
- Multi-factor authentication

To customize the authentication experience, modify the `app/providers/PrivyProvider.tsx` file.

## Build for Production

To build the application for production:

```bash
npm run build
npm start
```

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Shadcn UI
- Privy Authentication

## License

See the [LICENSE](LICENSE) file for details.
