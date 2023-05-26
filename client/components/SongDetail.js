import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data;

        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Song Details</h3>
                <h5>{song && song.title}</h5>
                <LyricCreate songId={this.props.params.id} />
            </div>
        );
    }
}

// DEFINE A QUERY THAT RETURNS DATA FOR A SONG WITH GIVEN ID
const query = gql`
    query Song($id: ID!) {
        song(id: $id) {
            title
        }
    }
`;

// CURRIED FUNCTION OR HOC THAT CONNECTS OUR DEFINED query TO THE SongDetail COMPONENT AND TELLS query TO USE props.params.id FOR THE id QUERY VARIABLE
export default graphql(query, {
    options: (props) => {
        return { variables: { id: props.params.id } };
    }
})(SongDetail);
