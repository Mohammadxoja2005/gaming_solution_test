import { Fragment } from 'react';
// styles
import styles from "./index.module.scss";
// components  
import LIST from './components/list';
// layouts
import SIDEBAR from '../../layouts/sidebar';
// apollo/client 
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const MAIN = () => { 

  const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/graphql", 
    cache: new InMemoryCache()
  })

  return (
    <Fragment>
      <ApolloProvider client={client}>
        <SIDEBAR />
        <LIST />
      </ApolloProvider>
    </Fragment>
  )
}

export default MAIN;