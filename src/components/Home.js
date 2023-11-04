import '../App.css'
import {Img} from './Image';
export const Home=(props)=>{
  return (
    <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
      <Img name={props.name}  />
    </div>)
}