export const Form = ({ action, children }) => {
  return (
    <form onSubmit={action}>
      { children }
    </form>
  )
}
