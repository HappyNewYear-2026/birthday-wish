"use client";
import { useState } from "react";
import MusicPlayer from "../../components/MusicPlayer";
export default function Wish(){
 const [n,setN]=useState("");
 const [s,setS]=useState(false);
 return(<div style={{textAlign:"center"}}>
 <MusicPlayer/>
 {!s?(<>
 <h2>Type your beautiful name</h2>
 <input onChange={e=>setN(e.target.value)}/>
 <button onClick={()=>setS(true)}>Continue</button>
 </>):(<h1>🎂 Happy Birthday {n} 🎂</h1>)}
 </div>);
}