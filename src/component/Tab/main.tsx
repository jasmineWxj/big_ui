import React,{useState,useRef,useEffect} from 'react';
import { Tab, Tabitem, Switch} from '../index';

function Tabmain(){
  const [type,setType] = useState('btn') as any
  const change = (e:string,i:number) => {
      console.log(e,i);
  }
  const changes = (flag:boolean) =>{
    console.log(flag);
    setType(flag ? 'line' : 'btn')
  }

  return  <div style={{'width':'300px'}}>
    <Switch switchChanges ={changes} text={false} left='line' right='btn'></Switch>
    <div style={{'height':'20px'}}></div>
     <Tab 
      aligh='center'
      style={type}
      tabChange = {change}
      >
       <Tabitem  title='react'>
        <img style={{'width':'100px','margin':'0 auto','display':'block'}} src="https://images.unsplash.com/photo-1675527212537-3840fd89e9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
       </Tabitem >
       <Tabitem  title='vue'>html</Tabitem >
       <Tabitem  title='html'>react</Tabitem >
       <Tabitem  title='css'>Vue</Tabitem >
     </Tab>
    </div>
}

export default Tabmain