import { useLocation, useNavigate } from 'react-router-dom';
import { query,getDoc,collection, where, getFirestore } from 'firebase/firestore/lite';
import { db } from '../firebase';
import '../App.css';
import { doc, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
export const Own=()=>{
    const loc=useLocation();
    const nav=useNavigate();
    
    return(
        <div style={{display:'flex',justifyContent:"space-evenly",alignItems:'center',flexDirection:'column',height:"clamp(30px,15vh,75px)",gap:"35%",padding:10}}>
                <input  id="password" type='password'  style={{border:'none',width:"clamp(57px,32%,175px)",height:"30%",backgroundColor:'#333',borderRadius:"7.5px",color:"white"}}  placeholder='Enter your password' />
                <button onClick={async(e)=>{
                    try{
                        const q=query(collection(db,"clients"),where("password","==",document.getElementById("password").value));
                        
                        const ans=await getDocs(q);
                        if(ans.docs.length){
                        nav("/Aadmin",{state:{password:true}});}
                        else{
                            alert("Enter password properly");
                        }
                    
                }catch{
                    alert('Some problem, try again later...');
                }
                
                }} style={{border:"none",width:"clamp(55px,32.5%,80px)",height:"clamp(30px,22%,40px)",backgroundColor:'#333',color:"white"}}>Login</button>  
        </div>
    )
}