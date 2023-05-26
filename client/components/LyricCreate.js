import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
    }

    onSubmit(event) {
        event.preventDefault();

        const { mutate } = this.props;

        mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Add a Lyric</label>
                    <input
                        type="text"
                        value={this.state.content}
                        onChange={(event) =>
                            this.setState({ content: event.target.value })
                        }
                    />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $content, songId: $songId) {
            lyrics {
                content
            }
        }
    }
`;

export default graphql(mutation)(LyricCreate);
