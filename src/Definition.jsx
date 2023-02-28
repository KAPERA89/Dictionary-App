import React from 'react'
import Noun from './Noun'

const Definition = ({all, main, audio}) => {
  return ( 
    <>
    <div className="container-fluid">
      <div className="row dark-theme">
        <div className="col-12 text-center text-capitalize fs-1 fw-bold text-decoration-underline mb-4">
          you are searching for : {main.word}
        </div>
        {audio ? (
          <audio
            controls
            className="color m-4 text-center col-10"
            src={audio}
          ></audio>
        ) : (
          <div className="color fs-3 text-center">Audio not found</div>
        )}

      
        <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
         <h3>meaning & definitions : </h3> 
        </div>
        <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            <Noun  all={all}/>
        </div >
      </div>
    </div>
  </>
  )
}

export default Definition