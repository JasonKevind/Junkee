import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { Problems } from './problems';
import { db } from '../firebase';
import { collection,addDoc,query } from 'firebase/firestore/lite';
import { Back } from './Back';
import { useEffect } from 'react';
export const Reg=()=>{
       const loc=useLocation();
       const nav=useNavigate();
       useEffect(()=>{
        if(!loc.state ||!loc.state.hasOwnProperty("number")){
            nav("/",{replace:true});
        }
       },[])
       const first=[{text:"Schedule a Pickup"},{text:"PERSONAL INFO"}];
       const second=[{info:"name",ct:1,type:"text",inp:"text",req:true},{info:"upiid",ct:2,type:"text",inp:"numeric",req:false},{info:"address",ct:3,type:"text",inp:"text",req:true},{info:"emailid",ct:4,type:"email",inp:"email",req:false},{info:"pincode",ct:5,type:"number",inp:"numeric",req:true}];
       return (
            <div className="PARENT">
                 <Back second={"OTP"} flexbasis={"100%"}/>
                 {first.map(it=>
                    <div className="child">{it.text}</div>
                 )}
                 <form>
                 {
                    second.map(it=>
                    <div className="child">
                        <label htmlFor={"input"+it.ct} id={"la"+it.ct}>{it.info}</label>
                        <input type={it.type} id={"input"+it.ct} style={{ width: '90%',margin:0,appearance:'textfield'}} inputMode={it.inp} required={it.req}/>
                    </div>  
                 )}
                    <div style={{flexGrow:1,display:'flex',flexDirection:'column'}}>
        <button className='btnew' type='button' style={{width:90,padding:7.5,cursor:'pointer'}} onClick={async(e)=>{
                try{
                const userData={}
                userData["name"]=document.getElementById("input1").value;
                if(document.getElementById("input2").value.length){
                userData["upiid"]=document.getElementById("input2").value;}
                userData["address"]=document.getElementById("input3").value;
                if(document.getElementById("input4").value.length>10 
                && document.getElementById("input4").value.substring(document.getElementById("input4").value.length-10,
                document.getElementById("input4").value.length)==="@gmail.com")
                {userData["emailid"]=document.getElementById("input4").value};
                userData["pincode"]=parseInt(document.getElementById("input5").value);
                userData["contact"]=loc.state.number;
                userData["orders"]=[];
                const ans=await addDoc(collection(db,"clients"),userData).catch(err=>{
                    alert("Problem with server, please try again later or contact Owner...");
                }).then(res=>{
                    document.getElementById("globname").innerText=userData["name"];
                document.getElementById("globcon").innerText=userData["contact"];
                nav("/Admin",{state:{contact:loc.state.number,name:userData["name"]},replace:true});
                }).catch(error=>{
                    alert("Try again later...");
                    nav("/",{replace:true});
                })
                
            }catch{
                alert("Please try again later...");
                nav("/",{replace:true});
            }
                
        }}>NEXT</button>
        <Problems />
    </div> 
            </form>  
    </div>
          );
}
export default Reg;