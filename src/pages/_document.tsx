import { Html, Head, Main, NextScript } from 'next/document';

//bg-gradient-to-r from-[#131C85] to-[#8278D9]
//bg-gradient-to-r from-[#FD8451] to-[#FFBD6F]
export default function Document() {
  return (
    <Html lang='ru'>
      <Head />
      <body className=' relative h-screen w-screen overflow-x-hidden bg-gradient-to-r from-[#d0cce2] to-[#bab0e7]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
