import '../App.css';
import { Back } from './Back';
import { db } from '../firebase';
import { updateDoc,query,collection,where,getDocs,doc, arrayUnion, setDoc } from 'firebase/firestore/lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { Problems } from './problems';
import { useEffect, useState } from 'react';
export const Payment=()=>{
    const loc=useLocation();
    const nav=useNavigate();
    useEffect(()=>{
            if(!loc.state || Object.keys(loc.state).length!==6){
                nav("/",{});
           }
   },[loc.pathname])
    const data=[
                {heading:"Wallet",image:"wallet.png",text:"Junkee Wallet(Coming soon)",id:"wallet"},
                {heading:"COD or COP",image:"payment-method.png",text:"Cash on Pick-Up(or)Delivery",id:"COD"},
                {heading:"UPI",image:"upi 1.png",text:"Upi number",id:"UPI"}
            ]
    const [book,setBook]=useState(false);
    return (
        <div id="payment" style={{height:'70vh',display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',flexDirection:'row',flexGrow:1}}>
                <Back flexbasis={"70%"} second={"SCHEDULE A PICK-UP"} />
                <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row',flexBasis:'30%',flexGrow:1}}>{loc.state && loc.state.hasOwnProperty("name")?loc.state.name:""}</div>   
            </div>
            <div style={{display:'flex',flexDirection:'column',flexGrow:2}}> 
                {data.map(it=>
                    <div id={it.id} 
                    style={{display:'flex',flexDirection:'column',flexGrow:1,rowGap:15,pointerEvents:it.id==='wallet'?'none':'auto'}}
                    onClick={(e)=>{
                        e.preventDefault();
                        loc.state.paymentmode=e.currentTarget.id;
                        console.log(loc.state);   
                    }}
                    >
                    <div>{it.heading}</div>
                    <div style={{display:'flex'}}>
                        <button style={{width:'75%',alignItems:'center',display:'flex',gap:"7.5%"}}>
                          <span style={{display:'flex',flexbasis:'40%'}}>
                            <div style={{height:'max(5vw,5vh)',width:'max(5vw,5vh)',maxHeight:'33px',maxWidth:'30px',
                            float:'left',justifyContent:'center',display:'flex',alignItems:'flex-end',padding:'15%'}} >
                               <img src={require(`../${it.image}`)} style={{height:"100%",width:'100%',objectFit:'fill'}} loading='lazy' />
                            </div>
                        </span>
                        <span style={{display:'flex'}} >{it.text}</span>
                        </button>
                    </div>
                </div>)}    
            </div>
            <div style={{display:'flex',flexDirection:'row',flexGrow:1.5,justifyContent:'center',alignItems:'center'}}>
            { !book?(<button onClick={async(e)=>{
                    e.preventDefault();
                    (loc.state.hasOwnProperty("paymentmode"))?
                        setBook(true):alert("Please select a payment mode COD/UPI")   
                    
                }}>Book Pick-Up</button>):(
                    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',textAlign:'center'}}>
                        <h3>Terms and Conditions</h3>
                        <p>I agree to the policies of Junkee and I willingly place this order.</p>
                        <div><button style={{width:'50%'}} onClick={async(e)=>{
                            try{
                                e.preventDefault();
                                if(Object.keys(loc.state).length===7){
                                    const q=query(collection(db, "clients"), where("contact", "==", loc.state.contact));
                                    const ans=await getDocs(q);
                                    const paymentid=ans.docs[0].data().orders.length+1+ans.docs[0].id;
                                    const today=new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'long', day: 'numeric' });
                                    const data={...loc.state,paymentid:paymentid,sch:today}
                                    delete data.name;
                                    delete data.contact;
                                    const clientRef = doc(db, 'clients', ans.docs[0].id);
                                    await updateDoc(clientRef,{orders:arrayUnion(data)}).then(ans=>{
                                        nav('/Booked',{state:{name:loc.state.name,contact:loc.state.contact,
                                            paymentid}});
                                    }).catch(e=>{
                                        alert("Please try later...");
                                    })
                                    
                                }
                                else{
                                alert("Choose UPI/COD or try to book from the first");
                                }}catch{
                                    alert("Try again in sometime, there is an issue in server...");
                                }
                        }}>Accept</button></div>
                    </div>
                )
            }
            </div>
            <Problems />
        </div>
    )
}