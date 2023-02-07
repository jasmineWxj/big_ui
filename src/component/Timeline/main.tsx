import React,{useState,useRef,useEffect} from 'react';
import { Tab, TimeItem, Timeline} from '../index';
import classnames from 'classnames';

function Timemain(){
  return  <div style={{'width':'300px'}}>
    <Timeline line_left = 'center'>
        <TimeItem >1234</TimeItem>
        <TimeItem>1234</TimeItem>
        <TimeItem>1234</TimeItem>
        <TimeItem>1234</TimeItem>
    </Timeline>
    </div>
}

export default Timemain