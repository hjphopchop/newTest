import { HomeIcon } from '@/asets/iconst';
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
        <div className='mx-10 h-[50px] w-[100px] rounded-b-2xl bg-white drop-shadow-lg'>
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
      <main className='h-full w-full overflow-y-auto overflow-x-hidden px-10 py-5'>
        {children}
      </main>
    </>
  );
};
export const getLayout: GetLayoutFn = (page) => <Layout>{page}</Layout>;

export default Layout;
