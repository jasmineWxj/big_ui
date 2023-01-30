import React,{useState,useRef,useEffect} from 'react';
import { Tab, Tabitem} from '../index';

function Tabmain(){
    return  <div>
     <Tab aligh='left' style='btn'>
       <Tabitem  title='dddd'>css</Tabitem >
       <Tabitem  title='eeee'>html</Tabitem >
       <Tabitem  title='ffff'>react</Tabitem >
       <Tabitem  title='ffff'>Vue</Tabitem >
     </Tab>
    </div>
}

export default Tabmain