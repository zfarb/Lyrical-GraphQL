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
    mutation AddLyric($content: String, $songId: ID) {
        addLyric(content: $content, songId: $songId) {
            lyrics {
                content
            }
        }
    }
`;

export default graphql(mutation)(LyricCreate);
