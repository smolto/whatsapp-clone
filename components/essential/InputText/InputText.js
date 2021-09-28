export const InputText = ({ text, inputTextCSS, action, type, label, placeholder, required }) => {
  return (
    <>
      <span>{label}</span>
      <input type={type} className={inputTextCSS} value={text} onChange={action} placeholder={placeholder} required={required} />
    </>
  )
}
