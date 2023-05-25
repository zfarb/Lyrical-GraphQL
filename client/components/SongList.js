import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongs from '../../queries/fetchSongs';
import gql from 'graphql-tag';

class SongList extends Component {
    onSongDelete(id) {
        const { mutate } = this.props;

        // TELL GRAPHQL TO USE id WHCIH IN THIS CASE IS THE SONG ID FOR THE id QUERY VARIABLE AND REFETCH THE songs QUERY
        mutate({
            variables: { id },
            refetchQueries: [{ query: fetchSongs }]
        });
    }

    renderSongs() {
        const { songs } = this.props.data;

        return songs.map(({ id, title }) => {
            return (
                <li key={id} className="collection-item">
                    {title}
                    <i
                        className="material-icons"
                        onClick={() => this.onSongDelete(id)}
                    >
                        delete
                    </i>
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

const mutation = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

// CURRIED FUNCTION OR HOC THAT CONNECTS OUR DEFINED mutation TO THE SECOND CURRIED FUNCTION OR HOC WHICH CONNECTS OUR DEFINED fetchSongs TO THE SongList COMPONENT
export default graphql(mutation)(graphql(fetchSongs)(SongList));
