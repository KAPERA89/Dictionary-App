import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import Definition from './Definition'
function App() {

  const [input, setInput] = useState("");
  const [all, setAll] = useState([])
  const [main, setmain] = useState([])
  const [audio, setAudio] = useState();

   const Search = async () => {
    await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
      .then(res =>{ 
         console.log(res.data)
         setAll(res.data)
         setmain(res.data[0])
         setAudio(res.data[0].phonetics[0].audio)
        })       
    }   



    useEffect(() => {Search(); }, [input])

  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center fw-bold fs-1 p-3 bg-primary text-white">
           Dictonary
        </div>
        <div className="form-floating bg-primary py-3 pb-5 d-flex justify-content-center">
          <input
            type="text"
            className="form-control-sm border-0 px-2 col-md-3 col-sm-4"
            placeholder="Type your word"
            value={input}
            onInput={e => setInput(e.target.value)}
          />
          <button
            className="btn btn-dark text-light col-md-1 col-sm-2 mx-2"
            onClick={Search}
          >
            Search
          </button>
        </div>
      </div>
    </div>

    {input !== "" ? (
      <Definition all={all} main={main} audio={audio} />
    ) : (
      <div className="fs-1 text-capitalize text-center fw-bold text-decoration-underline text-white bg-dark extra">
        type a word in the box
      </div>  
    )}
  </>
  )

  

}

export default App;
