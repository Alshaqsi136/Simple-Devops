"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {useState } from "react";

export default function Home() {
  const [name,setname]=useState("nasser");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{`Hi there im testing Devops ;)`}</h1>
        <input type="text" placeholder={name}  style={{width:"300px",height:"50px",borderRadius:"12px"}} />
        <input type="password" placeholder={""}  style={{width:"300px",height:"50px",borderRadius:"12px"}} />
        <button style={{width:"300px",height:"50px",borderRadius:"12px",cursor:'pointer'}} >Send Data Server</button>
         <button style={{width:"300px",height:"50px",borderRadius:"12px",cursor:'pointer'}} >Show tabes in db</button>
    
      </main>
      
    </div>
  );
}