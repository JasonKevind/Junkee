import '../App.css';
import { Mail } from './Mail';
export const PartnerWithUs=()=>{
    return (
        <div id="PWU">
            <div style={{flexDirection:"column",textAlign:'center',flexGrow:0.8}}>
                <h1 style={{padding:5}}>Partner With Us</h1>
    
            </div>
            <div style={{flexGrow:2,justifyContent:'space-evenly'}}>
                <div>
                    <div><h3 style={{margin:0,display:'inline'}}>Contact this number :</h3>
                    <strong>+91 6382273267</strong> </div>
                </div>
                <div style={{flexDirection:'column'}}>
                    <div style={{color:'gray'}}>For any query, you 
                    can mail to :
                    <Mail col={"green"} />
                    </div>
                </div>
                <div style={{color:"#333"}}>Send your details to the above mail by clicking on the mail.</div>
            </div>
        </div>
    )
}