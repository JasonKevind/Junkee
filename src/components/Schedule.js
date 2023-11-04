import 'firebase/firestore';
import'../App.css';
import {RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {auth,db} from '../firebase';
import { collection, getDocs, query, where,updateDoc,getDoc,addDoc,doc } from 'firebase/firestore/lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { Problems } from './problems';
import { useEffect, useRef, useState } from 'react';
export const Schedule=()=>{
    const loc=useLocation();
    const nav=useNavigate();
    const [obj,setObj]=useState(false);
    const [otp,setOtp]=useState();
    const [name,setName]=useState("");
    const [contact,setContact]=useState(()=>{
        if(loc.state && loc.state.hasOwnProperty("contact"))
        { 
            return loc.state.contact;
        }
        return "";
    });
    useEffect(()=>{
        if(loc.pathname==="/" && loc.state && Object.keys(loc.state).length===2 && loc.state.hasOwnProperty("contact"))document.getElementById("number").value=loc.state.contact;
    },[loc.pathname])
    const check=async(el)=>{
        for(var i=0;i<el.length;i++){
            if(el[i]<'0' && el[i]>'9')
            {alert("Enter a valid phone number");return false;}
        }
        return true;
    }
    const Recap=()=>{
        try{
            const ll=new RecaptchaVerifier("recaptcha-container",{},auth);
            ll.render();
            signInWithPhoneNumber(auth,"+91"+contact,ll).then(con=>{
                const code=prompt("Enter OTP within 1 minute","");
                con.confirm(code).then(async(r)=>{
                    const q=query(collection(db,"clients"),where("contact","==",contact));
                     const ans=await getDocs(q);
                     if(ans.docs.length){
                        document.getElementById("globname").innerText=ans.docs[0].data().name;
                        document.getElementById("globcon").innerText=ans.docs[0].data().contact;
                        nav("/Admin",{state:{name:ans.docs[0].data().name,contact}});
                     }else{
                        nav("/Reg",{state:{number:contact}});
                     }
                }).catch(error=>
                    {alert("Entered incorrect OTP, you can try again.");setContact("");window.location.reload();})
            }).catch((error)=>{
                alert("You might have placed more than 8 orders with this number for today/ Try again in sometime/ Try with another number OR you might have disabled pop-ups in your browser(Enable them)"
                );
            setContact("");    
            window.location.reload();
        })
        }catch{
            setContact("");
            alert("Please try again or contact number entered might be wrong(Register again with correct number) or you might have disabled pop-ups in browser(Enable them)")}
            window.location.reload();
        }
   
    return (
<div id="sch" style={{display:'flex',justifyContent:'space-evenly',minHeight:'30vh',flexDirection:'column',maxHeight:'49vh'}} >
    <div style={{flexGrow:0.1}}>
        <h3 style={{fontFamily:'Inter'}}>Schedule Pickup</h3>
    </div>
    <div style={{flexGrow:3,justifyContent:'space-evenly',display:'flex',flexDirection:'column'}}>
        <div><h4 style={{margin:0,fontFamily:"Inter"}}>MOBILE</h4></div>
        <div ><input placeholder='10 digit Indian Contact Number' id='number' type='number' style={{border:'none',padding:'7px',width:'80%'}} inputMode='numeric'/></div>
    </div>
    <div style={{flexGrow:1,display:'flex',flexDirection:'column'}}>
        { !obj && (<div><div id='recaptcha-container' />
        <button className='btnew' style={{width:90,padding:7.5}} onClick={async(e)=>{
         
            let dd=document.getElementById("number").value;
            if(dd.length===10){
        
          const ll=new RecaptchaVerifier("recaptcha-container",{},auth);
          await ll.render();
          const res=await signInWithPhoneNumber(auth,"+91"+dd,ll)
          const otp=prompt("Enter the OTP in 1 minute");
          res.confirm(otp).then(async(yes)=>{
            const q=query(collection(db,"clients"),where("contact","==",dd));
            const ans=await getDocs(q);
            if(ans.docs.length){
                document.getElementById("globname").innerText=ans.docs[0].data().name;
                document.getElementById("globcon").innerText=ans.docs[0].data().contact;
                nav("/Admin",{state:{name:ans.docs[0].data().name,contact:dd}});
            }
            else{nav("/Reg",{state:{number:dd}})}
          }).catch(error=>{
            alert(error);window.location.reload();
          })
        }  
           else{
            alert('Enter valid phone number of length 10')
           }
        
        }}
    
           >NEXT</button>
        </div>)
    }
        <Problems />
    </div>
</div>   
    )}