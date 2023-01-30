import React from 'react';
import './index.scss';

interface  Btn{
    children?:string,
    hover?:boolean,
    disabled?:boolean
    type?:'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default'
}

function Button(props:Btn) {
    const {children = '按钮',type = 'primary' ,disabled} = props
    console.log(type);
    
  return (
    <button className={`Button ${type} ${ disabled ? 'is_disabled' : 1 }`} >
    {children}
    </button>
  );
}

export default Button;
