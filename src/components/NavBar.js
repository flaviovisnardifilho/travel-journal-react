import React from 'react';
import { GiEarthAmerica } from 'react-icons/gi';


export function NavBar() {
  return (
    <section className='nav'>
      <GiEarthAmerica className='nav--icon'/>
      <span>my travel journal.</span>
    </section>
  );
}
