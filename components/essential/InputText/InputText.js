export const InputText = ({ text, inputTextCSS, action, type, label, placeholder }) => {
  return (
    <>
      <span>{label}</span>
      <input type={type} className={inputTextCSS} value={text} onChange={action} placeholder={placeholder} />
    </>
  )
}
