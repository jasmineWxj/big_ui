import React from 'react';
import './index.scss';
import classnames from 'classnames';
interface  Timeline{
    children?:any
    line_left?: 'left' | 'center'
}

function Timeline(props:Timeline) {
    const {children,line_left} = props
  return (
    <div className='Timeline'>
        <ul className={classnames({
            line_left:line_left === 'left',
            line_center:line_left === 'center',
            })}>
            {children && children.map((item:any,index:number)=>{
                return <li 
                key={index}
                className={classnames({
                    left_main: index%2>0,
                    right_main: index%2===0
                })}
                >{item}</li>
            })}
        </ul>
    </div>

  );
}

export default Timeline;
