export const USER_FRAGMENT = `
    fragment userParts on User {
        id
        userName
        email
        firstName
        lastName
        bio
        posts {
            id
            caption
        }
    }
`;
