import { Inter, Lusitana  } from 'next/font/google';

// specify what subset you'd like to load.
export const inter = Inter({ subsets: ['latin'] });

// import a secondary font called Lusitana
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
