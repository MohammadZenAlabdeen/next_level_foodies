import MealsHeader from '@/components/Header/header';
import './globals.css';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MealsHeader/>

        {children}
      </body>
    </html>
  );
}
