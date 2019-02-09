// "query": "label:\"help wanted\" language:Ruby state:open"

export function formatVariables(language, label, endCursor) {
  return {
		query: `label:\"${label}\" language:${language} state:open`,
    after: endCursor
	}
}

export function fetchQuery(language, label, endCursor, onCompletion)  {
	const token = '3d1937628560b5d023c8a239fd0fa8245bfdd553';
	//https://graphql.org/graphql-js/graphql-clients/
  const variables = formatVariables(language, label, endCursor)

  const body = JSON.stringify({
                query: searchIssuesQuery(),
                variables: variables,
	})

	fetch('https://api.github.com/graphql', {
        	method: 'POST',
        	headers: {
                	'Content-Type': 'application/json',
                	'Accept': 'application/json',
                	'Authorization': 'Bearer' + ' ' + token,
        	},
        	body: body

	}).then(r => r.json()).then(data => {
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
	              stargazers {
		            totalCount
         	    },
           },
          url,
	        createdAt,
          title,
          number
        }
      }
    }

    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`
}
