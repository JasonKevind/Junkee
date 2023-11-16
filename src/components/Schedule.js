import 'firebase/firestore';
import'../App.css';
import {RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {auth,db} from '../firebase';
import { collection, getDocs, query, where} from 'firebase/firestore/lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { Problems } from './problems';
import { useEffect,  useState } from 'react';
export const Schedule=()=>{
    const loc=useLocation();
    const nav=useNavigate();
    const [otp,setOtp]=useState("");
    const arr=[1,2,3,4,5,6];
    useEffect(()=>{
        if(loc.pathname==="/" && loc.state && Object.keys(loc.state).length===2 && loc.state.hasOwnProperty("contact"))document.getElementById("number").value=loc.state.contact;
    },[loc.pathname])
    const check=(el)=>{
        for(var i=0;i<el.length;i++){
            if(el[i]<'0' && el[i]>'9')
            {alert("Enter a valid phone number");return false;}
        }
        return true;
    }
    return (
<div id="sch" style={{display:'flex',justifyContent:'space-evenly',minHeight:'30vh',flexDirection:'column',maxHeight:'49vh'}} >
    <div style={{flexGrow:0.1}}>
        <h3 style={{fontFamily:'Inter'}}>Schedule Pickup</h3>
    </div>
    <div style={{flexGrow:3,justifyContent:'space-evenly',display:'flex',flexDirection:'column'}}>
        <div><h4 style={{margin:0,fontFamily:"Inter"}}>{!otp?"MOBILE":"OTP"}</h4></div>
        <div>
        {!otp?
            <input placeholder='10 digit Indian Contact Number' id='number' type='number' style={{border:'none',padding:'7px',width:'80%'}} inputMode='numeric'/>
            :
            <div  style={{display:'flex',justifyContent:'space-evenly'}}>
                {(arr.map(inp=>(
                    <input type='text' inputMode='numeric' maxLength={1}   id={inp} onChange={(e)=>{if(e.currentTarget.value>=0 && e.currentTarget.value<=9){arr[e.currentTarget.id-1]=e.currentTarget.value;}}} style={{display:'flex',width:"clamp(20px,5vh,40px)",height:"clamp(20px,5vh,40px)",justifyContent:'space-evenly',textAlign:'center',fontWeight:600}}/>
                )))}
            </div>
        }
            </div>
    </div>
    <div style={{flexGrow:1,display:'flex',flexDirection:'column'}}>
        <div><div id='recaptcha-container' />
        <button className='btnew' style={{width:90,padding:7.5}} onClick={async(e)=>{
           try{
            e.preventDefault();
            if(!otp){
            let dd=document.getElementById("number").value;
            if(dd.length===10 && check(dd)){
          const ll=new RecaptchaVerifier("recaptcha-container",{},auth);
          await ll.render().then(async(res)=>{
            signInWithPhoneNumber(auth,"+91"+dd,ll).then(ans=>{
                window.confirmationResult=ans
                setOtp(dd);
                document.getElementById("recaptcha-container").style.display="none";
            }).catch(error=>{alert("You might have placed more than 8 orders with this number, please try with another number.../Try again later");window.location.reload()})
        }).catch(error=>{alert("Please enter a valid Indian phone number.");window.location.reload()})  
          /*const otp=prompt("Enter the OTP in 1 minute");
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
          alert("May be wrong otp, try again");
          })*/
        }  
           else{
            alert('Enter valid phone number of length 10')
           }}else if(otp && window.hasOwnProperty("confirmationResult")){
            const OTP=parseInt(arr.join(""));
            window.confirmationResult.confirm(OTP).then(async(res)=>{
                const q=query(collection(db,"clients"),where("contact","==",otp));
                const ans=await getDocs(q);
                if(ans.docs.length){
                    document.getElementById("globname").innerText=ans.docs[0].data().name;
                    document.getElementById("globcon").innerText=ans.docs[0].data().contact;
                    nav("/Admin",{state:{name:ans.docs[0].data().name,contact:otp}});
                }
                else{nav("/Reg",{state:{number:otp}})}   
            }).catch(error=>{alert("Incorrect OTP or try again later...");})
           }
           }catch(error){
            alert("Try again...");
            window.location.reload();   
        }
        }}
           >NEXT</button>
        </div>
        <Problems />
    </div>
</div>
)}