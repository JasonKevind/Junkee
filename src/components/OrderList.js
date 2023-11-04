import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import '../App.css';
import { db } from '../firebase';
import { collection,query,where,getDocs } from 'firebase/firestore/lite';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation, useNavigate } from 'react-router-dom';
export const OrderList = () => {
    const loc=useLocation();
    const nav=useNavigate();
    useEffect(()=>{
        if(!loc.state){
            nav(-1);
       }
    },[])
    const sty = {
        width: "50%",
        display: 'flex',
        flexDirection: 'column',
        flexWrap: "wrap",
        gap: "7.5%",
        alignItems: "center",
        minHeight:"20vh",
        maxHeight:"fit-content",
        justifyContent:"space-evenly"
    };
    const [today, setToday] = useState(new Date());
   const [p,setP]=useState(new Date());
    const [pick,setPick]=useState([]);
    const [sch, setSch] = useState([]);
    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    };
    const fetchScheduledData =async (selectedDate,method,sep) => {
        const sel = months[selectedDate.getMonth()] + " " + selectedDate.getDate() +sep+ selectedDate.getFullYear();
        const data=[]
        const q=collection(db,"clients")
        const ans=await getDocs(q);
        if(ans.docs.length){
        ans.docs.forEach(each=>{
            if(each.data().hasOwnProperty("orders")){
                each.data().orders.forEach(dt=>{
                    if(dt[method]==sel){
                        data.push({...dt,name:each.data().name,
                contact:each.data().contact,address:each.data().address,
                            pincode:each.data().pincode});
                    }
                })
            }
        })}
        (sep===", ")?setSch(data):setPick(data);
        
    }
    const handleDateChange = (selectedDate) => {
        setToday(selectedDate);
        fetchScheduledData(selectedDate,"sch",", ");
    };
    const handleDateChang = (selectedDate) => {
        setP(selectedDate);
        fetchScheduledData(selectedDate,"datz"," ");
    };
    return (
        <div style={{ display: 'flex', padding: 5, height: "fit-content" }}>
            <div id="sty" style={sty}>
                <div>Scheduled</div>
                <div>
                <DatePicker
            
    selected={today}
    onChange={handleDateChange}
    calendarClassName="custom-calendar" 
    dayClassName={(date) => {
        if (date.getDate() === 25 && date.getMonth() === 11) {
            return 'highlighted'; 
        }
        return '';
    }}
    minDate={new Date(2023,9,29)}
    maxDate={new Date().setDate(new Date().getDate())}
/>
                </div>
                <div style={{ display: 'flex', flexDirection: "column", gap: 20, justifyContent: 'center' }}>
                   {sch.length?(
                    sch.map((it,id)=>(
                       <>
                       <div style={{cursor:'pointer'}} onClick={(e)=>{document.getElementById(it.contact+it.paymentid+"").showModal()}}>{it.name}</div>
                       <dialog style={{border:'none',borderRadius:'7.5px',backgroundColor:'grey'}} id={it.contact+it.paymentid+""}>
                            <h3>{it.name}</h3>
                            <p>Contact : {it.contact}</p>
                            <p>Address : {it.address}</p>
                            <p>Pincode : {it.pincode}</p>
                            <p>Time : {it.time}</p>
                            <p>PaymentMode : {it.paymentmode}</p>
                            <p>ID : {it.paymentid}</p>
                            <p>Weight : {it.weig}</p>
                            <p style={{color:"green"}}>Booked Date : {it.sch}</p>
                            <p style={{color:"green"}}>Pickup Date : {it.datz}</p>
                            <button style={{width:"30%",border:"none",borderRadius:"5px",padding:5}} onMouseDown={(e)=>{document.getElementById(it.contact+it.paymentid+"").close("h");}}>Close</button>
                        </dialog> 
                       </> 
                    ))
                   ):
                   <div style={{display:'flex',maxWidth:'25vw',flexWrap:'wrap'}}>
                    None Scheduled in this day or select to view
                    </div>}
                </div>
            </div>
            <div id="sty" style={sty}>
                 <div>PickUp</div>
                <div>
                <DatePicker
               
    selected={p}
    onChange={handleDateChang}
    calendarClassName="custom-calendar" 
    dayClassName={(date) => {
        if (date.getDate() === 25 && date.getMonth() === 11) {
            return 'highlighted'; 
        }
        return '';
    }}
    minDate={new Date(2023,10,2)}
    maxDate={new Date().setDate(new Date().getDate() + 4)}
/>
                </div>
                <div style={{ display: 'flex', flexDirection: "column", gap: 20, justifyContent: 'center' }}>
                   {pick.length?(
                    pick.map((it,id)=>(
                       <>
                       <div style={{cursor:'pointer'}} onClick={(e)=>{document.getElementById(it.paymentid+it.contact+"").showModal()}}>{it.name}</div>
                       <dialog style={{border:'none',borderRadius:'7.5px',backgroundColor:'grey'}} id={it.paymentid+it.contact+""}>
                            <h3>{it.name}</h3>
                            <p>Contact : {it.contact}</p>
                            <p>Address : {it.address}</p>
                            <p>Pincode : {it.pincode}</p>
                            <p>Time : {it.time}</p>
                            <p>PaymentMode : {it.paymentmode}</p>
                            <p>ID : {it.paymentid}</p>
                            <p>Weight : {it.weig}</p>
                            <p style={{color:"green"}}>Booked Date : {it.sch}</p>
                            <p style={{color:"green"}}>Pickup Date : {it.datz}</p>
                            <button style={{width:"30%",border:"none",borderRadius:"5px",padding:5}} onMouseDown={(e)=>{document.getElementById(it.paymentid+it.contact+"").close("h");}}>Close</button>
                        </dialog> 
                       </> 
                    ))
                   ):<div style={{display:'flex',maxWidth:'25vw',flexWrap:'wrap'}}>No Pick ups on this day or select to view</div>}
                </div>
            </div>
            
        </div>
    )
}

export default OrderList;
