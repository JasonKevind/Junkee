import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { getDocs,where,query,doc,collection,updateDoc } from 'firebase/firestore/lite';
import '../App.css';
import { Loader } from './Loader';
import { useLocation, useNavigate } from 'react-router-dom';
export const Address=()=>{
    const loc=useLocation();
    const nav=useNavigate();
    const [address,setAddress]=useState();
    const [data,setData]=useState([]);
    const [load,setLoad]=useState(true);
    useEffect(()=>{
        if(!loc.state || Object.keys(loc.state).length<2){
            nav("/");
        }
    },[loc.pathname])
    
    useEffect(()=>{
        (loc.state && Object.keys(loc.state).length>=2)?
        get():nav("/");
    },[])
    const get=async()=>{
        const q=query(collection(db,"clients"),where("contact","==",loc.state.contact));
        const ans=await getDocs(q);
        if(ans.docs.length && ans.docs[0].data().address){
            const dd=[];
            for(var key in ans.docs[0].data().address){
                dd.push(key);
            }
            setData(dd);
            setLoad(false);      
        }
    }
    const pin=(el)=>{
        for(var i=0;i<el.length;i++){
      
            if(el[0]!=="6" || el[i]<"0" || el[i]>"9")
            {alert("Enter a valid pincode");
            return false;}
        }
        return true;
      }
    return(
        <div id="address">
            <form style={{display:'flex',flexDirection:'column',alignItems:'center'}} onSubmit={async(e)=>{
                e.preventDefault();
                try{
                    if(document.getElementById("ad1").value.length>8 && document.getElementById("pin1").value.length===6 && pin(document.getElementById("pin1").value)){
                     const q=query(collection(db,"clients"),where("contact","==",loc.state.contact));
                     const ans=await getDocs(q);
                     if(ans.docs.length && !ans.docs[0].data().address.hasOwnProperty(document.getElementById("ad1").value+", "+document.getElementById("pin1").value)){
                        const add={}
                        const prev=ans.docs[0].data().address
                        add[document.getElementById("ad1").value+", "+document.getElementById("pin1").value]=true;
                        await updateDoc(doc(db,"clients",ans.docs[0].id), {address:{...add,...prev}});    
                        await get();
                     }       
                 }
                    else{
                     alert("Enter address and pincode should be without space of length 6...");
                    }
                 }catch(e){
                     alert("Try after sometime");
                 }
            }}>

                <h4 >Enter New Address</h4>
                <h4 >Address : <input id="ad1" required/></h4>
                <h4 >Pincode : <input id="pin1" type="text"  inputMode='numeric'  required /></h4>
                <h4 ><button type='submit'>Submit</button></h4>
            </form>
            <div>
                {
                    (data.length===0 && load)?
                    (<div><Loader /></div>):
                    (!load && data.length>=1)?(
                        <div style={{display:'flex',padding:5,flexDirection:'column'}}>
                            <div style={{textAlign:'center'}}>Addresses (Click any one of the below addresses)</div>
                            
                            {data.map(it=>(
                             <div style={{textAlign:'center',padding:15}} ><button id={it}  name="address" style={{border:'none',cursor:'pointer',padding:10,background:'grey'}} onClick={(e)=>{e.preventDefault();
                                if(address){
                                    document.getElementById(address).style.backgroundColor="grey";
                                }
                                e.currentTarget.style.backgroundColor="#586132";
                                setAddress(it);}}>{it}</button></div>
                            ))}
                            <div style={{display:'flex',justifyContent:'center'}}><button style={{width:'25%'}} onClick={async(e)=>{
                                e.preventDefault();
                                if(address){
                                const q=query(collection(db,"clients"),where("contact","==",loc.state.contact));
                                const ans=await getDocs(q);
                                const aa=doc(db,"clients",ans.docs[0].id);
                                const add1=address.substring(0,address.length-8);
                                const pin1=address.substring(address.length-6,address.length);
                                await updateDoc(aa,{prevAddress:add1});
                                await updateDoc(aa,{prevPincode:pin1});
                                (Object.keys(loc.state).length===2)?nav(-1,{state:{...loc.state}}):nav("/Payment",{state:{...loc.state,add1:address}});
                                }else{
                                alert("Select atleast one address...");}
                            }}>Set Address</button></div>
                        </div>):<div style={{textAlign:'center'}}>No addresses...</div>
                }
            </div>
        </div>
    )
}