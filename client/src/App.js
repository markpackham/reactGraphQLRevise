import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:6969/graphql"})
])

const errorLink = onError(({graphqlErrors, networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache,
  link: 
});

function App() {
  return <div>This works</div>;
}

export default App;
