import '../App.css';
import { Mail } from './Mail';
export const Careers=()=>{
    return (
        <div id="careers">
            <div style={{flexDirection:"column",textAlign:'center',flexGrow:0.8}}>
                <h1 style={{padding:5}}>Careers</h1>
            </div>
            <div style={{display:'flex',flexGrow:2,justifyContent:'space-evenly'}}>
                <div>
                    <h3>Flutter Developer</h3>
                </div>
                <div style={{gap:25}}>
                    <div><span><h4 style={{margin:0,display:'inline'}}>Expirence level : </h4></span>The candidate should have worked on atleast 1 or 2 projects.</div>
                    <div style={{lineHeight:2.5}}><span><h4 style={{margin:0,display:'inline'}}>Job Description : </h4></span>The candidate should be able to have a creative mindset for coming up with design patterns as designing will be worked with a team. He/she should be able to have the ability to learn newer technologies. Knowledge in flutter is mandatory.</div>
                    <div style={{color:'black'}}>Send your resume to the mail <Mail /></div>
                </div>
            </div>
            <div style={{display:'flex',flexGrow:2,justifyContent:'space-evenly'}}>
                <div>
                    <h3>React Js Developer</h3>
                </div>
                <div style={{gap:25}}>
                    <div><span><h4 style={{margin:0,display:'inline'}}>Expirence level : </h4></span>The candidate should have worked on atleast 2 projects.</div>
                    <div style={{lineHeight:2.5}}>
                        <span><h4 style={{margin:0,display:'inline'}}>Job Description : </h4></span>
                        The candidate must know the basic hooks, routing and also VirtualDOM of React.
                    </div>
                    <div style={{color:'black'}}>Send your resume to the mail <Mail /></div>
                </div>
            </div>
        </div>
    )
}