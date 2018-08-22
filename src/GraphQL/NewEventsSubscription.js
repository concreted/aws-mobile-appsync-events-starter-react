import gql from 'graphql-tag';

export default gql(`
subscription {
    addedEvent {
        id
        name
        where
        when
        description
        comments {
            items {
                commentId
            }
        }
    }
}`);
