import '../App.css';
export const Mail=(props)=>{
    return (
        <span style={{marginLeft:'7.5px'}}>
        <a style={{color:props.hasOwnProperty("col")?props.col:"#586132"
            }} href="https://mail.google.com/mail/?view=cm&fs=1&to=team@junkee.in" target='_blank'>team@junkee.in</a>
    </span>
    )
}