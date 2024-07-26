function validateLetter(e, letter){
  e.target.disabled = true
  e.target.style.color = '#fff'
  if (e.target.value===letter){
    e.target.parentElement.style.backgroundColor = '#399e4d'
  }else{
    e.target.parentElement.style.backgroundColor = '#a93232'
  }
}

export default function LetterBox({letter}){

  return(
    <div className='LetterBox'>
      <input maxlength='1' required='true' className='LetterInput' onInput={e=>validateLetter(e, letter)}></input>
    </div>
  )
}