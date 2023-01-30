import React from 'react';
import './index.scss';
import { useState,useRef } from 'react';
import ReactECharts from 'echarts-for-react';
// import echarts from 'echarts' 
// import 'echarts/lib/chart/line';  
interface  Btn{
}

function Demo() {
    let option = {
      title:{
        text:'用户骑行订单',
        x:'center'
      },
      tooltip:{
        trigger:'axis',
      },
      xAxis:{
        data:['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'OFO订单量',
          type:'line',   //这块要定义type类型，柱形图是bar,饼图是pie
          data:[1000,2000,1500,3000,2000,1200,800]
        }
      ]
    }
    let a =[
        {
            text:'11111',
            show:'none',
            height:'30px'
        },
         {
            text:'222',
            show:'none',
            height:'30px'

        },
         {
            text:'3333',
            show:'none',
            height:'30px'

        },
    ];
    const [ee,setee] = useState(a)
    const cc = useRef()
    const changes = (item:any,index:any)=>{
        if(cc.current === index){
            cc.current = index
        }else if(typeof cc.current !== 'undefined'){
            ee[cc.current].height = '30px'
            ee[cc.current].show = 'none'
        }
        ee[index].show = item.show === 'block' ? 'none' : 'block'
        ee[index].height = item.height === '30px' ? '100px' : '30px'
        setee([...ee])
        cc.current = index
    }
  return (
    <div>
        {
            ee.map((item,index)=>{
                return <div className='aaa' style={{height:item.height}} onClick={()=>changes(item,index)}>
                    {item.text}
                    <div className='ccc' style={{display:item.show}}></div>
                    </div>
            })
        }
        <ReactECharts option={option} theme="Imooc"  style={{height:'400px'}}/>
    </div>
  );
}

export default Demo;
