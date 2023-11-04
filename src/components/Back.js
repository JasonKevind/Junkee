import '../App.css';
import {IoIosArrowBack} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
export const Back=(props)=>{
    const nav=useNavigate();
    return (
    <div style={{display:'flex',flexDirection:'column',flexBasis:props.flexbasis,flexGrow:1}}>
        <div>
            <button style={{backgroundColor:'transparent',border:'none',
            color:"brown",
            textDecoration:'underline',padding:0,
           
        }} onClick={()=>{nav(-1);}}>
                <IoIosArrowBack size={11} color={"brown"} />
                Back 
            </button>
        </div>
        <div style={{fontSize:"90%"}} >
            {props.hasOwnProperty("second")?props.second:"WorkProcess"}
        </div>
    </div>
    )
}