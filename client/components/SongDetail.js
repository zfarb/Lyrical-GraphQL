import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongDetail extends Component {
    render() {
        return (
            <div>
                <h3>Song Details</h3>
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

// CURRIED FUNCTION OR HOC THAT CONNECTS OUR DEFINED query TO THE SongDetail COMPONENT
export default graphql(query)(SongDetail);
