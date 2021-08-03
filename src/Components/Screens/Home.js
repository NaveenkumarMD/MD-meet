import React, { useState, useEffect } from 'react'
import call from '../../assets/call.png'
import Createneewmeeting from './Createneewmeeting'
import Joinmeeting from './Joinmeeting'
function Home() {
    const [time, setTime] = useState(new Date())
    const [createnewmeetingvisible,setcreatemeet]=useState("none")
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])
    const monthNames = ["Jan", "Feb", "Mar", "Apl", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
    const hours = time.getHours()
    const minute = time.getMinutes()
    const month = monthNames[time.getMonth()]
    const day = weekdays[time.getDay()]
    const date = time.getDate()
    const seconds = time.getSeconds()
    const createmeeting=()=>{
        setcreatemeet("block")
        setTimeout(() => {
            document.getElementById("createmeet").scrollIntoView() 
        }, 10);
        
        
    }
    return (
        <div>
            <div className="navbar">
                 <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div style={{ color: "#0056E0", fontWeight: "600", fontSize: "28px", margin: "5px" }}>MD</div>
                    <div className="title"> meet</div>
                </div>
                <div>
                    <span className="time">{hours}{":"}{minute}{":"}{seconds}{" "}{day},{month}{""}{date}</span>
                </div>

            </div >
            <div className="container">
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_sxrbhrtx.json" background="transparent" speed="1" style={{ width: "400px", height: "400px" }} loop autoplay></lottie-player>
                <div>
                <div className="content">
                    <div className="text-large">
                        Video calls for everyone<br />
                        Absolutely free
                    </div>
                    <div className="text-small"><span style={{ color: "#0056E0", fontWeight: "600", fontSize: "24px", marginHorizontal: "3px" }}>MD</span> meet is a powefull video calling app powered with <span style={{ color: "black" }}> Jitsi meet</span> which provides a  immersive video calling experience. </div>
                    <div className="btn-group">
                        <button className="button-solid" onClick={createmeeting}>
                            <img src={call} style={{width:"20px",height:"20px",marginRight:"5px"}}/>
                            New meeting</button>
                        <button className="button-outline">Join a meeting</button>
                    </div>

                </div>
                <div style={{color:"rgba(0,0,0,0.6)",marginTop:"20px",fontWeight:"500"}}>
                    <span style={{color:"#0056E0",cursor:"pointer"}}>View</span> code on github
                </div>
                </div>

            </div>
            <div id="createmeet">
            <Createneewmeeting display={createnewmeetingvisible} />
            </div>
           
            <Joinmeeting/>
        </div>

    )
}

export default Home
