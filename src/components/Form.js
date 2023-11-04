import '../App.css';
import { useLocation } from 'react-router-dom';
export const Form=({schedule})=>{
const loc=useLocation();
return(
<div className='form' id='form'>
  {schedule}
</div>
)
}