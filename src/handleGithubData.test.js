import { handle } from './handleGithubData'

it('renders without crashing', () => {
  const data = getTestData()
  
  handle(data)
});


function getTestData() {
  return {
    "data": {
      "search": {
        "edges": [
          {
            "node": {
              "repository": {
                "owner": {
                  "login": "dm-drogeriemarkt"
                },
                "updatedAt": "2019-01-24T12:16:46Z",
                "url": "https://github.com/dm-drogeriemarkt/foreman_wreckingball",
                "name": "foreman_wreckingball",
                "stargazers": {
                  "totalCount": 5
                }
              },
              "url": "https://github.com/dm-drogeriemarkt/foreman_wreckingball/issues/82",
              "createdAt": "2019-01-24T10:42:30Z",
              "title": "improve UI for compute resource overview page",
              "number": 82
            }
          },
          {
            "node": {
              "repository": {
                "owner": {
                  "login": "mrkn"
                },
                "updatedAt": "2019-01-24T02:34:01Z",
                "url": "https://github.com/mrkn/iruby-rails",
                "name": "iruby-rails",
                "stargazers": {
                  "totalCount": 13
                }
              },
              "url": "https://github.com/mrkn/iruby-rails/issues/4",
              "createdAt": "2019-01-24T01:30:46Z",
              "title": "Add rake task like jupyter_on_rails gem",
              "number": 4
            }
          },
          {
            "node": {
              "repository": {
                "owner": {
                  "login": "outcomesinsights"
                },
                "updatedAt": "2019-01-23T19:47:44Z",
                "url": "https://github.com/outcomesinsights/conceptql",
                "name": "conceptql",
                "stargazers": {
                  "totalCount": 12
                }
              },
              "url": "https://github.com/outcomesinsights/conceptql/issues/208",
              "createdAt": "2019-01-23T19:37:42Z",
              "title": "person.year_of_birth is set to 2000 value is missing",
              "number": 208
            }
          },
          {
            "node": {
              "repository": {
                "owner": {
                  "login": "abonas"
                },
                "updatedAt": "2019-01-23T11:00:01Z",
                "url": "https://github.com/abonas/kubeclient",
                "name": "kubeclient",
                "stargazers": {
                  "totalCount": 214
                }
              },
              "url": "https://github.com/abonas/kubeclient/issues/389",
              "createdAt": "2019-01-23T10:49:21Z",
              "title": "HTTP requests to arbitrary path",
              "number": 389
            }
          }
        ],
        "pageInfo": {
          "endCursor": "Y3Vyc29yOjQ=",
          "hasNextPage": true
        }
      }
    }
  }
}
