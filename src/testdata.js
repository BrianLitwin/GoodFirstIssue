
export const data = getStaticData()

function makeRepo(name, issues, stars, lastUpdate, url) {
  return { name, issues, stars, lastUpdate, url }
}

function getStaticData() {
  const data = getIssues(testData)
  const repositories = new Map();
  formatIssues(data, repositories)
  const repos = []
  repositories.forEach((repo) => {
    repos.push(makeRepo(
      repo.title, repo.issueCount, repo.stars, repo.lastUpdate, repo.link
    ))
  })
  return repos
}

function getIssues(data) {
  const issues = data.data.search.edges.map(edge=>{ return edge.node  });
  const pageInfo = data.data.search.pageInfo;
  return { issues, pageInfo }
}

function makeRepoObject(issue) {
  const repo = issue.repository
  const title = repo.owne.login + "/" + repo.name
  const stars = repo.stargazers.totalCount
  const lastUpdate = repo.repo.updatedAt
  const link = repo.url
  const issueCount = 1
  return { title, stars, lastUpdate, link, issueCount,
    incrementIssueCount: function() {
      this.issueCount++
    }
  }
}

function formatIssues(issues, repositories) {
  issues.forEach((issue) => {
    const repo = issue.repository
    if (repositories[repo] === undefined) {
      repositories[repo] = makeRepoObject(issue)
    } else {
      repositories[repo].incrementIssueCount()
    }
  })
}

