import {useLocation } from 'react-router-dom';
import '../App.css';
import { Form } from './Form';
export const Img=(props)=>{
  const loc=useLocation();  
  return (
    <div className='req' id="req">
      <div >
          <div  >
              <div>
                <h1 style={{fontSize:"250%",fontWeight:"bolder"}}>Sell your recyclables <br></br>online with 
                <span id="h1" style={{fontWeight:1000,textShadow:"9px 4px 10px green"}}> JUNKEE
                </span>
                </h1>
              </div>
              <div>
                <p style={{color:'rgb(150, 139, 139)',fontFamily:"Inter,sans-serif"}}>Paper - Plastics -Metals - Applications</p>
                <p>You can also download  the 
                  <span id="h2" style={{fontWeight:800}}> JUNKEE App </span> 
                to get <strong>CASH FOR YOUR TRASH</strong><span style={{textDecoration:'underline',fontWeight:1000}}>(Coming Soon).</span><br></br> Place your orders here for now.</p>
              </div>
          </div>
          <div style={{display:'flex',flexDirection:'column'}}>
           <div style={{display:'flex',flexGrow:2.5,justifyContent:'center'}}>
            <img style={{width:'100%',height:'100%',objectFit:'fill'}} src={require("../1.png")} loading='lazy'/>
           </div> 
          </div>
      </div>
      <div>
         <Form schedule={props.name}  />
      </div>
    
    </div>
  );
}
export default Img;