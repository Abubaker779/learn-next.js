import { Inter } from 'next/font/google';
// app/ui/fonts.ts
import { Lusitana } from 'next/font/google';

export const lusitana = Lusitana({
  subsets: ['latin'], // Specify the required subsets
  weight: ['400', '700'], // Specify the font weights you need
});
 
export const inter = Inter({ subsets: ['latin'] });
