import React from 'react';
import './index.scss';
import classnames from 'classnames';

interface  Timeline{
    children:any
}

function TimeItem(props:Timeline) {
    const {children} = props
    console.log(props);
    
  return (
    <div className={classnames({
        time_line_common:true
    })}>
        <div className={classnames({
            spot:true,
            spot_com:true
        })}></div>
        <div className={classnames({
            line:true,
            line_com:true
        })}></div>
        <main className={classnames('')}>
            <div></div>
            <div></div>
            {children}
        </main>
    </div>
  );
}

export default TimeItem;
