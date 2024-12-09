// Define API endpoint URL
export const API_ENDPOINT = 'https://graphql.anilist.co';

// Define user IDs to query
export const USER_IDS = {
    userId: 7056318  // Example User ID
};

// Define GraphQL query
export const QUERY_USER = gql(`
  MediaListCollection(type: ANIME, userId: $userId) {
    user {
      name
    } 
    lists {
      name
      entries {
        id
        media {
          id
          title {
            english
            romaji
            native
          }
          averageScore
          description
          coverImage {
            extraLarge
          }
          season
          seasonYear
          genres
        }
      }
    }
  }
`);

// Define config for API request
export const OPTIONS = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        // Define query and variables
        query: QUERY_USER,
        variables: USER_IDS
    })
};

// GraphQL Template Function
function gql(query) {
    return `
    query {
      ${query}
    }
  `;
}