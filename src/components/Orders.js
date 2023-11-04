import '../App.css';
import { Problems } from './problems';
import { Back } from './Back';
import { Loader } from './Loader';
import { collection,getDocs,query,where } from 'firebase/firestore/lite';
import { db } from '../firebase';
import {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export const Orders=()=>{
    const loc=useLocation();
    const nav=useNavigate();
    const [orders,setOrders]=useState([]);
    const [load,setLoad]=useState(true);
    useEffect(()=>{
        try{
            if(!loc.state || Object.keys(loc.state).length<2)
        {nav("/")}
        else{
            const fd=async()=>{
                const q=query(collection(db,"clients"), where("contact", "==", loc.state.contact));
                const ans=await getDocs(q).catch(err=>{alert("Please try again...");});
                (ans.docs[0].data().orders.length)?setOrders(ans.docs[0].data().orders):(setOrders([]));               
                setLoad(false);
            }
            fd();
        } 
    }catch{alert("Please try again...")}
        
},[loc.pathname]);
    return (
        <div style={{height:'70vh',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div style={{display:'flex',flexDirection:'row',flexGrow:1}}>
                <Back second={"ORDER STATUS"} flexbasis={"70%"} />
                <div style={{display:'flex',flexBasis:'30%',justifyContent:'flex-end'}}>{loc.state && loc.state.hasOwnProperty("name")?loc.state.name:""}</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',flexGrow:2,overflowY:'scroll'}}>
            {(orders.length!==0 && load===false)? orders.map(it=>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',border:'1px solid green',borderRadius:'5px',margin:5}}>
                    <div id="ord" style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',textAlign:"center",fontSize:'12.5px'}}>
                        <div style={{display:'flex',flexDirection:'column',flexBasis:'30%',justifyContent:'center'}}>
                            <div ><p >PAYMENT MODE</p></div>
                            <div ><p style={{fontWeight:900}}>{it.paymentmode}</p></div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',flexBasis:'30%',justifyContent:'center'}}>
                            <div style={{display:'flex',justifyContent:'center'}} ><p>ORDER ID</p></div>
                            <div ><p style={{fontWeight:900}}>{it.paymentid}</p></div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',flexBasis:'30%',justifyContent:'center'}}>
                            <p>PICK-UP DATE</p>
                            <p style={{fontWeight:900}}>{it.datz}</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',flexBasis:'30%'}}>
                            <p>PICKUP TIME</p>
                            <p style={{fontWeight:900}}>{it.time}</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',flexBasis:'30%'}}>
                            <p>ESTIMATED WEIGHT</p>
                            <p style={{fontWeight:900}}>{it.weig}</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>    
                ):load===true?
                    <Loader />
                
                :<div>You have not placed any orders {loc.state.name}</div>
            }
            </div>
            <Problems />
        </div>

    )
}