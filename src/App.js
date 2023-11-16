import './App.css';
import { Own } from './components/Own';
import { Careers } from './components/Careers';
import { PartnerWithUs } from './components/PartnerWithUs';
import { Payment } from './components/Payment';
import {Gabe} from './components/Gabe.js';
import {Home} from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch, Routes, useNavigate, useLocation } from 'react-router-dom';
import Footer from './components/footer';
import { Service } from './components/Service';
import { Schedule } from './components/Schedule';
import { Reg } from './components/Reg';
import { Admin } from './components/Admin';
import { Dates } from './components/Dates';
import { Orders } from './components/Orders';
import { Booked } from './components/Booked';
import { Rates } from './components/Rates';
import { WorkProcess } from './components/WorkProcess';
import { useEffect, useState } from 'react';
import { Aadmin } from './components/Aadmin';
import { OrderList } from './components/OrderList';
import { Address } from './components/Address.js';
function App(){
 useEffect(()=>{
  window.addEventListener("error",(e)=>{
    if(e.error instanceof DOMException && e.error.name==="NotAllowedError"){
      window.scrollTo(0,0);
      document.getElementById("warn").classList.add("warn1");
    }
  }) 
 },[DOMException])
 useEffect(()=>{
  if(window.orientation===90||window.orientation===-90){
    document.getElementById("root").style.display="none";
    document.getElementById("disp").innerText="Please rotate the device";
  }

 },[])
 useEffect(()=>{
  window.addEventListener("orientationchange",(e)=>{
    if(window.orientation===90 || window.orientation===-90){
      document.getElementById("root").style.display="none";
      document.getElementById("disp").innerText="Please rotate the device";
    }
    else{
      document.getElementById("root").style.display="flex";
      document.getElementById("disp").innerText="";
    }
  },[]);
},[])
const pin=(el)=>{
  for(var i=0;i<el.length;i++){

      if(el[i]<"0" || el[i]>"9")
      {alert("Enter a valid pincode");
      return false;}
  }
  return true;
}
  return (
   <>
    <Gabe/>
    <div id="warn" style={{display:"none"}} >
      Pop-ups are disabled, please enable them...
    </div>
      <Routes>
        <Route  path='/'  element={<Home name={<Schedule/>}/>} />
        <Route  path='/Reg'  element={<Home name={<Reg/>}/>} />
        <Route  path='/Admin'  element={<Home name={<Admin/>}/>} />        
        <Route path='/Services'  element={<Service/>} />
        <Route path='/Payment'element={<Home name={<Payment/>}/>} />       
        <Route path='/MyOrders'element={<Home name={<Orders/>}/>} />        
        <Route path='/Careers' element={<Careers/>} />
        <Route path='/PartnerWithUs' element={<PartnerWithUs />} />
        <Route path='/Rates' element={<Rates />} />
        <Route path="/WorkProcess" element={<Home name={<WorkProcess />} />} />
        <Route path='/Dates'element={<Home name={<Dates/>}/>} />
        <Route path='/Booked'element={<Home name={<Booked/>}/>} />
        <Route path="/Aadmin" element={<Aadmin/>} />
        <Route path="/OrderList" element={<OrderList/>} />
        <Route path="/Own" element={<Own/>} />
        <Route path="/Address" element={<Address />} />
      </Routes>
   <Footer/>
   </>
  );
}
export default App;