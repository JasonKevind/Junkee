import '../App.css';
export const Service=()=>{
    const data=[{head:"Household",main:"  We provide easy schedluing to place orders."},
    {head:"Institutions",main:"  We provide solutions to manage bulk scraps."},
    {head:"Community",main:"We provide  solutions for managing the scrap and collecting in a single take-away and also for better rates."},
    {head:"Office",main:"We provide solutions for collecting papers in bulk, and even other confidential information(waste) and shredded papers."}
]
    return(
        <div id="service" style={{gap:20}}>
            <div style={{flexDirection:"column",textAlign:'center',flexGrow:0.8}}>
                <h1 style={{padding:5}}>Services</h1>
            </div>
            {data.map(it=>
             <div style={{flexGrow:2,justifyContent:'space-evenly',padding:5}}>
             <div >
                 <h3 style={{display:'inline',margin:0}}>For {it.head} : </h3>
                 {it.main}
             </div>    
         </div>
            )
            }    
        </div>
    )
}
export default Service;