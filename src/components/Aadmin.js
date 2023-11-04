import { useEffect, useState } from "react";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { query,where,getDocs,collection } from "firebase/firestore/lite";
export const Aadmin=()=>{
    const divs={div:{display:"flex",flexWrap:"wrap",flexGrow:1,textAlign:"center",fontSize:"75%",alignItems:"center",justifyContent:"center",color:"black",fontWeight:700}}
    const [tot,setTot]=useState("Please wait...");
    const loc=useLocation();
    const nav=useNavigate();



    useEffect(()=>{
        try{
        if(!loc.state || (loc.state && !loc.state.hasOwnProperty("password")))
        {nav(-1);}
        const datum=async(e)=>{
            const cl=collection(db,"clients");
            const ans=await getDocs(cl);
            let total=0;
            ans.forEach(data=>{
                if(data.data().hasOwnProperty("orders"))
                {total+=data.data().orders.length}
            },[])
            setTot(total);
        }
        datum();
    }catch{
        alert("Problem due to  high traffic...")
    }
    },[])
    return (
        <div style={{backgroundColor:'black',display:'flex',flexDirection:"row",height:"clamp(50vh,70vh,90vh)"}} 
        onClick={(e)=>{e.preventDefault();
         nav("/OrderList",{state:{password:true}});   
        }}>
           
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',cursor:'pointer',
            padding:"7.5%",width:"85%"}}>
                <div style={{height:"fit-content",width:"fit-content",padding:5,
                backgroundColor:'grey',borderRadius:"12.5px",fontSize:"max(1.5vw,1.5vh,8px)",color:"black"}}>
                    <p style={{fontWeight:900}}>Total Orders</p>
                    <p style={{textAlign:'center',fontWeight:500}}>{tot}</p>
                </div>
                
            </div >
        </div>
    )
}