import { useSubscription, gql } from '@apollo/client'

const GET_TODOS = gql`
  subscription {
    getChat(id: "0x25892b1be") {
      messages {
        message
        date
        id
        user {
          email
        }
      }
    }
  }
`

const TodoList = () => {
  const { loading, error, data } = useSubscription(GET_TODOS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <>
      {data.getChat.messages.map(({ date, message, user }, index) => (
        <div key={index}>
          <div>
            <h2>{message}</h2>
            <h5>{user.email}</h5>
            <h6>{date}</h6>
          </div>
        </div>
      ))}
    </>
  )
}

export default TodoList
