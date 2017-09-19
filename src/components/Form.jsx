import React from 'react'

export default ({ placeholder, onSubmit, onInput, value }) => {
  return (
    <form action="" className="Form" onSubmit={ onSubmit }>
      <input className="Form__field" type="text" placeholder={ placeholder } value={ value } onInput={ onInput } />
      <button tupe="button" className="Form__submit">→</button>
    </form>
  )
}