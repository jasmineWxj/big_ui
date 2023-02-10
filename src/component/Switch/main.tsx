import React,{useState,useRef,useEffect} from 'react';
import { Switch} from '../index';

function Switchmain(){
    const [data,setData] = useState(false)
    const change = (flag:boolean) => {
        setData(flag)
    }
    return  <div >
        <Switch switchChanges ={change} text={false}></Switch>
        <p>{data === true ? '开启' : '关闭'}</p>
    </div>
}

export default Switchmain