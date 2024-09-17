
export default function LetterBox({letter, id, setTrue, wordArray, line}){
  function validateLetter(e){
    e.target.disabled = true
    e.target.style.color = '#fff'
    if(e.target.parentElement.parentElement.children[id+1]){
      e.target.parentElement.parentElement.children[id+1].firstChild.focus()
    }else if(e.target.parentElement.parentElement.parentElement.children[line+1]){
      e.target.parentElement.parentElement.parentElement.children[line+1].firstChild.firstChild.focus()
    }
    if (e.target.value===letter){
      setTrue.call(this,id)
      e.target.parentElement.style.backgroundColor = '#399e4d'
    }else if(wordArray.find((el)=>el === e.target.value)){
      e.target.parentElement.style.backgroundColor = '#c4aa18'
    }else{
      e.target.parentElement.style.backgroundColor = '#a93232'
    }
  }
  
  return(
    <div className='LetterBox'>
      <input maxlength='1' required='true' className='LetterInput' onInput={(e)=>validateLetter(e)}></input>
    </div>
  )
}