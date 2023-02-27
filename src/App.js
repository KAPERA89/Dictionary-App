import React, { useEffect, useState } from "react";
import './App.css'
import axios from "axios";

function App() {

  const [options, setOptions] = useState([])
  const [to, setTo] =  useState("en");
  const [from, setFrom] =  useState("en");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  //curl -X 'GET' \'https://libretranslate.com/languages' \ -H 'accept: application/json'

  useEffect(() =>{
    axios
      .get('https://libretranslate.com/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, [])

  const Translate = () =>{
    // curl -X 'POST' \ 'https://libretranslate.com/translate' \-H 'accept: application/json' \ -H 'Content-Type: application/x-www-form-urlencoded' \
         // -d 'q=Hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

         const params = new URLSearchParams();
          params.append('texts', input);
          params.append('source', output);
          params.append('to', to);
          params.append('api_key', '96XGHVG-5PE44CV-KD7FNSW-YEM441V');
       

      axios.post('https://libretranslate.com/translate', params ,
      {
        headers: {
          'accept': 'application/json', 
          'Content-Type': 'application/x-www-form-urlencoded'}, 
      }
      ).then(res=>{
        console.log(res.data)
        setOutput(res.data.translatedText)
      })

  }

  return (
    <div className="App">

   <div>
    <span>From : ({from}) </span>
    <select onChange={e=> setFrom(e.target.value)}>
      {options.map(opt => (
        <option key={opt.code} value={opt.code}>{opt.name}</option>
      ))}
    </select> 
    <span> To ({to}): </span>
    <select onChange={e=> setTo(e.target.value)}>
      {options.map(opt => (
        <option key={opt.code} value={opt.code}>{opt.name}</option>
      ))}
    </select> 
   </div> 

    <div>
    <textarea cols="50" rows="8" onInput={e => setInput(e.target.value)}></textarea>
   </div>

   <div>
    <textarea cols="50" rows="8" value={output}></textarea>
   </div> 
   <div>
     <button onClick={ e =>Translate()}>Translate</button> 
   </div>
   </div>
  );
}

export default App;
