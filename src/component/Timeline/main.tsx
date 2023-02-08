import React,{useState,useRef,useEffect} from 'react';
import { Tab, TimeItem, Timeline} from '../index';
import classnames from 'classnames';

function Timemain(){
  return  <div style={{'width':'300px'}}>
    <Timeline line_left = 'center'>
        <TimeItem time='2022年一月一日'>6月30日截止申请 网易开放暴雪游戏退款申请通道</TimeItem>
        <TimeItem time='2022年一月一日'>网易：暴雪提议蛮横，不符合商业逻辑</TimeItem>
        <TimeItem time='2022年一月一日'>暴雪中国：正在寻找机遇将游戏重新带回给大家</TimeItem>
        <TimeItem time='2022年'>网易：暴雪提议蛮横，不符合商业逻辑</TimeItem>
    </Timeline>
    </div>
}

export default Timemain