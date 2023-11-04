import '../App.css'
import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';
import { Mail } from './Mail';
import { useNavigate } from 'react-router-dom';
const Footer=()=>{
  const nav=useNavigate();
  
const icons=[{icon:<AiOutlineFacebook size='90%' color='white'/>,cl:"https://instagram.com/junkee.in?igshid=OGQ5ZDc2ODk2ZA=="},{icon:<AiOutlineInstagram size='90%' color='white' />,cl:"https://instagram.com/junkee.in?igshid=OGQ5ZDc2ODk2ZA=="},
{icon:<SiGmail size='90%' color='white' />,cl:"https://mail.google.com/mail/?view=cm&fs=1&to=team@junkee.in"},{icon:<AiOutlineWhatsApp size='90%' color='white'/>,cl:"https://wa.me/message/LAO6CDD5JLJMH1"}
]
    return(

        <div className="parent-Div">
        <div className="left-Div" >
          <div className="sub-Cont" style={{justifyContent:'space-evenly'}}>
           {icons.map(it=>
            <div className="sub-Child"><a style={{cursor:'pointer'}} href={it.cl} target="_blank">{it.icon}</a></div>
           )}
          </div>
          <div>
            After scheduling a scrap, we provide <span style={{color:"green"}}>Free doorstep pickup service</span>
            of 40+ recyclables and <span style={{color:'green'}}>get Cash for your trash</span> by this
            you can contribute towards the <span style={{color:'green'}}>Green Environment</span>.
          </div>
        </div>
        <div className='md1'>
            <div ><h3>Company</h3></div>
            <div onClick={(e)=>{e.preventDefault();(document.getElementById("globname").innerText.length)?(nav("/Admin",{state:{name:document.getElementById("globname").innerText,contact:document.getElementById("globcon").innerText}})):(nav("/"));}}>Home</div>
            <div><a href="/Services">Services</a></div>
            <div><a href="/PartnerWithUs">Contact Us</a></div>
        </div>
        <div className='md2'>
            <div><h3>Contact</h3></div>
            <div >+91 6382273267</div>
            <div><Mail col={"white"}/></div>
            <div> Address 1:5/25H 1 Periyar Nagar Kurinjipadi, Cuddalore 607302<br></br><br></br>
            Address 2: 107 Dharshini Residencies Kelambakkam 603103
            </div>
        </div>
      </div>
    )
}
export default Footer;