import '../App.css';
export const Rates=()=>{
    const normalRec=[{link:"beam",rate:"25",data:"IRON"},
    {link:"beer",rate:"100",data:"ALUMINIUM"},
    {link:"bin",rate:"13",data:"PLASTIC"},
    {link:"books",rate:"14",data:"COPIES/BOOKS**MARKET RATES DEOPPED RECENTLY"},
    {link:"box",rate:"8",data:"CARDBOARD"},
    {link:"brass",rate:"305",data:"BRASS"},
    {link:"doc",rate:"15",data:"OFFICE PAPER(A3/A4)"},
    {link:"hook",rate:"40",data:"STEEL"},
    {link:"newspaper",rate:"11",data:"NEWSPAPER**MARKET RATES DROPPED RECENTLY"},
    {link:"wire",rate:"550",data:"COPPER"},
    ]
    const large=[{link:"air-conditioner",data:"SPLIT AC 1.5 TON(COPPER COIL)",rate:"2000",pic:"1"},
    {link:"air-conditionerr",data:"WINDOW AC 1.5 TON(COPPER COIL)",rate:"2000",pic:"1"},
    {link:"fridge",data:"SINGLE DOOR FRIDGE",rate:"1000",pic:"1"},
    {link:"fridge1",data:"DOUBLE DOOR FRIDGE",rate:"1200",pic:"1"},
    {link:"smart-washing-machine",data:"FRONT LOAD FULLY AUTOMATIC",rate:"400",pic:"1"},
    {link:"smart-washing-machine",data:"TOP LOAD FULLY AUTOMATIC WASHING MACHINE",rate:"400",pic:"1"},
    {link:"smart-washing-machine",data:"SEMI AUTOMATIC WASHING MACHINE(DOUBLE DRUM)",rate:"400",pic:"1"},
    {link:"ventilation",data:"IRON COOLER",rate:"30"},
    {link:"ventilation",data:"PLASTIC COOLER",rate:"15"},    
    {link:"water-heater",data:"GEYSER",rate:"20"},    
]
const small=[{link:"battery",data:"BATTERY(USED WITH INVERTERS)",rate:"72"},
{link:"engine",data:"INVERTERS/STABILIZERS(COPPER COIL)",rate:"42"},
{link:"fan",data:"CEILING FAN",rate:"35"},
{link:"generator",data:"MOTORS(COPPER WIRING)",rate:"35"},
{link:"generatorr",data:"UPS",rate:"180",pic:"1"},
{link:"lamp",data:"LIGHT E-WASTE(CONTENT:PLASTIC>METAL)",rate:"15"},
{link:"microwave",data:"MICROWAVE",rate:"25",pic:"1"},
{link:"printer",data:"PRINTERS/SCANNER/FAX MACHINE",rate:"15"},
{link:"radiation",data:"LIGHT E-WASTE(CONTENT:PLASTIC>METAL)",rate:"15"},
{link:"television",data:"CRT TV",rate:"150",pic:"1"},
]
const mob=[{link:"comp",data:"COMPUTER CPU",rate:"200",pic:"1"},
{link:"lap",data:"SCRAP LAPTOP",rate:"300",pic:"1"},
{link:"tablet",data:"SCRAP TABLET",rate:"40",pic:"1"},
{link:"comp",data:"COMPUTER CPU",rate:"200",pic:"1"},
 {link:"iphone",data:"MOBILE(4g price may vary from 3g)",rate:"20"}
]
const other=[{link:"carr",data:"CAR",rate:"20000",pic:"1"},
{link:"rec",data:"MIXED SCRAP",rate:"2100",pic:"1"}

]
    return (
        <div className='rates'>
            <div style={{display:'flex',backgroundColor:'#AFE5B6',flexDirection:'column',
            minHeight:'10%',maxHeight:'15%',width:'97%',
            borderRadius:'10px',paddingLeft:8,paddingRight:8}}>
                <div style={{margin:0}}>
                    <p>
                    <strong >
                        Notice:
                    </strong> 
                        The prices may vary with function in the scrap market. 
                    </p>
                </div>
                <div style={{margin:0,padding:0}}>
                    <p>
                        Prices may be different for bulk pickups.Call us at 
                        <span style={{color:'yellowgreen',textDecoration:'underline'}}>+91-6382273267</span>
                        to get a quote for bulk pickup.
                    </p>
                </div>
            </div>
            <div className='ratelist'>
                <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',width:'100%',minHeight:'35%',maxHeight:'110%',textAlign:'center'}} >
                    <div><h4>Normal Recyclables</h4></div>
                        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'10%',width:'100%'}}>
                        { normalRec.map(it=>   
                            <div className='list'>
                                    <div style={{width:'clamp(50px,76%,98px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{display:'flex',width:'92.5%',height:'100%',borderRadius:'10px',flexDirection:'column',backgroundColor:'whitesmoke',boxShadow:'3px 2.5px 3px 3px gray'}}>
                                            <div style={{display:'flex',height:'75%',alignItems:'center',justifyContent:'center'}}>
                                                <img style={{width:'45%',height:'45%',objectFit:'fill',maxWidth:'37.5px',maxHeight:'30px'}} src={require(`../${it.link}.png`)}  loading='lazy' />
                                            </div>
                                            <div style={{display:'flex',flexGrow:'25%',color:'#2dc937',fontSize:'60%',justifyContent:'center'}}>
                                                    Rs{it.rate}/{Object.keys(it).length===4?"PIECE":"Kg"}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:"center"}}>
                                        <small style={{fontSize:'68%',fontWeight:750}}>
                                        {it.data}
                                        </small>
                                    </div>
                            </div> )}
                        </div>    
                 </div>
            </div>
            <div className='ratelist'>
                <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',width:'100%',minHeight:'35%',maxHeight:'110%'}} >
                    <div><h4>Large Appliances</h4></div>
                        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'10%',width:'100%'}}>
                        { large.map(it=>  
                            <div className='list'>
                                    <div style={{width:'clamp(60px,76.5%,98px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{display:'flex',width:'92.5%',height:'100%',borderRadius:'10px',flexDirection:'column',backgroundColor:'whitesmoke',boxShadow:'3px 2.5px 3px 3px gray'}}>
                                            <div style={{display:'flex',height:'75%',alignItems:'center',justifyContent:'center'}}>
                                                <img style={{width:'45%',height:'45%',objectFit:'fill'}} src={require(`../large/${it.link}.png`)}  loading='lazy' />
                                            </div>
                                            <div style={{display:'flex',flexGrow:'25%',color:'#2dc937',fontSize:'60%',justifyContent:'center'}}>
                                                    Rs{it.rate}/{Object.keys(it).length===4?"PIECE":"Kg"}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:"center"}}>
                                        <small style={{fontSize:'68%',fontWeight:750}}>
                                        {it.data}
                                        </small>
                                    </div>
                            </div> )}
                        </div>    
                 </div>
            </div>
            <div className='ratelist'>
                <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',width:'100%',minHeight:'35%',maxHeight:'110%'}} >
                    <div><h4>Small Appliances</h4></div>
                        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'10%',width:'100%'}}>
                        { small.map(it=>  
                            <div className='list'>
                                    <div style={{width:'clamp(60px,76.5%,98px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{display:'flex',width:'92.5%',height:'100%',borderRadius:'10px',flexDirection:'column',backgroundColor:'whitesmoke',boxShadow:'3px 2.5px 3px 3px gray'}}>
                                            <div style={{display:'flex',height:'75%',alignItems:'center',justifyContent:'center'}}>
                                                <img style={{width:'45%',height:'45%',objectFit:'fill'}} src={require(`../small/${it.link}.png`)}  loading='lazy' />
                                            </div>
                                            <div style={{display:'flex',flexGrow:'25%',color:'#2dc937',fontSize:'60%',justifyContent:'center'}}>
                                                    Rs{it.rate}/{Object.keys(it).length===4?"PIECE":"Kg"}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:"center"}}>
                                        <small style={{fontSize:'68%',fontWeight:750}}>
                                        {it.data}
                                        </small>
                                    </div>
                            </div> )}
                        </div>    
                 </div>
            </div>
            <div className='ratelist'>
                <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',width:'100%',minHeight:'35%',maxHeight:'110%'}} >
                    <div><h4>Mobiles & Computers</h4></div>
                        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'10%',width:'100%'}}>
                        { mob.map(it=>  
                            <div className='list'>
                                    <div style={{width:'clamp(60px,76.5%,98px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{display:'flex',width:'92.5%',height:'100%',borderRadius:'10px',flexDirection:'column',backgroundColor:'whitesmoke',boxShadow:'3px 2.5px 3px 3px gray'}}>
                                            <div style={{display:'flex',height:'75%',alignItems:'center',justifyContent:'center'}}>
                                                <img style={{width:'45%',height:'45%',objectFit:'fill'}} src={require(`../mobiles/${it.link}.png`)}  loading='lazy' />
                                            </div>
                                            <div style={{display:'flex',flexGrow:'25%',color:'#2dc937',fontSize:'60%',justifyContent:'center'}}>
                                                    Rs{it.rate}/{Object.keys(it).length===4?"PIECE":"Kg"}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:"center"}}>
                                        <small style={{fontSize:'68%',fontWeight:750}}>
                                        {it.data}
                                        </small>
                                    </div>
                            </div> )}
                        </div>    
                 </div>
            </div>
            <div className='ratelist'>
                <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',width:'100%',minHeight:'35%',maxHeight:'110%'}} >
                    <div><h4>Others</h4></div>
                        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'10%',width:'100%'}}>
                        { other.map(it=>  
                            <div className='list'>
                                    <div style={{width:'clamp(60px,76.5%,98px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{display:'flex',width:'92.5%',height:'100%',borderRadius:'10px',flexDirection:'column',backgroundColor:'whitesmoke',boxShadow:'3px 2.5px 3px 3px gray'}}>
                                            <div style={{display:'flex',height:'75%',alignItems:'center',justifyContent:'center'}}>
                                                <img style={{width:'45%',height:'45%',objectFit:'fill'}} src={require(`../mobiles/${it.link}.png`)}  loading='lazy' />
                                            </div>
                                            <div style={{display:'flex',flexGrow:'25%',color:'#2dc937',fontSize:'60%',justifyContent:'center'}}>
                                                    Rs{it.rate}/{Object.keys(it).length===4?"PIECE":"Kg"}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:"center"}}>
                                        <small style={{fontSize:'68%',fontWeight:750}}>
                                        {it.data}
                                        </small>
                                    </div>
                            </div> )}
                        </div>    
                 </div>
            </div>
        </div>
    )
}