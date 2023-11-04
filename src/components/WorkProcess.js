import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { Back } from './Back';
import { Loader } from './Loader';
import { useState,useEffect } from 'react';
export const WorkProcess=()=>{
   const loc=useLocation();
    const nav=useNavigate();
    const [load,setLoad]=useState(true);

    return (
        <div id="Work" style={{display:'flex',flexDirection:'column',minHeight:'70vh',maxHeight:'95vh',minWidth:"35vb"}}>
            <div style={{display:'flex',flexDirection:'row',height:'10vh',width:'100%'}}>
                <Back second={"WORK PROCESS"} flexbasis={"70%"} />
                <div style={{display:'flex',flexBasis:'30%',justifyContent:'end',maxWidth:'70%'}}>{loc.state && loc.state.hasOwnProperty("name")?loc.state.name:""}</div>
            </div>
            <div style={{display:'flex',height:'60vh',justifyContent:'center',alignItems:'center'}}>
            {load?<Loader/>:null}
            <img loading='lazy' onLoad={()=>{setLoad(false);}} src={require("./AdminImages/hjw.png")} style={{objectFit:'fill',height:'100%',width:'75%',display:'flex',justifyContent:'center'}}/>
          
            </div>
            
        </div>
    )
}