// "query": "label:\"help wanted\" language:Ruby state:open"

export function formatVariables(language, label, endCursor, updated) {
  return {
    query: `label:\"${label}\" language:${language} updated:>${updated} state:open `,
    after: endCursor
  };
}

export function fetchQuery(language, label, updated, endCursor, onCompletion) {
  const token = "3d1937628560b5d023c8a239fd0fa8245bfdd553";
  //https://graphql.org/graphql-js/graphql-clients/
  const variables = formatVariables(language, label, endCursor, updated);

  const body = JSON.stringify({
    query: searchIssuesQuery(),
    variables: variables
  });

  fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer" + " " + token
    },
    body: body
  })
    .then(r => r.json())
    .then(data => {
      console.log(data);
      onCompletion(data);
    });
}

function searchIssuesQuery() {
  return `
query SearchIssues($query:String!, $after: String) {
  search(query:$query, type:ISSUE, first: 100, after: $after) {
    edges {
    	node {
        ... on Issue {
         repository {
	          owner {
		            login
	             },
	              updatedAt,
	              url,
	              updatedAt,
                name,
                description,
	              stargazers {
		            totalCount
         	    },
           },
          url,
	        updatedAt,
          title,
          number,
	        labels(first:100) {
            edges {
              node {
                color,
                name
              }
            }
          }
        }
      }
    }

    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`;
}
