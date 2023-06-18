import { HomeIcon } from '@/asets/icons';
import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react';

export type LayoutProps = {
  children: React.ReactNode;
};
export type GetLayoutFn = (page: ReactElement) => ReactNode;
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className=''>
        <div className='mx-5 h-[50px] w-[100px] rounded-b-2xl bg-white drop-shadow-lg md:mx-10'>
          <Link
            href={'/'}
            className='  flex h-full w-full items-center justify-center '
          >
            <span className='fill-blue-500'>
              <HomeIcon />
            </span>
          </Link>
        </div>
      </header>
      <main className=' flex h-[calc(100vh-50px)] w-full flex-col items-center justify-center overflow-y-auto overflow-x-hidden px-10'>
        {children}
      </main>
    </>
  );
};
export const getLayout: GetLayoutFn = (page) => <Layout>{page}</Layout>;

export default Layout;
