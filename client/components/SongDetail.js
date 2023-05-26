import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSong from '../../queries/fetchSong';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data;

        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Song Details</h3>
                <h5>{song && song.title}</h5>
                {song && <LyricList lyrics={song.lyrics} />}
                <LyricCreate songId={this.props.params.id} />
            </div>
        );
    }
}

// CURRIED FUNCTION OR HOC THAT CONNECTS OUR DEFINED query TO THE SongDetail COMPONENT AND TELLS query TO USE props.params.id FOR THE id QUERY VARIABLE
export default graphql(fetchSong, {
    options: (props) => {
        return { variables: { id: props.params.id } };
    }
})(SongDetail);
