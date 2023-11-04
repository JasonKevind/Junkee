import '../App.css';
import { where,getDocs,query, collection } from 'firebase/firestore/lite';
import { db } from '../firebase';
import {ImTruck} from 'react-icons/im';
import {MdElectricRickshaw} from 'react-icons/md';
import {PiMopedFill} from 'react-icons/pi';
import { Back } from './Back';
import { Problems } from './problems';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
export const Dates=()=>{
  const third=[{veh:"motorbike" ,text:"From 01kg to 05kg",id:1},
  {veh:"tricycle",text:"From 06kg to 10kg",id:2},
  {veh:"mini-truck",text:"More than 10 kg",id:3}
]  
  const loc=useLocation();
    const nav=useNavigate();
    useEffect(()=>{
      if(!loc.state || Object.keys(loc.state).length<2)
        {nav("/")}
    },[loc.pathname])
   const [confirm,setConfirm]=useState(false);
   const [add,setAdd]=useState();
   useEffect(()=>{
    if(confirm){
      const fetchData=async()=>{
        const q=query(collection(db,"clients"),where("contact","==",loc.state.contact))
        const ans=await getDocs(q);
        if(ans.docs[0].data().address){
          setAdd(ans.docs[0].data().address);
        }
        
      }
      fetchData();
    }
   },[confirm])
   const [data,setData]=useState({"weig":"","time":"","datz":""}); 
   const times=["06 PM To 09 PM","03 PM To 06 PM","12 AM To 03 PM","09 AM To 12 AM"];
    const [selectDate,setSelectDate]=useState({"weig":"","time":"","datz":"",number:loc.state && loc.state.hasOwnProperty("number")?loc.state.number:""})
    const [number,setNumber]=useState([1,2,3]);
    const [dates,setDates]=useState(()=>{
      const currentDate = new Date();
        const result = [];
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ];
  for (let i = 0; i <4; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();  
    result.push({
      date: date.getDate(),
      month: monthName,
      year: year,
      id:(i+1),
      time:times[times.length-1]
    })
    times.pop();
  }
  return result;
    },[]);
    const choose=async (e)=>{
        e.preventDefault();
        if(selectDate[e.currentTarget.id.substring(0,4)]!==""){
          document.getElementById(e.currentTarget.id.substring(0,4)+selectDate[e.currentTarget.id.substring(0,4)]).style.backgroundColor='whitesmoke';
          document.getElementById(e.currentTarget.id.substring(0,4)+selectDate[e.currentTarget.id.substring(0,4)]).style.color="#586132";
        }
        document.getElementById(e.currentTarget.id).style.backgroundColor="#586132";
        selectDate[e.currentTarget.id.substring(0,4)]=e.currentTarget.id.substring(4,);
        if(selectDate.weig && selectDate.time && selectDate.datz){
         
          for(const key in selectDate){
            if(key==="number")break;
            //selectDate[key]=document.getElementById(key+selectDate[key]).textContent;
            data[key]=document.getElementById(key+selectDate[key]).textContent;
          }
          document.getElementById("prob").style.display='none';
          setConfirm(true);
          /* nav("/Payment",{state:{name:loc.state.name,
            contact:loc.state.contact,
            weig:data["weig"],datz:data["datz"],
            time:data["time"]
          }})*/
        } 
    }
    
      return (
      <div>
      <div id="dates" style={{display:'flex',flexDirection:'column',width:'100%'}}>
        <div style={{display:'flex',flexDirection:'row',flexGrow:1,maxHeight:'14%'}}>
            <Back flexbasis={"70%"} second={"SCHEDULE A PICK-UP"} />
            <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row',flexBasis:'30%'}}>{loc.state && loc.state.name?loc.state.name:""}</div>
        </div>
        <div style={{flexGrow:0.5}}>
            <small>SELECT A DATE</small>
        </div>
        <div id="selec" style={{display:'flex',justifyContent:'space-evenly',flexDirection:'row',flexGrow:2}}>
          {dates.map(it=>  
                <button id={"datz"+it.id} style={{height:'fit-content',display:'flex',flexDirection:'column',color:"#586132",backgroundColor:'whitesmoke',
                alignItems:'center',width:"fit-content",minWidth:'40px',maxWidth:'60px',borderRadius:'5px',border:'none',cursor:"pointer"}}
                onClick={(e)=>{
                   document.getElementById(e.currentTarget.id).style.color="whitesmoke";
                   
                   choose(e);
                }}  
                >
                    <span style={{padding:2,fontSize:'85%'}}>{it.month+""} </span>
                    <span  style={{padding:2,fontSize:'98%',fontWeight:600,color:"black"}}>{it.date+""} </span>
                    <span  style={{padding:2,fontSize:'85%'}}>{it.year+""}</span>
                </button>
           )}
        </div>
        <div>
            <small>SELECT A TIME</small>
        </div>
        <div style={{display:'flex',flexGrow:2,flexDirection:'column'}}>
            <div style={{display:'grid',gridTemplateColumns:"45% 45%",justifyContent:'space-around'}}>
               {dates.map(it=>
                  <div onClick={(e)=>{
                    document.getElementById(e.currentTarget.id).style.color="whitesmoke";
                    choose(e);}} id={"time"+it.id} style={{display:'flex',flexBasis:'50%',justifyContent:'center',backgroundColor:'white',margin:5,
                  fontSize:"85%",cursor:'pointer',padding:2.5,borderRadius:'5px'}}>
                    {it.time}
                  </div>
               )}
            </div>
        </div>
        <div>
            <small>Weight Category</small>
        </div>
        <div style={{display:'flex',flexDirection:'column',flexGrow:2,justifyContent:'space-evenly',color:"#586132"}}>
           {
           third.map(it=>
              <div onClick={(e)=>{
                document.getElementById(e.currentTarget.id).style.color="whitesmoke";
                choose(e)}} id={"weig"+it.id} style={{cursor:'pointer',backgroundColor:'white',
              display:'flex',display:'-webkit-flex',flexDirection:'row',borderRadius:'5px'}}>
                <div style={{display:'flex',display:'-webkit-flex',flexBasis:'20%',
                justifyContent:'center'}}>
                  <img loading='lazy'  src={require(`../${it.veh}.png`)} />
                </div>
                <div style={{display:'flex',display:'-webkit-flex',flexBasis:'70%',alignItems:'center',justifyContent:'center'}}>
                    {it.text}
                </div>
              </div>
              
            )}
          
        </div>
        <div id="prob">
        <Problems  />
        </div>
      </div>
      {confirm?
     
      (
                <div style={{height:'25%',position:'relative',backgroundColor:'whitesmoke',display:'flex',flexDirection:'column',
                top:"-8%",gap:5,transitionDelay:'2s'}}>
                <div style={{display:'flex',flexDirection:'row',height:'45%',alignItems:'center'}}>
                    <div style={{display:'flex',fontSize:'78%'}}>
                     Address:{add}
                    </div>
                    <div style={{display:'flex',flexBasis:'45%',justifyContent:'flex-end'}}>
                      <p style={{textDecoration:'underline',cursor:'pointer'}} onClick={(e)=>{
                        e.preventDefault();
                        const add2=prompt("Enter address to be picked up from...");
                        if(add2){
                          data["add1"]=add2;
                          setAdd(add2);
                        }
                        else{
                          setConfirm(false);
                        }
                      }}>Change</p>
              
                    </div>
                    
                </div>
                <div style={{display:'flex',justifyContent:'center',padding:5}}>
                        <button style={{width:'40%',height:'clamp(26px,4.3vh,40px)',background:'gold',border:'none',cursor:'pointer',borderRadius:'5px'}} onClick={async(e)=>{
                          e.preventDefault();
                          
                          (Object.keys(data).length===3)?
                          nav("/Payment",{state:{add1:add,name:loc.state.name,contact:loc.state.contact,...data}}):
                          nav("/Payment",{state:{name:loc.state.name,contact:loc.state.contact,...data}})
                        }}>Confirm</button>
                    </div>
                </div>
           ):(
            null

           )}
      </div>
    )
}