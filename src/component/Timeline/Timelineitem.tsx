import React from 'react';
import './index.scss';
import classnames from 'classnames';

interface  Timeline{
    children:any
    time?:string
    color?:string
    img?:string
}

function TimeItem(props:Timeline) {
    const {children,time,color='red',img=''} = props
    let background;
    if(img) {
        background = `url(${img})`
    }

  return (
    <div className={classnames({
        time_line_common:true
    })}>
        <div className={classnames({
            spot:true,
            spot_com:true,
            noborder:background
        })}
        style={{
            border: `2px solid ${color}`,
            background,
        }}
        ></div>
        <div className={classnames({
            line:true,
            line_com:true
        })}></div>
        <main className={classnames('')}>
            <span>{time}</span>
            <div>{children}</div>
        </main>
    </div>
  );
}

export default TimeItem;
