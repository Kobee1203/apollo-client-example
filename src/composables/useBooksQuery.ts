import { useQuery } from '@vue/apollo-composable'
import type { BooksQuery, BooksQueryVariables } from '@/gql/graphql'
import BooksDocument from '@/graphql/documents/books.query.graphql'

export const useBooksQuery = () => {
  const queryVariables: BooksQueryVariables = {
    offset: 0,
    limit: 5
  }
  const { result, loading, error, fetchMore } = useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, queryVariables)

  return { result, loading, error, fetchMore }
}
