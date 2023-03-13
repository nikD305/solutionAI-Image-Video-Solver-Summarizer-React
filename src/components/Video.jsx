import React, {useEffect, useState} from 'react';
import { motion } from "framer-motion";
import Tech from './Tech';
import universeImage from '../assets/universe.jpg';

import LinearProgress from '@mui/material/LinearProgress';
const Video = () => {
  
  const [txtData, setTxtData] = useState("")
  const [text, setText] = useState("")
  const [downLink, setDownLink] = useState("")
const [chat, setChat] = useState("")
const [store, setStore] = useState([]);
const [response, setResponse] = useState([]);
const [merge , setMerge ] = useState("")
const [isLoading, setIsLoading] = useState(false);



console.log("merge",merge)
console.log(import.meta.env.VITE_TEST_CHAT_GPT )

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': import.meta.env.VITE_TEST_YOU_TUBE,
      'X-RapidAPI-Host': 'youtubetranscriptdownloader.p.rapidapi.com'
    },
    body:  JSON.stringify({"url": downLink}) 
  };


  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('https://youtubetranscriptdownloader.p.rapidapi.com/dev', options)
    const data = await response.json()

    
    setTxtData(data)
    return data
  }

  const handleLink = async (data) => {
    const finalLink = data.body.slice(17, data.body.length-1)
    setText(finalLink)
    return finalLink
  } 

  const downloadFile = async (finalLink) => {
    const downloadLink = finalLink
    console.log(downloadLink)
    const response = await fetch(downloadLink)
    const data = await response.text()
    setText(data)
  
    return data
  }











  const loop = async () => {
    
    let s = 0;
    let e = 10000;
    for (s; e < text.length; ) {
      let trim = text.slice(s, e);
      setStore((prevStore) => [...prevStore, trim]);
      s = e;
      e = e + 10000;
      await fetchQuestions(trim);
    }
  };

  const fetchQuestions = async (question) => {

    setIsLoading(true);
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": import.meta.env.VITE_TEST_CHAT_GPT,
        "X-RapidAPI-Host": "chatgpt-ai-chat-bot.p.rapidapi.com",
      },
      body: JSON.stringify({ query:  `summarize this ${question}` }),
    };
    try {
      const response = await fetch(
        "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask",
        options
      );
      const json = await response.json();
      setResponse((prevResponse) => [...prevResponse, json]);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

const fetchCondTwo = async () =>{
  setIsLoading(true);
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': import.meta.env.VITE_TEST_CHAT_GPT,
      'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
    },
    body: JSON.stringify({ "query": `summarize this ${text}` })
  };
  try {
    const response = await fetch(
      "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask",
      options
    );
    const json = await response.json();
    setResponse((prevResponse) => [...prevResponse, json]);
    setIsLoading(false);
  } catch (err) {
    console.error(err);
  }
}

  // const handleFormSubmit = async (event) => {
  
  

  //   if(text.length>14000){
  //     await loop()
  //   }
  //   else{
  //     await fetchCondTwo()
  //   }
  // };


useEffect(  () => {
  
  if(text.length>14000){
     loop()
  }
  else if(text.length<14000 && text.length>100){
   fetchCondTwo()
  }
}, [text])



const handleButtonClick = async () => {
    try {
      const data = await fetchData()
      const finalLink = await handleLink(data)
     const download = await downloadFile(finalLink)

     
     


    } catch (error) {
      console.error(error)
    }
  }



//Summarize Again
  let ans = ""
  const mergeIt = async () =>{
    for(let i=0 ;i<response.length;i++){
      ans = ans.concat(" ",response[i].response)
    setMerge(ans)
    }
    return ans
    }
  
  
    const fetchCondThree = async (quest) =>{
      setIsLoading(true);
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': import.meta.env.VITE_TEST_CHAT_GPT,
          'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
        },
        body: JSON.stringify({ "query": `summarize this ${quest}` })
      };
      try {
        const response = await fetch(
          "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask",
          options
        );
        const json = await response.json();
        setResponse([json]);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    
  const handleMerge = async () =>{
  const prossesOne = await mergeIt()
  await fetchCondThree(prossesOne)
  }
  //




  return (
    <motion.div
      className='bg-universe flex h-full w-full absolute '
      style={{
       
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
      }}
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth}}
      transition={{duration:0.5}} 
    >
      <div>
        <Tech/>
      </div>
      <div className='container flex-col flex  absolute items-center justify-center top-16 ml-10
      
      
      '>
      <div className='flex justify-center items-center '>
      <div className='flex justify-center items-center translate-y-[25%] mr-3 '>

      <input type="text" className='w-64 mb-5 rounded-md border border-gray-400 border-solid' onChange={(e)=>setDownLink(e.target.value)} />

      </div>
      <button className='mr-3 bg-gradient-to-r from-blue-500 to-purple-500  rounded-md h-8 w-24 hover:opacity-80' onClick={()=>handleButtonClick()}>Generate</button>
    <button className=' bg-gradient-to-r from-blue-500 to-purple-500  rounded-md h-[30px] w-24 hover:opacity-80' onClick={()=>handleMerge()}> Again..</button>
      </div>
        <div className='border-2 h-[500px] w-4/5 bg-white text-black bg-opacity-80 rounded-lg p-5  overflow-auto  '>
          
           {/* <p>{text}</p> */}
          
      {response.map(item=>{
        return <p>{item.response}</p>
      })}
         {isLoading && <LinearProgress/>}
        </div>
      </div>
    </motion.div>
  )
}

export default Video;
