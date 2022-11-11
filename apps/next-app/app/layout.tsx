/* eslint-disable @next/next/no-head-element */
import React from 'react';
import Navigation from '../components/navigation';
import './../styles/tailwind.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Next-app | Home</title>
      </head>
      <body>
        <Navigation />
        <main className="pt-0">{children}</main>
      </body>
    </html>
  );
}
