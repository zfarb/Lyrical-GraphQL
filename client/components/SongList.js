import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
    renderSongs() {
        const { songs } = this.props.data;

        return songs.map((song) => {
            return <li key={song.id}>{song.title}</li>;
        });
    }

    render() {
        const { loading } = this.props.data;

        if (loading) {
            return <div>Songs</div>;
        }

        return <div>{this.renderSongs()}</div>;
    }
}

// DEFINE QUERY THAT RETURNS LIST OF SONGS WITH ONLY THEIR TITLE
const query = gql`
    {
        songs {
            id
            title
        }
    }
`;

export default graphql(query)(SongList); // CURRIED FUNCTION
