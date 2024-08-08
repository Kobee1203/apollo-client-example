import { useQuery } from '@vue/apollo-composable'
import type { BooksQuery, BooksQueryVariables } from '@/gql/graphql'
import BooksDocument from '@/graphql/documents/books.query.graphql'

export const useBooksQuery = () => {
  const { result, loading, error } = useQuery<BooksQuery, BooksQueryVariables>(BooksDocument)

  return { result, loading, error }
}
