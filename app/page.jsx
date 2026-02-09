"use client";
import { useRouter } from "next/navigation";
import GiftBox from "../components/GiftBox";
export default function Home(){
 const r=useRouter();
 return(<div style={{textAlign:"center"}}>
 <h1>🎁 A Surprise Is Waiting</h1>
 <GiftBox onClick={()=>r.push("/wish")}/>
 </div>);
}