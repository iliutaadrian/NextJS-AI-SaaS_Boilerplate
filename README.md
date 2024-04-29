## Youtube to Second Brain

Transform YouTube videos into actionable insights with

- AI-powered summaries,
- key highlights,
- memorable quotes.

Effortlessly assimilate information and build your second brain on **Notion**.
Elevate your learning experience and save time while staying ahead with MindSync – where AI meets personalized knowledge curation!

## Technologies Used and Plugings

- Next.js 13: A React framework for building server-side rendered and static websites.
- Tailwind CSS: A utility-first CSS framework for quickly building custom designs.
- Neon DB: Free, easy to use database with Drizzle ORM on top.
- I18n: Multi-language support with Next Translate
- Clerk: Secure and easy authentication.
- Stripe: Secure and easy payment.
- Vercel Analytics: Google Analytics alternative for traffic and performance insights
- SEO: Custom OG, Twitter tags.
- Resend: modern email sending platform with React Email
- React Email Preview, Colors Preview
- Crisp: all-in-one business messaging platform for feedback and customer support
- Jest: Jest is a JavaScript testing framework.
- Sentry: Error Monitoring, Performance Monitoring, and Session Replay, Code Coverage

### Next.js SEO Complete Checklist

[https://dminhvu.com/nextjs-seo](SEO complete checklist)

- Meta tags: custom OG, Twitter
- JSON-LD Schema
- Sitemap
- robots.txt
- Link tags
- Script optimization
- Image optimization

Email Checklist

- implemented onboarding email with cleark webhooks
- (https://clerk.com/blog/webhooks-getting-started)[Clerk webhooks]

### TODO:

- test full flow app
- make documentation for the app
  Shadcn,
  present flow with AI
  oneclick deploy to vercel
  easy change between multiple env files

Error Monitoring Sentry

- got to /sentry-example-page to test the error

Crisp
( https://help.crisp.chat/en/article/how-do-i-install-crisp-live-chat-on-nextjs-xh9yse/ )[Crisp install guide]

## Installation Dev Setup

git clone https://github.com/iliutaadrian/NextJS-AI-SaaS_Boilerplate tubemindsync
git remote add origin https://github.com/iliutaadrian/NextJS-AI-SaaS_Boilerplate

### Create env files

cp .env.example .env

ENV=dev

cp .env.example .env.dev
ENV=dev

NEXTAUTH_SECRET=secretkeyapp
NEXT_PUBLIC_APP_URL=http://localhost:3000

### Install dependencies

npm install

If you want to refresh the dependencies

# 👇️ (macOS/Linux) delete node_modules and package-lock.json

rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# 👇️ clean your npm cache

npm cache clean --force

npm instal

### Clerk setup

https://clerk.com/docs/quickstarts/setup-clerk

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/

### OpenAi

https://platform.openai.com/api-keys
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Postgres

Neon DB
https://neon.tech/docs/guides/nextjs
POSTGRES_URL_NON_POOLING=postgresql://xxxxxxxxxxx:xxxxxxxxxxxx@xxxxxxxxxxxxxxxxxxxxx.eu-central-1.aws.neon.tech/tubemindsync?sslmode=require
POSTGRES_URL=postgresql://xxxxxxxxxxx:xxxxxxxxxxxx@xxxxxxxxxxxxxxxxxxxxx-pooler.eu-central-1.aws.neon.tech/tubemindsync?sslmode=require

Push schema to Neon DB
Schema type: lib/db/index.ts
npx drizzle-kit push:pg
npx drizzle-kit studio

### Stripe

https://docs.stripe.com/keys
stripe listen --forward-to localhost:3000/api/stripe/webhook

STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Resend

https://resend.com/docs/send-with-nextjs

RESEND_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Sentry

https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
SENTRY_AUTH_TOKEN=sntrys_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### Crisp

https://docs.crisp.chat/guides/rest-api/quickstart/
Click Setup, Html and copy the token for CRISP_WEBSITE_ID
NEXT_PUBLIC_CRISP_WEBSITE_ID=xxxxxxxxxx
