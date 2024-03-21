import React from 'react'
import axios from 'axios';
import {useState} from 'react'
const Body = () => {
    const[main,setmain]=useState("en")
    const[sec,setsec]=useState("hi")
    const[text,settext]=useState("")
    const[respons,setresponse]=useState(" ")
    
  
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', main);
    encodedParams.set('target_language', sec);
    encodedParams.set('text',text );
    
    const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '14ab460b03mshd34ad7ccd2395f0p15e0e6jsnc38f9e3ea01b',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        data: encodedParams,
      };
    
    async function myfunction(){
        
    try {
        const response = await axios.request(options);
          setresponse(response.data.data.translatedText)
    } catch (error) {
        console.error(error);
    }
}
 




    return (
   <div style={{display:"flex",flexDirection:"column", width:"20%", marginLeft:"40%", marginTop:"10%", alignItems:"center"}}>
 <select  style={{width:"50%", height:"5vh", borderRadius:"50pX"}}   onChange={(e)=>{
setmain(e.target.value)
 }}>
    <option value="en">english</option>
    <option value="hi">hindi</option>
    <option value="bn">bengali</option>

 </select>
 <input style={{margin:"2vh", height:"4vh", borderRadius:"10px" }} onChange={(e)=>{
    settext(e.target.value)

 }}></input>
 
 <select style={{width:"50%", height:"5vh" ,borderRadius:"50pX"}} onChange={(e)=>{
setsec(e.target.value)
 }}><option value="hi">hindi</option>
    <option value="en">english</option>
    <option value="bn">bengali</option>

 </select> 
 <button style={{width:"15vh", height:"5vh", marginTop:"3vh", borderRadius:"20px", backgroundColor:"green",color:"white", border:"none"}} onClick={()=>{
   if(text===""){
   setresponse(" ")
    alert("please Input text")
   }else{
    myfunction()
   
   }
   
}}>click</button>
 
 <p>{respons}</p>
   </div>
  )
}

export default Body