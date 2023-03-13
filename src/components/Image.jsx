import React, { useState } from 'react';
import { motion } from "framer-motion";
import Tech from './Tech';
import universeImage from '../assets/universe.jpg';
import Tesseract from 'tesseract.js';
import LinearProgress from '@mui/material/LinearProgress';
const Image = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 
  const handleChange = (e) =>{
  const image = e.target.files[0]
  setImage(image)
  }


  const handleImageToText = async () =>{
//     Tesseract.recognize(image, "eng").then((res) => {
//  setText(res.data.text)
//     }).catch((err)=>console.log(err))
setIsLoading(true);
    const find = await  Tesseract.recognize(image, "eng")
    setText(find.data.text)
    return find.data.text

  }


  const fetchQuestions = async (sum) => {
    
   
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': import.meta.env.VITE_TEST_CHAT_GPT,
          'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
        },
        body: JSON.stringify({ "query": `solve or summarize this ${sum}` })
      };
      // fetch('https://chatgpt-ai-chat-bot.p.rapidapi.com/ask', options)
      //   .then(response => response.json())
      //   .then(response => setResponse(prevResponse => [...prevResponse, response])) 
      //   .catch(err => console.error(err));
   const data = await  fetch('https://chatgpt-ai-chat-bot.p.rapidapi.com/ask', options)
   const response = await data.json()
   setResponse(response)
   setIsLoading(false);

  };

 
  const handleFunctions = async () =>{
 const sum = await handleImageToText()

await fetchQuestions(sum)

  }


console.log("text",text)
console.log("response",response)
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
      <div>
      <input type="file" className='w-[260px] mb-5 bg-cyan-300 rounded-md cursor-pointer hover:opacity-80'  onChange={handleChange}/>
         <button className='h-8 w-24 ml-1 bg-gradient-to-r from-blue-500 to-purple-500  rounded-md hover:opacity-80' onClick={handleFunctions}>Generate</button>
      </div>
      <div className='border-2 h-[500px] w-4/5 bg-white text-black bg-opacity-80 rounded-lg p-5  overflow-auto  '>
      {isLoading && <LinearProgress/>}
        <p className='font-medium text-gray-800' >
          
        {response.response}
        </p>
      
      </div>
    </div>
  </motion.div>
  )
}

export default Image;
