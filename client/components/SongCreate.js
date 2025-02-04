import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import fetchSongs from '../../queries/fetchSongs';

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { title: '' };
    }

    onSubmit(event) {
        event.preventDefault();

        const { mutate } = this.props;

        // TELL GRAPHQL TO USE this.state.title FOR THE title QUERY VARIABLE, REFETCH THE songs QUERY AND THEN NAVIGATE TO THE ROOT ROUTE ('/') AFTER COMPLETION
        mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{ query: fetchSongs }]
        }).then(() => hashHistory.push('/'));
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title: </label>
                    <input
                        type="text"
                        onChange={(event) =>
                            this.setState({ title: event.target.value })
                        }
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}

// DEFINE MUTATION THAT ADDS A SONG
const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

// CURRIED FUNCTION OR HOC THAT CONNECTS OUR DEFINED mutation TO THE SongCreate COMPONENT
export default graphql(mutation)(SongCreate);
