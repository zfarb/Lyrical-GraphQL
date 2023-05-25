import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
    renderSongs() {
        const { songs } = this.props.data;

        return songs.map((song) => {
            return (
                <li key={song.id} className="collection-item">
                    {song.title}
                </li>
            );
        });
    }

    render() {
        const { loading } = this.props.data;

        if (loading) {
            return <div>Songs</div>;
        }

        return (
            <div>
                <ul className="collection">{this.renderSongs()}</ul>
                <Link
                    to="/song/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        );
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

// CURRIED FUNCTION OR HOC THAT CONNECTS OUR DEFINED query TO THE SongList COMPONENT
export default graphql(query)(SongList);
