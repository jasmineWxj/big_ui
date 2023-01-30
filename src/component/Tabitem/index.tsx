import React from 'react';
import './index.scss';

interface  Tabitems{
    children:any
    title:string
    current?:boolean
}

function Tabitem(props:Tabitems) {
    const {children} = props
  return (
    <div className='tab_item_box'>
        {children}
    </div>
  );
}

export default Tabitem;
