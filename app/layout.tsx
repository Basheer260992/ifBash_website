import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechConsult - ServiceNow & SAP Consulting Services',
  description: 'Leading consulting firm specializing in ServiceNow and SAP implementations, digital transformation, and enterprise solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
