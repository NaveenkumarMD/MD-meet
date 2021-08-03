import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import create from '../../assets/create.svg'
function Createneewmeeting(props) {
    const history=useHistory()
    const [name,setname]=useState("")
    const [meetname,setmeetname]=useState("")
    const [password,setpassword]=useState("")
    return (
        <div style={{ display: props.display, height: "100vh" }}>
            <div className="createnewmeetingcontainer" >
                <div className="contents">
                    <div className="h1">Create</div>
                    <div>
                        <label>Name</label><br />
                        <input placeholder="Name" onChange={(e)=>setname(e.target.value)} value={name}/><br />
                        <label>Meeting name</label><br />
                        <input placeholder="Meeting name"  onChange={(e)=>setmeetname(e.target.value)} value={meetname}/><br />
                        <label>Password</label><br />
                        <input placeholder="Password"  onChange={(e)=>setpassword(e.target.value)} value={password}/><br />
                        <div style={{ textAlign: "center" }}>
                            <button className="btn-solid" onClick={()=>history.push({pathname:"/meet",state:{
                                roomname:meetname,
                                displayname:name,
                                password:password
                            }})}>Submit</button></div>
                    </div>
                </div>
                <div className="colors">
                    <img src={create} style={{ width: "500px", height: "500px" }} />
                </div>

            </div>
        </div>
    )
}

export default Createneewmeeting
