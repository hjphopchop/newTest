import { HomeIcon } from '@/asets/iconst';
import Link from 'next/link';
import React, { ReactElement, ReactNode } from 'react'

export type LayoutProps = {
    children: React.ReactNode;
  }
  export type GetLayoutFn = (page: ReactElement) => ReactNode;
const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <header className=''>
        <div className='w-[100px] bg-white rounded-b-2xl h-[50px] mx-10 drop-shadow-lg'>
        <Link href={'/'} className='  w-full h-full flex justify-center items-center '><span className='fill-blue-500'><HomeIcon/></span></Link>
        </div>
        
        
        
        
    </header>
        <main className='px-10 py-5 h-full w-full overflow-y-auto overflow-x-hidden'>
            {children}
        </main>
    
    </>
    
  )
}
export const getLayout: GetLayoutFn = (page) => (
    <Layout>{page}</Layout>
  );

export default Layout