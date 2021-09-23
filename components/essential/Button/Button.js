export const Button = ({ text, buttonCSS, action }) => {
  return (
    <button className={buttonCSS} onClick={action}>{text}</button>
  )
}
