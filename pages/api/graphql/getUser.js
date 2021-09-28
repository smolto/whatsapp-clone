import { gql } from '@apollo/client'
import client from '../../../apollo/ApolloClient'

export default async (req, res) => {
  const email = req.body.email

  try {
    const { data } = await client.query({
      query: gql`
        query MyQuery {
          getUser(email: "${email}") {
            email
            name
            picture
            chats {
              id
              users {
                email
              }
            }
          }
        }
      `
    })

    if (data.getUser === null) {
      res.status(400).send({
        data: { getUser: null }
      })
    } else {
      res.status(200).send({ data })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}
