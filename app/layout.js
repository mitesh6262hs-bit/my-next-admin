import '../styles/globals.css';

export const metadata = {
  title: 'RTO Admin',
  description: 'Next.js Firebase Admin Panel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
