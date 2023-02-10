import React,{useState,useRef,useEffect} from 'react';
import { Switch, TimeItem, Timeline} from '../index';
import classnames from 'classnames';

function Timemain(){
    const [type,setType] = useState('btn') as any
    const changes = (flag:boolean) =>{
        setType(flag ? 'center' : 'left')
    }
  return  <div style={{'width':'300px'}}>
    <Switch switchChanges ={changes} text={false} left='center' right='left'></Switch>
    <Timeline line_left = {type}>
        <TimeItem time='2022年一月一日' color='pink'>6月30日截止申请 网易开放暴雪游戏退款申请通道6月30日截止申请</TimeItem>
        <TimeItem time='2022年一月一日' color='yellow'>网易：暴雪提议蛮横，不符合商业逻辑网易：雪提议蛮横，不符合商业逻辑</TimeItem>
        <TimeItem time='2022年一月一日' >暴雪中国：正在寻找机遇将游戏重新带回给大家</TimeItem>
        <TimeItem time='2022年'>网易：暴雪提议蛮横，不符合商业逻辑</TimeItem>
    </Timeline>
    </div>
}

export default Timemain