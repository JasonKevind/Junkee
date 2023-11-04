import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { useEffect } from 'react';
import { Problems } from './problems';
export const Booked=()=>{
    const loc=useLocation();
    const nav=useNavigate();
    useEffect(()=>{
        if(!loc.state || Object.keys(loc.state).length!==3){  
            nav('/');
        }
},[!loc.state])
    useEffect(()=>{
            if(!loc.state || Object.keys(loc.state).length!==3){  
                nav('/');
            }
    },[loc.pathname])
    return (
        <div id="book" style={{display:'flex',flexDirection:'column',height:'70vh'}}>
            <div style={{display:'flex',flexGrow:0.5,justifyContent:'space-between'}}>
                <div>ORDER SCHEDULED</div>
                <div>{loc.state && loc.state.hasOwnProperty("name")?loc.state.name:""}</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',flexGrow:2}}>
                <div style={{display:'flex',flexGrow:0.1,justifyContent:'center',alignItems:'center',color:'purple',fontWeight:600}}>Wohooo!!!</div>
                <div style={{display:'flex',flexDirection:'row',flexGrow:5}}>
                    <div style={{display:'flex',width:"100%"}}>
                        <img loading='lazy' src={require("./AdminImages/booked.png")} style={{objectFit:'fill',width:"100%"}} />
                    </div>
                    

                </div>
                <div style={{display:'flex',flexGrow:0.5,justifyContent:'center'}}>Your Pick-Up Request is Scheduled.<br></br>Order Confirmation status is shown intrack Order</div>
            </div>
            <div style={{display:'flex',flexDirection:'row',flexGrow:1.4,
            justifyContent:'center',alignItems:'center'}}>
          
                <div style={{display:'flex',flexBasis:'50%'}}>
                    <button style={{backgroundColor:'#E1C16E',border:'none',width:'83%',height:'5vh',borderRadius:'5px',fontSize:'70%',
                    color:'whitesmoke'}} onClick={()=>{nav("/Admin",{state:{name:loc.state.name,contact:loc.state.contact}})}}>Home</button>
                </div>

                <div style={{display:'flex',flexBasis:'50%'}}>
                    <button style={{backgroundColor:'#E1C16E',border:'none',width:'83%',height:'5vh',borderRadius:'5px',fontSize:'70%',
                    color:'whitesmoke'}} onClick={()=>{nav("/MyOrders",{state:{contact:loc.state.contact,name:loc.state.name}})}}>My Orders</button>
                </div>
          
            </div>
            <div style={{display:'flex',flexGrow:0.4}}>
                !Dealer or Rider will reach you shortly on your booked slot
            </div>
            <Problems />
        </div>
    )
}