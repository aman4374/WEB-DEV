---
title: Next.js Tutorial
description: This is a Next.js tutorial for learning server-side rendering and building scalable React applications
slug: next-js-tutorial
date: 02/03/2024
author: Aman
image: /next-js.jpg

---

Welcome to this comprehensive Next.js tutorial! Whether you're familiar with React and looking to level up your web development skills, or you're new to the world of server-side rendering, this guide will take you through the fundamentals of Next.js and introduce you to more advanced concepts as you progress.

## Introduction to Next.js

Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications. It's designed to optimize performance, SEO, and developer experience.

### Why Learn Next.js?

- **Server-Side Rendering (SSR)**: Improves performance and SEO of React applications.
- **Static Site Generation (SSG)**: Creates fast, static websites that can be easily deployed.
- **File-based Routing**: Simplifies the creation of routes in your application.
- **API Routes**: Allows building API endpoints as part of your Next.js app.

## Setting Up for Next.js Development

To start developing with Next.js, you'll need to set up your development environment. Here are the basics:

1. **Install Node.js**: Next.js requires Node.js to be installed on your system.
2. **Choose a Text Editor**: Popular options include Visual Studio Code, Sublime Text, or WebStorm.
3. **Create Next.js App**: Use the official Create Next App tool to set up a new Next.js project quickly.

```bash
npx create-next-app my-next-app
cd my-next-app
npm run dev
```

## Next.js Basics

Let's start with the fundamentals of Next.js. In this section, we'll cover:

- **Pages and Routing**: Understand how Next.js handles routing.
- **Link Component**: Learn about client-side navigation in Next.js.
- **Image Component**: Explore Next.js's built-in image optimization.

### Pages and Routing

```jsx
// pages/index.js
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}

// pages/about.js
export default function About() {
  return <h1>About Us</h1>;
}

// pages/posts/[id].js
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
}
```

### Link Component

```jsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/posts/[id]" as="/posts/first-post">
        <a>First Post</a>
      </Link>
    </nav>
  );
}
```

### Image Component

```jsx
import Image from 'next/image';

export default function Profile() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile Picture"
      width={500}
      height={500}
    />
  );
}
```

## Intermediate Next.js

Once you're comfortable with the basics, it's time to explore more advanced features of Next.js:

- **Data Fetching**: Understand different methods of fetching data in Next.js.
- **API Routes**: Learn how to create API endpoints within your Next.js app.
- **Custom App and Document**: Explore how to customize the application initialization process.

### Data Fetching

```jsx
// Static Site Generation (SSG)
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60, // Optional: revalidate every 60 seconds
  };
}

// Server-Side Rendering (SSR)
export async function getServerSideProps(context) {
  const res = await fetch(`https://api.example.com/data/${context.params.id}`);
  const data = await res.json();

  return { props: { data } };
}

// Client-Side Fetching
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return <div>Hello {data.name}!</div>;
}
```

### API Routes

```jsx
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}

// pages/api/post/[pid].js
export default function handler(req, res) {
  const { pid } = req.query;
  res.end(`Post: ${pid}`);
}
```

### Custom App and Document

```jsx
// pages/_app.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

## Advanced Next.js

Now that you're comfortable with intermediate topics, let's explore some advanced Next.js concepts:

- **Internationalization**: Learn how to create multi-language websites with Next.js.
- **Authentication**: Understand how to implement authentication in Next.js applications.
- **Deployment**: Explore different deployment options for Next.js apps.

### Internationalization

```jsx
// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};

// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  return (
    <h1>{locale === 'en' ? 'Welcome' : 'Bienvenue'}</h1>
  );
}
```

### Authentication

```jsx
// lib/auth.js
import { useSession, signIn, signOut } from 'next-auth/react';

export function useAuth() {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';
  const isAuthenticated = !!session;

  return {
    session,
    isLoading,
    isAuthenticated,
    signIn,
    signOut,
  };
}

// pages/profile.js
import { useAuth } from '../lib/auth';

export default function Profile() {
  const { session, isLoading, isAuthenticated, signIn, signOut } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return (
      <button onClick={() => signIn()}>Sign In</button>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
```

### Deployment

```bash
# Build your application
npm run build

# Start your application in production mode
npm start

# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy --prod

# Deploy to AWS Amplify
amplify publish
```

## Conclusion

Congratulations on making it through this Next.js tutorial! You've covered everything from the basics of routing and data fetching to advanced topics like internationalization and authentication. Next.js provides a powerful set of tools for building modern web applications, and with this knowledge, you're well-equipped to create fast, SEO-friendly, and scalable React applications.

Happy coding with Next.js!