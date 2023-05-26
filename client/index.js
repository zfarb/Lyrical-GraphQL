import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

// STORES ALL THE DATA OBTAINED BY GRAPHQL AND TELLS APOLLO TO USE CACHING WITH dataIdFromObject. ALL QUERIES AND MUTATION MUST RETURN ID TO BE CHECKED
const client = new ApolloClient({
    dataIdFromObject: (o) => o.id
});

const Root = () => {
    return (
        // ApolloProvider ALLOWS APP TO USE THE APOLLO STORE (client)
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={SongList} />
                    <Route path="/song/new" component={SongCreate} />
                    <Route path="/song/:id" component={SongDetail} />
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
