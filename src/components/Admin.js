import { useEffect, useState } from 'react';
import '../App.css';
import { Problems } from './problems';
import { useLocation, useNavigate } from 'react-router-dom';
export const Admin=()=>{
    const loc=useLocation();
    const nav=useNavigate();
   useEffect(()=>{
        if(!loc.state|| Object.keys(loc.state).length<2){
            nav("/");
        }
    },[loc.pathname])
    useEffect(()=>{
        if(!loc.state|| Object.keys(loc.state).length<2){
            nav("/");
        }
    },[!loc.state]) 
    const [admin,setAdmin]=useState(()=>{
        if(loc.state && loc.state.hasOwnProperty("name"))return loc.state.name;
    });  
    const middle=[{img:"pickup",head:"SCHEDULE A PICK-UP",info:"Want to Book a pick-up with us? we will help you clear your scrap.",to:"/Dates"},
    {img:"preview",head:'How Junkee works ?',info:"Want to know how we work? check us out here.",to:"/WorkProcess"}
]
   console.log(document.getElementById("globname"));
    return (
        <div className="Admin">
            <div style={{display:'flex',flexGrow:0.3,fontFamily:"Inter"}}>
                <div>
                    Home
                </div>
                <div>
                    <div >{admin}</div>
                </div>
            </div>
            <div style={{display:'flex',flexGrow:1}}>
            {middle.map(it=>
                <div style={{display:'flex',flexGrow:1.4,backgroundColor:'white',maxHeight:'120px',gap:'5%'}} onClick={()=>{nav(it.to,{state:{name:loc.state.name,contact:loc.state.contact}})}} >
                    <div style={{display:'flex ',flexBasis:'45%',justifyContent:'center',maxWidth:'110px'}}>
                       <img loading='lazy' src={require(`./AdminImages/${it.img}.png`)} style={{objectFit:'fill',maxWidth:'95%'}} /> 
                    </div>
                    <div style={{display:'flex ',flexBasis:'65%',flexDirection:'column',justifyContent:'space-evenly'}}>
                        <p style={{margin:0,fontWeight:500,fontSize:15,fontFamily:"Poppins"}}>{it.head}</p>
                        <p style={{margin:0,color:'gray',fontSize:'75%',fontFamily:"Inter"}}>{it.info}</p>
                    </div>
                </div>
            )}
                <div style={{display:'flex',gap:15,flexGrow:0.3,justifyContent:'space-evenly'}}>
                    
                   <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexBasis:'50%',maxWidth:'65px',maxHeight:'85px'}}  onClick={(e)=>{
                    e.preventDefault();
                    nav("/MyOrders",{state:{name:admin,contact:loc.state.contact}})
                }}>
                      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={require("./AdminImages/clock.png")} style={{objectFit:'fill',height:'55%',width:'25%',maxWidth:'25px'}}/>
                      </div>
                      <div style={{display:'flex',textAlign:'center',fontSize:'70%'}}>Order History</div> 
                   </div>
                   <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexBasis:'50%',maxWidth:'65px',maxHeight:'85px'}} onClick={(e)=>{
                        e.preventDefault();
                        nav("/Address",{state:{name:loc.state.name,contact:loc.state.contact}})
                    }} >
                      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={require("./AdminImages/address.png")} style={{objectFit:'fill',width:'25%',height:'55%',maxWidth:'25px'}}/>
                      </div>
                      <div style={{display:'flex',textAlign:'center',fontSize:'70%'}}>Address</div> 
                   </div>
                   <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexBasis:'50%',maxWidth:'65px',maxHeight:'85px'}} onClick={(e)=>{
                        e.preventDefault();
                        window.scrollTo({top:document.documentElement.scrollHeight,
                        behavior:'smooth'});
                      }}>
                      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <img src={require("./AdminImages/help.png")} style={{objectFit:'fill',height:'55%',width:'25%',maxWidth:'25px'}}/>
                      </div>
                      <div style={{display:'flex',textAlign:"center",fontSize:'70%'}}
                      ><small>Help & Support</small></div> 
                   </div>

                </div>
                
                <div style={{display:'flex',flexDirection:'row',flexGrow:0.3}}>
                    <div style={{display:'flex',flexDirection:'row',backgroundColor:'whitesmoke',padding:1,borderRadius:'5px',alignItems:'center',
                    height:'50%',padding:5,width:'40%',cursor:'pointer'}} onClick={(e)=>{
                        e.preventDefault();
                        document.getElementById("globname").innerText="";
                        document.getElementById("globcon").innerText="";
                        nav(loc.pathname,{});
                    }}>
                       <div style={{display:'flex',flexBasis:'30%',justifyContent:'center'}}>
                        <img src={require("./AdminImages/exit.png")} style={{display:'flex',objectFit:'fill',display:'flex',height:'clamp(20px,2vh,40px)',width:'clamp(20px,0.5vw,25px)'}} />
                       </div>
                       <div style={{display:'flex',flexBasis:'70%'}}>
                        <button style={{cursor:'pointer',border:'none',textDecoration:'underline',display:'flex',alignItems:'center',backgroundColor:'transparent',height:'100%'}}>Logout</button>
                       </div>
                     </div>
                </div>

            </div>
            <Problems />
           
        </div>
    )
}