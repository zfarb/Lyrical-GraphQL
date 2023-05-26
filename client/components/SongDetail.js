import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongDetail extends Component {
    render() {
        const { song } = this.props.data;

        return (
            <div>
                <h3>Song Details</h3>
                <h5>{song && song.title}</h5>
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
