"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {useState } from "react";
import axios from "axios"; 
import  API_BASE_URL  from "../api/api";

export default function Home() {
  const [name,setname]=useState("nasser");
    const handleSendData = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/user`, {
        name,
      });
      alert("Data sent! Response: " + JSON.stringify(response.data.message));
    } catch (error) {
      alert("Error sending data: " + error.message);
    }
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{`Hi there im testing Devops ;)`}</h1>
        <input type="text" placeholder={name}  style={{width:"300px",height:"50px",borderRadius:"12px"}} />
        <input type="password" placeholder={""}  style={{width:"300px",height:"50px",borderRadius:"12px"}} />
        <button onClick={handleSendData} style={{width:"300px",height:"50px",borderRadius:"12px",cursor:'pointer'}} >Send Data Server</button>

    
      </main>
      
    </div>
  );
}