"use client";
import { useEffect } from "react";
export default function MusicPlayer(){
 useEffect(()=>{const a=new Audio("/music.mp3");a.loop=true;a.play().catch(()=>{});},[]);
 return null;
}