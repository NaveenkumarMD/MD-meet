import React,{useState} from 'react'
import Jitsi from 'react-jitsi'
import Loader from 'react-loader-spinner'
import { useLocation } from 'react-router-dom'

const config = {
    prejoinPageEnabled: false

}
const containerstyle = {
    width: "100%",
    height: "100vh"
}
function Meet(props) {
    const location=useLocation()
    console.log(location.state)
    return (
        <div>
            <Jitsi

                roomName={location.state.roomname}
                displayName={location.state.displayname}
                password={location.state.password}
                config={config}
                containerStyle={containerstyle}
                loadingComponent={Loaderx}
onMeetingend
        
            />
        </div>
    )
}

export default Meet

const Loaderx = () => (
    <div style={{display: "flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
    <Loader
        type="RevolvingDot"
        color="#0056E0"
        height={100}
        width={100}
        timeout={3000} />
    </div>
)
