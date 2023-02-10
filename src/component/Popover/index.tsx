import React,{useState,useRef,useEffect} from 'react';
import './index.scss';
import classnames from 'classnames';
interface  Tabitems{
}

function Popover(props:Tabitems) {
    const {} = props
  return (
    <div className={classnames('popover')}>
    </div>
  );
}

export default Popover;
