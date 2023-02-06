import React,{useState,useRef,useEffect} from 'react';
import './index.scss';
import classnames from 'classnames';
interface  Tabitems{
    switchChanges?:(flag:boolean) => void
    text?:boolean
    right?:string
    left?:string
}

function Switch(props:Tabitems) {
    const {switchChanges, text = false, right='关闭', left='开启'} = props
    const [position, setPosition] = useState(0)
    const flag = useRef(false)
    const switchChange = () => {
        setPosition(position === 0 ? 150 : 0)
    }
    useEffect(()=>{
        flag.current = position === 0 ? false : true
        switchChanges && switchChanges(flag.current)
    },[position])
    
  return (
    <div className={classnames('switch')}>
        <div className={
            classnames({
                'box' : true,
                'bilue' : position
            })}
            onClick={switchChange}>
            <main
             style = {{'transform':`translateX(${position}%)`}}
             >
                <div className={classnames({'close':text})}>{right}</div>
                <div className={classnames({'open':text})}>{left}</div>
             </main>
        </div>
    </div>
  );
}

export default Switch;
