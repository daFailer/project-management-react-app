const Input = ({ inputType = 'text', label }) => {
  return (
    <p>
      <label>{label}</label>
      {inputType === 'textarea' ? <textarea></textarea> : <input type={inputType} /> }
    </p>
  )
}

export default Input;