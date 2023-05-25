import gql from 'graphql-tag';

// DEFINE QUERY THAT RETURNS LIST OF SONGS WITH ONLY THEIR TITLE
export default gql`
    {
        songs {
            id
            title
        }
    }
`;
