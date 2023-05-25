import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router';

class SongCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { title: '' };
    }

    onSubmit(event) {
        event.preventDefault();

        const { mutate } = this.props;

        // TELL GRAPHQL TO USE this.state.title FOR THE title QUERY VARIABLE
        mutate({
            variables: {
                title: this.state.title
            }
        });
    }

    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title: </label>
                    <input
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
