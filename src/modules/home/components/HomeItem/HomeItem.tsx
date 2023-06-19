import React from 'react';
import { HomeRoute } from '../../routes';
import Link from 'next/link';

type HomeItemProps = {
  route: HomeRoute;
};
const HomeItem = ({ route }: HomeItemProps) => {
  return (
    <div className='flex w-[90vw] items-center justify-start gap-10 rounded-2xl bg-white px-10 py-5 md:w-[500px]'>
      <div className='flex w-1/3 items-center justify-center rounded-lg bg-slate-100 p-5'>
        <route.icon />
      </div>
      <div className='flex w-2/3 flex-col items-start justify-center gap-3 '>
        <h2 className='text-2xl'>{route.title}</h2>
        <p> {route.description}</p>
        <Link
          href={route.path}
          className='self-end rounded-lg bg-blue-500 px-5  py-2'
        >
          <span className='text-white'>Перейти</span>
        </Link>
      </div>
    </div>
  );
};

export default HomeItem;
