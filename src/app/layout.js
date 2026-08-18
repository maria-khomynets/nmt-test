import './globals.css';

export const metadata = {
  title: 'Тренажер НМТ з математики',
  description: 'Інтерактивний тренажер для підготовки до НМТ з математики',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
