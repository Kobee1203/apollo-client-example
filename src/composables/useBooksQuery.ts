import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import type { BooksQuery, BooksQueryVariables } from '@/gql/graphql'

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
            publicationDate
          }
        }
        publicationDate
      }
    }
  `

  const { result, loading, error } = useQuery<BooksQuery, BooksQueryVariables>(query)

  return { result, loading, error }
}
