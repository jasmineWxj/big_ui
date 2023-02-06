import React,{useState,useRef,useEffect} from 'react';
import './index.scss';

interface  Tabs{
    children:any
    aligh:'left' | 'center'
    style: 'btn' | 'line'
    tabChange?:(e:string,i:number) => void,
}
/**
 * 默认tab 左对齐
 * 
 */
function Tab(props:Tabs) {
    const [num,setNum] = useState(0)
    const [from,setFrom] = useState(0)
    const {children, aligh = 'left',style, tabChange} = props;
    const tabbtn = (e:any,i:number)=>{
        setFrom(e.target.offsetLeft + (( e.target.offsetWidth - 30)/2))
        setNum(i)
        tabChange && tabChange(e.target.innerText,i)
    }
    useEffect(()=>{
        children.forEach((element:any,index:number) => {
            if(element.props.current){
                setNum(index)
            }
        });
        setTimeout(() => {
            var currents = document.querySelector('.current') as any
             setFrom(currents.offsetLeft + (( currents.offsetWidth - 30)/2))
        }, 0);
        
    },[])
    return (
        <div className='tab'>
            <div className={`tab_header ${aligh === 'center' ? 'tab_header_center' : ''} ${style === 'btn' ? 'tab_header_btn' : 'tab_header_line'}`}>
                <div className={`tab_item_line ${style === 'btn' ? 'tab_item_line_none' : ''}`} style={{transform: `translateX(${from}px)`}}></div>
                {
                    children.map((item:any,index:number)=>{
                        return <div onClick={(e)=>tabbtn(e,index)} className={`tab_header_item ${num === index ? 'current' : '' }`} key={index}>{item.props.title}</div>
                    })
                }
            </div>
            <div>
                {children.map((item:any,index:number)=>{
                    return <div  className={`tab_item ${ num === index ? 'item_current' : '' }`} key={index}>{item}</div>
                })}
            </div>
           
        </div>
    );
}

export default Tab;
