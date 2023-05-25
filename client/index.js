import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import SongList from './components/SongList';

const client = new ApolloClient({}); // STORES ALL THE DATA OBTAINED BY GRAPHQL

const Root = () => {
    return (
        // ApolloProvider ALLOWS APP TO USE THE APOLLO STORE (client)
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={SongList} />
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
