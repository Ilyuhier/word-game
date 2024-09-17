import LetterBox from "../Components/LetterBox"
import {useState} from 'react'

export default function Riddle({askedWord}){
  const wordArray = askedWord.split('')
  const [winState,setWinState] = useState(false)
  const [letterState,setLetterState] = useState(Array(wordArray.length).fill(false))
  function checkWin(nextState){
    let isWin = true;
    nextState.forEach(e=>{
      if(e===false){isWin=false}
    })
    setWinState(isWin)
  }
  function setTrue(i){
    const nextState = Array.from(letterState)
    console.log(nextState)
    nextState[i] = true
    setLetterState(nextState)
    checkWin(nextState)
  }
  const numberOfLines = [0,1,2,3,4,5]
  const lines = numberOfLines.map((e, line)=><li key={e}>{wordArray.map((e, i)=><LetterBox letter={e} id={i} setTrue={setTrue} wordArray={wordArray} line={line}/>)}</li>)
  return(
    <div className='Riddle'>
      {/* <h1>{askedWord}</h1> */}
      {winState===true&&<h1>congrats</h1>}
      <ul>{lines}</ul>
    </div>
  )
}
