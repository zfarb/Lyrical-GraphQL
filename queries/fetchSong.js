import gql from 'graphql-tag';

// DEFINE A QUERY THAT RETURNS DATA FOR A SONG WITH GIVEN ID
export default gql`
    query Song($id: ID!) {
        song(id: $id) {
            id
            title
            lyrics {
                id
                content
            }
        }
    }
`;
