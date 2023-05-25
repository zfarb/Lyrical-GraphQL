import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongs from '../../queries/fetchSongs';
import gql from 'graphql-tag';

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

// const mutation = gql`
//     mutation DeleteSong($id: ID) {
//         deleteSong(id: $id) {}
//     }
// `;

// CURRIED FUNCTION OR HOC THAT CONNECTS OUR DEFINED fetchSongs TO THE SongList COMPONENT
export default graphql(fetchSongs)(SongList);
