import { ApolloClient, HttpLink, InMemoryCache, gql } from 'apollo-boost';

const uri = 'http://localhost:3333/graph';

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache()
});

export async function loadTodos() {
  const query = gql`
    query {
      todos {
        _id
        title
        description
        completed
      }
    }
  `;
  return await client.query({ query });
}

export async function loadJob(id) {
  const query = gql`
    query QueryTodo($id: ID!) {
      todo(id: $id) {
        _id
        title
      }
    }
  `;
  const job = await client.query({ query, variables: { id } });
  console.log(job);
}
