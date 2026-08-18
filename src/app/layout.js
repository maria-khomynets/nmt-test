import './globals.css';

export const metadata = {
  title: 'Тести НМТ з математики',
  description: 'Тести для підготовки до НМТ з математики',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
