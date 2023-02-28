import React from 'react'

const Noun = ({all}) => {
  return (

    <>
   {all.map((x) => {
        return x.meanings.map((y) => {
            return (
                <div>
                    {y.partOfSpeech === 'noun' ? (
                        <div>
                            <ul>
                        <li><h4> part of speech : {y.partOfSpeech}</h4> </li>
                         {y.definitions.map(z => {
                            return( <div><li><h4>Defintion : {z.definition}</h4></li>
                            {z.exemple ?  
                                <li><h4>  Exemples : {z.exemple}</h4></li> 
                                :
                                " "
                                }
                           </div>)
                         })}
                         {y.synonyms.map(z => {
                            return(<li><h4>Synnonyms : {z}</h4></li>)
                         })}  
                         </ul>
                        </div>
                    ) : (
                        " "
                    )}
                        <hr></hr>
                    {y.partOfSpeech === 'verb' ? (
                        <div>
                            <ul>

                        <li><h4> part of speech : {y.partOfSpeech}</h4> </li>
                         {y.definitions.map(z => {
                            return( <div><li><h4>Defintion : {z.definition}</h4></li>
                            {z.exemple ?  
                                <li><h4>  Exemples : {z.exemple}</h4></li> 
                                :
                                " "
                                }
                           </div>)
                         })}
                         {y.synonyms.map(z => {
                            return(<li><h4>Synnonyms : {z}</h4></li>)
                         })}  
                         </ul>
                        </div>
                    ) : (
                        " "
                    )}

                    <hr></hr>
                    {y.partOfSpeech === 'adjective' ? (
                        <div>
                            <ul>
                               
                          
                        <li><h4> part of speech : {y.partOfSpeech}</h4> </li>
                         {y.definitions.map(z => {
                            return( <div><li><h4>Defintion : {z.definition}</h4></li>
                                    {z.exemple ?  
                                        <li><h4>  Exemples : {z.exemple}</h4></li> 
                                        :
                                        " "
                                        }
                                   </div>)
                         })}
                         {y.synonyms.map(z => {
                            return(<li><h4>Synnonyms : {<p>z</p>}</h4></li>)
                         })}  
                         </ul>
                        </div>
                    ) : (
                        " "
                    )}

                    <hr></hr>
                    {y.partOfSpeech === 'interjection' ? (
                        <div>
                            <ul>
                                          
                        <li><h4> part of speech : {y.partOfSpeech}</h4> </li>
                         {y.definitions.map(z => {
                            return(  <div><li><h4>Defintion : {z.definition}</h4></li>
                            {z.exemple ?  
                                <li><h4>  Exemples : {z.exemple}</h4></li> 
                                :
                                " "
                                }
                           </div>)
                         })}
                         {y.synonyms.map(z => {
                            return(<li><h4>Synnonyms : {<p>z</p>}</h4></li>)
                         })}  
                         {y.antonyms.map(l => {
                            return(<li><h4>antonyms : {<p>{l}</p>}</h4></li>)
                         })}  
                         </ul>
                        </div>
                    ) : (
                        " "
                    )}
                </div>   
            )
        })
   })}
    
   </>


  )
}

export default Noun


