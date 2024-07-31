import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const useBooksQuery = () => {
  const query = gql`
    query Books {
      books {
        id
        title
        author {
          id
          name
          dateOfBirth
          books {
            id
            title
          }
        }
      }
    }
  `

  const { result, loading, error } = useQuery(query)

  return { result, loading, error }
}