const testData = {
  "data": {
    "search": {
      "edges": [
        {
          "node": {
            "repository": {
              "owner": {
                "login": "effective-spa"
              },
              "updatedAt": "2019-01-20T07:17:15Z",
              "url": "https://github.com/effective-spa/server_component_rails",
              "name": "server_component_rails",
              "stargazers": {
                "totalCount": 4
              }
            },
            "url": "https://github.com/effective-spa/server_component_rails/issues/1",
            "createdAt": "2019-01-23T00:32:23Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "effective-spa"
              },
              "updatedAt": "2019-01-19T03:41:11Z",
              "url": "https://github.com/effective-spa/jsrb",
              "name": "jsrb",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/effective-spa/jsrb/issues/1",
            "createdAt": "2019-01-23T00:25:07Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "OregonDigital"
              },
              "updatedAt": "2019-01-22T18:39:01Z",
              "url": "https://github.com/OregonDigital/hyrax-migrator",
              "name": "hyrax-migrator",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/OregonDigital/hyrax-migrator/issues/34",
            "createdAt": "2019-01-22T18:29:01Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "imas"
              },
              "updatedAt": "2019-01-15T10:51:01Z",
              "url": "https://github.com/imas/mastodon",
              "name": "mastodon",
              "stargazers": {
                "totalCount": 39
              }
            },
            "url": "https://github.com/imas/mastodon/issues/213",
            "createdAt": "2019-01-22T14:06:49Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4691",
            "createdAt": "2019-01-22T13:17:58Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4690",
            "createdAt": "2019-01-22T12:36:18Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4689",
            "createdAt": "2019-01-22T12:13:20Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "vinistock"
              },
              "updatedAt": "2019-01-22T23:33:01Z",
              "url": "https://github.com/vinistock/sail",
              "name": "sail",
              "stargazers": {
                "totalCount": 176
              }
            },
            "url": "https://github.com/vinistock/sail/issues/60",
            "createdAt": "2019-01-21T18:45:10Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "TheKevJames"
              },
              "updatedAt": "2019-01-20T02:43:04Z",
              "url": "https://github.com/TheKevJames/puppet-homebrew",
              "name": "puppet-homebrew",
              "stargazers": {
                "totalCount": 7
              }
            },
            "url": "https://github.com/TheKevJames/puppet-homebrew/issues/113",
            "createdAt": "2019-01-20T02:33:34Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "TheKevJames"
              },
              "updatedAt": "2019-01-20T02:43:04Z",
              "url": "https://github.com/TheKevJames/puppet-homebrew",
              "name": "puppet-homebrew",
              "stargazers": {
                "totalCount": 7
              }
            },
            "url": "https://github.com/TheKevJames/puppet-homebrew/issues/112",
            "createdAt": "2019-01-20T02:33:04Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4670",
            "createdAt": "2019-01-19T13:31:41Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "jesjos"
              },
              "updatedAt": "2019-01-19T14:13:37Z",
              "url": "https://github.com/jesjos/active_record_upsert",
              "name": "active_record_upsert",
              "stargazers": {
                "totalCount": 147
              }
            },
            "url": "https://github.com/jesjos/active_record_upsert/issues/91",
            "createdAt": "2019-01-19T12:57:05Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4661",
            "createdAt": "2019-01-19T05:28:32Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "AgileVentures"
              },
              "updatedAt": "2019-01-22T09:45:23Z",
              "url": "https://github.com/AgileVentures/WebsiteOne",
              "name": "WebsiteOne",
              "stargazers": {
                "totalCount": 117
              }
            },
            "url": "https://github.com/AgileVentures/WebsiteOne/issues/3009",
            "createdAt": "2019-01-18T14:52:49Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "portage-brew"
              },
              "updatedAt": "2019-01-20T00:47:56Z",
              "url": "https://github.com/portage-brew/brew",
              "name": "brew",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/portage-brew/brew/issues/4",
            "createdAt": "2019-01-18T03:23:00Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "portage-brew"
              },
              "updatedAt": "2019-01-20T00:47:56Z",
              "url": "https://github.com/portage-brew/brew",
              "name": "brew",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/portage-brew/brew/issues/3",
            "createdAt": "2019-01-18T03:17:03Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "portage-brew"
              },
              "updatedAt": "2019-01-20T00:47:56Z",
              "url": "https://github.com/portage-brew/brew",
              "name": "brew",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/portage-brew/brew/issues/2",
            "createdAt": "2019-01-18T03:05:31Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "portage-brew"
              },
              "updatedAt": "2019-01-20T00:47:56Z",
              "url": "https://github.com/portage-brew/brew",
              "name": "brew",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/portage-brew/brew/issues/1",
            "createdAt": "2019-01-18T02:55:17Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "mikker"
              },
              "updatedAt": "2019-01-17T20:22:14Z",
              "url": "https://github.com/mikker/passwordless",
              "name": "passwordless",
              "stargazers": {
                "totalCount": 293
              }
            },
            "url": "https://github.com/mikker/passwordless/issues/36",
            "createdAt": "2019-01-17T19:23:37Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4646",
            "createdAt": "2019-01-17T18:37:06Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "CocoaPods"
              },
              "updatedAt": "2019-01-22T23:31:13Z",
              "url": "https://github.com/CocoaPods/CocoaPods",
              "name": "CocoaPods",
              "stargazers": {
                "totalCount": 11234
              }
            },
            "url": "https://github.com/CocoaPods/CocoaPods/issues/8426",
            "createdAt": "2019-01-17T18:37:05Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4645",
            "createdAt": "2019-01-17T18:10:40Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "jsmestad"
              },
              "updatedAt": "2019-01-21T18:05:05Z",
              "url": "https://github.com/jsmestad/jsonapi-consumer",
              "name": "jsonapi-consumer",
              "stargazers": {
                "totalCount": 90
              }
            },
            "url": "https://github.com/jsmestad/jsonapi-consumer/issues/27",
            "createdAt": "2019-01-17T13:06:37Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "citation-style-language"
              },
              "updatedAt": "2019-01-22T23:31:09Z",
              "url": "https://github.com/citation-style-language/styles",
              "name": "styles",
              "stargazers": {
                "totalCount": 1429
              }
            },
            "url": "https://github.com/citation-style-language/styles/issues/3881",
            "createdAt": "2019-01-17T12:49:52Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4639",
            "createdAt": "2019-01-17T06:50:44Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "dry-rb"
              },
              "updatedAt": "2019-01-21T11:12:48Z",
              "url": "https://github.com/dry-rb/dry-view",
              "name": "dry-view",
              "stargazers": {
                "totalCount": 60
              }
            },
            "url": "https://github.com/dry-rb/dry-view/issues/114",
            "createdAt": "2019-01-16T22:17:52Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "ESDPgroup3"
              },
              "updatedAt": "2019-01-17T14:14:13Z",
              "url": "https://github.com/ESDPgroup3/tengri_social",
              "name": "tengri_social",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/ESDPgroup3/tengri_social/issues/40",
            "createdAt": "2019-01-16T04:28:07Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "CaravanTransit"
              },
              "updatedAt": "2019-01-22T22:04:25Z",
              "url": "https://github.com/CaravanTransit/Transit-Talk",
              "name": "Transit-Talk",
              "stargazers": {
                "totalCount": 14
              }
            },
            "url": "https://github.com/CaravanTransit/Transit-Talk/issues/120",
            "createdAt": "2019-01-15T23:03:50Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "BindaCMS"
              },
              "updatedAt": "2019-01-21T10:37:35Z",
              "url": "https://github.com/BindaCMS/binda",
              "name": "binda",
              "stargazers": {
                "totalCount": 16
              }
            },
            "url": "https://github.com/BindaCMS/binda/issues/222",
            "createdAt": "2019-01-15T17:06:20Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "Homebrew"
              },
              "updatedAt": "2019-01-23T00:14:53Z",
              "url": "https://github.com/Homebrew/brew",
              "name": "brew",
              "stargazers": {
                "totalCount": 15905
              }
            },
            "url": "https://github.com/Homebrew/brew/issues/5540",
            "createdAt": "2019-01-15T15:51:35Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4624",
            "createdAt": "2019-01-15T15:05:58Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "CocoaPods"
              },
              "updatedAt": "2019-01-22T23:31:13Z",
              "url": "https://github.com/CocoaPods/CocoaPods",
              "name": "CocoaPods",
              "stargazers": {
                "totalCount": 11234
              }
            },
            "url": "https://github.com/CocoaPods/CocoaPods/issues/8422",
            "createdAt": "2019-01-15T12:54:37Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "CocoaPods"
              },
              "updatedAt": "2019-01-22T23:31:13Z",
              "url": "https://github.com/CocoaPods/CocoaPods",
              "name": "CocoaPods",
              "stargazers": {
                "totalCount": 11234
              }
            },
            "url": "https://github.com/CocoaPods/CocoaPods/issues/8421",
            "createdAt": "2019-01-14T21:57:52Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4617",
            "createdAt": "2019-01-14T19:29:32Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4616",
            "createdAt": "2019-01-14T16:10:48Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "dm-drogeriemarkt"
              },
              "updatedAt": "2019-01-21T15:00:59Z",
              "url": "https://github.com/dm-drogeriemarkt/foreman_wreckingball",
              "name": "foreman_wreckingball",
              "stargazers": {
                "totalCount": 5
              }
            },
            "url": "https://github.com/dm-drogeriemarkt/foreman_wreckingball/issues/77",
            "createdAt": "2019-01-14T15:46:57Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "CocoaPods"
              },
              "updatedAt": "2019-01-22T23:31:13Z",
              "url": "https://github.com/CocoaPods/CocoaPods",
              "name": "CocoaPods",
              "stargazers": {
                "totalCount": 11234
              }
            },
            "url": "https://github.com/CocoaPods/CocoaPods/issues/8420",
            "createdAt": "2019-01-14T14:47:19Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "pschfr"
              },
              "updatedAt": "2019-01-21T02:03:25Z",
              "url": "https://github.com/pschfr/watching",
              "name": "watching",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/pschfr/watching/issues/8",
            "createdAt": "2019-01-13T20:03:00Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/10",
            "createdAt": "2019-01-13T19:48:45Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/9",
            "createdAt": "2019-01-13T19:43:12Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/8",
            "createdAt": "2019-01-13T16:22:28Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/7",
            "createdAt": "2019-01-13T16:22:24Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/6",
            "createdAt": "2019-01-13T16:20:42Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/5",
            "createdAt": "2019-01-13T16:14:58Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/4",
            "createdAt": "2019-01-13T16:09:02Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/3",
            "createdAt": "2019-01-13T16:08:45Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/2",
            "createdAt": "2019-01-13T16:02:17Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "symbiod"
              },
              "updatedAt": "2019-01-13T19:53:12Z",
              "url": "https://github.com/symbiod/localizator",
              "name": "localizator",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/symbiod/localizator/issues/1",
            "createdAt": "2019-01-13T15:59:05Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "irobayna"
              },
              "updatedAt": "2019-01-22T11:09:02Z",
              "url": "https://github.com/irobayna/stupidedi",
              "name": "stupidedi",
              "stargazers": {
                "totalCount": 147
              }
            },
            "url": "https://github.com/irobayna/stupidedi/issues/170",
            "createdAt": "2019-01-13T08:44:06Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "github"
              },
              "updatedAt": "2019-01-22T23:31:31Z",
              "url": "https://github.com/github/choosealicense.com",
              "name": "choosealicense.com",
              "stargazers": {
                "totalCount": 1450
              }
            },
            "url": "https://github.com/github/choosealicense.com/issues/636",
            "createdAt": "2019-01-13T01:06:23Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "geekq"
              },
              "updatedAt": "2019-01-21T12:03:13Z",
              "url": "https://github.com/geekq/workflow",
              "name": "workflow",
              "stargazers": {
                "totalCount": 1489
              }
            },
            "url": "https://github.com/geekq/workflow/issues/211",
            "createdAt": "2019-01-12T18:03:12Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "dm-drogeriemarkt"
              },
              "updatedAt": "2019-01-21T11:24:17Z",
              "url": "https://github.com/dm-drogeriemarkt/foreman_vault",
              "name": "foreman_vault",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/dm-drogeriemarkt/foreman_vault/issues/16",
            "createdAt": "2019-01-12T10:28:44Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4603",
            "createdAt": "2019-01-12T01:57:53Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "CocoaPods"
              },
              "updatedAt": "2019-01-22T23:31:13Z",
              "url": "https://github.com/CocoaPods/CocoaPods",
              "name": "CocoaPods",
              "stargazers": {
                "totalCount": 11234
              }
            },
            "url": "https://github.com/CocoaPods/CocoaPods/issues/8413",
            "createdAt": "2019-01-11T22:59:10Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4601",
            "createdAt": "2019-01-11T20:33:58Z"
          }
        },
        {
          "node": {}
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "anmoel"
              },
              "updatedAt": "2019-01-16T16:25:08Z",
              "url": "https://github.com/anmoel/ansible-role-kubernetes",
              "name": "ansible-role-kubernetes",
              "stargazers": {
                "totalCount": 5
              }
            },
            "url": "https://github.com/anmoel/ansible-role-kubernetes/issues/27",
            "createdAt": "2019-01-10T21:58:22Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4594",
            "createdAt": "2019-01-10T20:23:46Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4592",
            "createdAt": "2019-01-10T20:06:30Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "abhishalya"
              },
              "updatedAt": "2019-01-21T12:17:12Z",
              "url": "https://github.com/abhishalya/abhishalya.github.io",
              "name": "abhishalya.github.io",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/abhishalya/abhishalya.github.io/issues/2",
            "createdAt": "2019-01-10T16:30:15Z"
          }
        },
        {
          "node": {}
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "CocoaPods"
              },
              "updatedAt": "2019-01-22T23:31:13Z",
              "url": "https://github.com/CocoaPods/CocoaPods",
              "name": "CocoaPods",
              "stargazers": {
                "totalCount": 11234
              }
            },
            "url": "https://github.com/CocoaPods/CocoaPods/issues/8403",
            "createdAt": "2019-01-10T07:57:44Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "benbalter"
              },
              "updatedAt": "2019-01-22T23:31:45Z",
              "url": "https://github.com/benbalter/licensee",
              "name": "licensee",
              "stargazers": {
                "totalCount": 285
              }
            },
            "url": "https://github.com/benbalter/licensee/issues/351",
            "createdAt": "2019-01-10T00:36:23Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "TUM-FAF"
              },
              "updatedAt": "2019-01-09T20:52:05Z",
              "url": "https://github.com/TUM-FAF/PAD-151-Proxy-Server",
              "name": "PAD-151-Proxy-Server",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/TUM-FAF/PAD-151-Proxy-Server/issues/25",
            "createdAt": "2019-01-09T20:42:05Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "Anoteros"
              },
              "updatedAt": "2019-01-09T19:49:14Z",
              "url": "https://github.com/Anoteros/castles-and-creatures-game",
              "name": "castles-and-creatures-game",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/Anoteros/castles-and-creatures-game/issues/3",
            "createdAt": "2019-01-09T17:39:31Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "github"
              },
              "updatedAt": "2019-01-22T03:04:51Z",
              "url": "https://github.com/github/licensed",
              "name": "licensed",
              "stargazers": {
                "totalCount": 417
              }
            },
            "url": "https://github.com/github/licensed/issues/122",
            "createdAt": "2019-01-09T13:21:46Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4581",
            "createdAt": "2019-01-09T11:34:27Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "arsley"
              },
              "updatedAt": "2019-01-16T13:49:51Z",
              "url": "https://github.com/arsley/Ordering-system",
              "name": "Ordering-system",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/arsley/Ordering-system/issues/43",
            "createdAt": "2019-01-09T07:04:36Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "k1LoW"
              },
              "updatedAt": "2019-01-18T21:35:52Z",
              "url": "https://github.com/k1LoW/awspec",
              "name": "awspec",
              "stargazers": {
                "totalCount": 793
              }
            },
            "url": "https://github.com/k1LoW/awspec/issues/436",
            "createdAt": "2019-01-08T17:53:26Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "voc"
              },
              "updatedAt": "2019-01-14T22:58:27Z",
              "url": "https://github.com/voc/voctoweb",
              "name": "voctoweb",
              "stargazers": {
                "totalCount": 97
              }
            },
            "url": "https://github.com/voc/voctoweb/issues/369",
            "createdAt": "2019-01-08T15:38:14Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "dry-rb"
              },
              "updatedAt": "2019-01-14T22:02:14Z",
              "url": "https://github.com/dry-rb/dry-configurable",
              "name": "dry-configurable",
              "stargazers": {
                "totalCount": 190
              }
            },
            "url": "https://github.com/dry-rb/dry-configurable/issues/57",
            "createdAt": "2019-01-08T10:35:13Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "coingecko"
              },
              "updatedAt": "2019-01-22T23:32:50Z",
              "url": "https://github.com/coingecko/cryptoexchange",
              "name": "cryptoexchange",
              "stargazers": {
                "totalCount": 210
              }
            },
            "url": "https://github.com/coingecko/cryptoexchange/issues/1263",
            "createdAt": "2019-01-08T07:20:36Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "TheOdinProject"
              },
              "updatedAt": "2019-01-20T17:19:05Z",
              "url": "https://github.com/TheOdinProject/theodinproject",
              "name": "theodinproject",
              "stargazers": {
                "totalCount": 713
              }
            },
            "url": "https://github.com/TheOdinProject/theodinproject/issues/960",
            "createdAt": "2019-01-07T23:59:30Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "comfy"
              },
              "updatedAt": "2019-01-22T23:31:08Z",
              "url": "https://github.com/comfy/comfortable-mexican-sofa",
              "name": "comfortable-mexican-sofa",
              "stargazers": {
                "totalCount": 2493
              }
            },
            "url": "https://github.com/comfy/comfortable-mexican-sofa/issues/865",
            "createdAt": "2019-01-07T22:30:08Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4562",
            "createdAt": "2019-01-07T21:52:18Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4557",
            "createdAt": "2019-01-07T19:54:30Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "mrkn"
              },
              "updatedAt": "2019-01-20T14:46:09Z",
              "url": "https://github.com/mrkn/enumerable-statistics",
              "name": "enumerable-statistics",
              "stargazers": {
                "totalCount": 30
              }
            },
            "url": "https://github.com/mrkn/enumerable-statistics/issues/7",
            "createdAt": "2019-01-07T15:25:56Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "mrkn"
              },
              "updatedAt": "2019-01-20T14:46:09Z",
              "url": "https://github.com/mrkn/enumerable-statistics",
              "name": "enumerable-statistics",
              "stargazers": {
                "totalCount": 30
              }
            },
            "url": "https://github.com/mrkn/enumerable-statistics/issues/5",
            "createdAt": "2019-01-07T14:58:25Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "coingecko"
              },
              "updatedAt": "2019-01-22T23:32:50Z",
              "url": "https://github.com/coingecko/cryptoexchange",
              "name": "cryptoexchange",
              "stargazers": {
                "totalCount": 210
              }
            },
            "url": "https://github.com/coingecko/cryptoexchange/issues/1261",
            "createdAt": "2019-01-07T07:56:43Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "CocoaPods"
              },
              "updatedAt": "2019-01-22T23:31:13Z",
              "url": "https://github.com/CocoaPods/CocoaPods",
              "name": "CocoaPods",
              "stargazers": {
                "totalCount": 11234
              }
            },
            "url": "https://github.com/CocoaPods/CocoaPods/issues/8391",
            "createdAt": "2019-01-07T03:27:11Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "Abdulwahaab710"
              },
              "updatedAt": "2019-01-21T00:56:13Z",
              "url": "https://github.com/Abdulwahaab710/vein",
              "name": "vein",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/Abdulwahaab710/vein/issues/34",
            "createdAt": "2019-01-07T01:06:59Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "Conky-for-macOS"
              },
              "updatedAt": "2019-01-10T00:51:00Z",
              "url": "https://github.com/Conky-for-macOS/homebrew-formulae",
              "name": "homebrew-formulae",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/Conky-for-macOS/homebrew-formulae/issues/2",
            "createdAt": "2019-01-06T23:57:28Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "Conky-for-macOS"
              },
              "updatedAt": "2019-01-10T00:51:00Z",
              "url": "https://github.com/Conky-for-macOS/homebrew-formulae",
              "name": "homebrew-formulae",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/Conky-for-macOS/homebrew-formulae/issues/1",
            "createdAt": "2019-01-06T22:36:04Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "voc"
              },
              "updatedAt": "2019-01-14T22:58:27Z",
              "url": "https://github.com/voc/voctoweb",
              "name": "voctoweb",
              "stargazers": {
                "totalCount": 97
              }
            },
            "url": "https://github.com/voc/voctoweb/issues/367",
            "createdAt": "2019-01-06T15:37:10Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "24pullrequests"
              },
              "updatedAt": "2019-01-22T23:31:23Z",
              "url": "https://github.com/24pullrequests/24pullrequests",
              "name": "24pullrequests",
              "stargazers": {
                "totalCount": 1210
              }
            },
            "url": "https://github.com/24pullrequests/24pullrequests/issues/2469",
            "createdAt": "2019-01-06T15:27:32Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4543",
            "createdAt": "2019-01-06T01:59:59Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4524",
            "createdAt": "2019-01-05T00:45:06Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4522",
            "createdAt": "2019-01-04T22:15:20Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "osulp"
              },
              "updatedAt": "2019-01-15T11:15:01Z",
              "url": "https://github.com/osulp/kiosks",
              "name": "kiosks",
              "stargazers": {
                "totalCount": 5
              }
            },
            "url": "https://github.com/osulp/kiosks/issues/256",
            "createdAt": "2019-01-04T21:46:42Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "gollum"
              },
              "updatedAt": "2019-01-22T23:31:05Z",
              "url": "https://github.com/gollum/gollum",
              "name": "gollum",
              "stargazers": {
                "totalCount": 9708
              }
            },
            "url": "https://github.com/gollum/gollum/issues/1365",
            "createdAt": "2019-01-04T17:46:30Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "shibadog1121"
              },
              "updatedAt": "2019-01-04T14:48:28Z",
              "url": "https://github.com/shibadog1121/employee-profile",
              "name": "employee-profile",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/shibadog1121/employee-profile/issues/29",
            "createdAt": "2019-01-04T14:38:28Z"
          }
        },
        {
          "node": {}
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "ieyei"
              },
              "updatedAt": "2019-01-04T07:08:10Z",
              "url": "https://github.com/ieyei/ieyei.github.io",
              "name": "ieyei.github.io",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/ieyei/ieyei.github.io/issues/5",
            "createdAt": "2019-01-04T06:48:52Z"
          }
        },
        {
          "node": {}
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4512",
            "createdAt": "2019-01-03T18:55:43Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "Decathlon"
              },
              "updatedAt": "2019-01-04T16:59:28Z",
              "url": "https://github.com/Decathlon/sports-api-wrapper",
              "name": "sports-api-wrapper",
              "stargazers": {
                "totalCount": 1
              }
            },
            "url": "https://github.com/Decathlon/sports-api-wrapper/issues/1",
            "createdAt": "2019-01-03T17:22:42Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "planningalerts-scrapers"
              },
              "updatedAt": "2019-01-03T00:44:20Z",
              "url": "https://github.com/planningalerts-scrapers/launceston",
              "name": "launceston",
              "stargazers": {
                "totalCount": 0
              }
            },
            "url": "https://github.com/planningalerts-scrapers/launceston/issues/1",
            "createdAt": "2019-01-03T00:34:19Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "Code4HR"
              },
              "updatedAt": "2018-12-17T22:26:46Z",
              "url": "https://github.com/Code4HR/adopt-a-drain",
              "name": "adopt-a-drain",
              "stargazers": {
                "totalCount": 6
              }
            },
            "url": "https://github.com/Code4HR/adopt-a-drain/issues/75",
            "createdAt": "2019-01-02T22:13:35Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "publiclab"
              },
              "updatedAt": "2019-01-22T23:31:30Z",
              "url": "https://github.com/publiclab/plots2",
              "name": "plots2",
              "stargazers": {
                "totalCount": 361
              }
            },
            "url": "https://github.com/publiclab/plots2/issues/4502",
            "createdAt": "2019-01-02T18:21:40Z"
          }
        },
        {
          "node": {
            "repository": {
              "owner": {
                "login": "schurig"
              },
              "updatedAt": "2019-01-21T21:19:11Z",
              "url": "https://github.com/schurig/ynab-bank-importer",
              "name": "ynab-bank-importer",
              "stargazers": {
                "totalCount": 64
              }
            },
            "url": "https://github.com/schurig/ynab-bank-importer/issues/39",
            "createdAt": "2019-01-02T17:55:42Z"
          }
        }
      ],
      "pageInfo": {
        "endCursor": "Y3Vyc29yOjEwMA==",
        "hasNextPage": true
      }
    }
  }
}
