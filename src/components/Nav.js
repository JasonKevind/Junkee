import React, { useState,useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
export const Nav = () => {
  const  [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const nav=useNavigate();const loc=useLocation();
 
useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);  
    };
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
},[]);
useEffect(()=>{
  window.addEventListener("resize",()=>{
  if(window.innerWidth>=700)document.getElementById("RD").style.display="flex"; 
},[]);
},[]);
useEffect(()=>{
  loc.pathname==='/'?
  document.getElementById("blink").style.display='flex'
  : 
  document.getElementById("blink").style.display='none';
},[loc.pathname])
  return (
    <div className="PD">
      <div className="LD">
          <div  style={{display:'flex',alignItems:'center',flexBasis:"45%"}}>
                <div  style={{width:'22.5%',height:'55%',content:"url('junkie.jpg')",borderRadius:'100%'}}>
                </div>
                <p  style={{marginLeft:'3%',fontSize:'100%',fontWeight:800,color:"#586132"}}>JUNKEE</p>
          </div>
          <div  style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',gap:10}}>
          <div id="blink" className='topbtns' style={{border:"1px solid #586132"}} onClick={()=>{
           window.innerWidth>=700?
           window.scrollTo({top:document.getElementById("form").offsetTop,behavior:'smooth'})
          :
          window.scrollTo({top:document.getElementById("form").offsetWidth,behavior:'smooth'})
          }}>
            Sell Scrap
          </div>
          <div id="rate" className='topbtns' style={{backgroundColor:'#586132'}} onClick={(e)=>{
            e.preventDefault();
            if(loc.pathname!=="/Rates")nav("/Rates");
            }}>
            Check Rate List
          </div>
          </div>
          <button className='hamburger-button' onClick={()=>{
           if(document.getElementById("RD").style.display.length===0 || document.getElementById("RD").style.display=='none'){
               document.getElementById("RD").style.display='flex';
           }
           else if(document.getElementById("RD").style.display=='flex'){
               document.getElementById("RD").style.display='none';
           }
       }}> 
         <FontAwesomeIcon icon={faBars} /> 
       </button> 
      </div>
      <div className="RD" id="RD">
        <div>
          <button onClick={(e)=>{e.preventDefault();(document.getElementById("globname").innerText.length)?(nav("/Admin",{state:{name:document.getElementById("globname").innerText,contact:document.getElementById("globcon").innerText}})):(nav("/"));}}>Home</button>
        </div>
        <div><button onClick={(e)=>{e.preventDefault();nav("/PartnerWithUs");}}>Partner With Us</button></div>
       
        <div >     
          <button className="dropbtn" onClick={(e) =>{e.preventDefault();nav("/Services")}}>Services</button>
          
        </div>
        <div >
          <button className="dropbtn" onClick={() => {nav("/Careers")}}>Careers</button>
        </div>
        <div >
          <button className="dropbtn" onClick={(e)=>{e.preventDefault();nav("/WorkProcess")}}>How it works</button> 
        </div>
        
      </div> 
    </div>
  );
};
export default Nav;