import LetterBox from "../Components/LetterBox"

export default function Riddle({askedWord}){
  console.log(askedWord)
  const wordArray = askedWord.split('')
  return(
    <div className='Riddle'>
      <h1>{askedWord}</h1>
      <ul>
        <li>
          {wordArray.map((e)=><LetterBox letter={e}/>)}
        </li>
      </ul>
      
    </div>
  )
}