import React from 'react';
import { homeRoutes } from '../../routes';
import { HomeItem } from '../HomeItem';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 '>
      {homeRoutes.map((route) => (
        <HomeItem key={route.path} route={route} />
      ))}
    </div>
  );
};

export default Home;
