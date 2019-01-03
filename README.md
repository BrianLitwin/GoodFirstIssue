# GoodFirstIssue-Dev

A wall-to-wall re-write of [goodfirstissue.com](http://goodfirstissue.com/) using React, plus some of the
tools that [sourcecred](https://github.com/sourcecred/sourcecred), with the ulterior motive of gaining
a better understanding of those tools.

## Goals

The purpose of the site is to provide a place where beginner and intermediate Open Source
developers can find a bunch of repositories with issues welcoming new contributions and contributors.

## Spec

The current strategy to find these repos is to query Github's GraphQL API for issues that include a given label,
such as "contributions welcome", and accumulate all those issues, constrained by a given cutoff date.

As far as I know Github's Graphql API doesn't return a list of issues that's perfectly sorted by date, so the exact
cutoff date can be inconsistent; but it is a priority to exclude repositories that aren't being actively developed.

Currently we have a master list of labels and we're creating a separate query for each label.
Repo info is attached the Issue, and the first time we encounter a new repo,
we create a container for that repo, and subsequent issues encountered that belong to that
repo are added to the container.

This is not a very fast scheme to accumulate this issue/repo information, and I'm not sure how comprehensive
either. The goal for now is to provide a low-effort list of suggestions, not an airtight directory.

"Good first issues" is a blanket term to describe any issue label inviting
new contributions. Eg "Good first issue", "starter task", "contributions welcome", "help wanted", etc

I'm not sure how to aggregate the master list of labels, other than by poking around github and seeing which one's
people seem to be using. We can provide this liast to the user so that the user can choose to exclude some of them if they wish, and provide the user an option to add labels as well.
We can also some sort of reporting tool if people want to suggest
to add a label to the master list, prob just by pinging me on Twitter to that effect.

The current project goals are to:

#### Features

* provide a table with a list of repos (linking to their github repos) by language and sortable columns listing
the total number of "good first issues" (see above for definition of that term), project Stars,
and when the project was last updated.

The main use of the site so far is to choose a language, search, and start clicking the links on the repos
to go check them out. That's about 90% of the intended functionality. I don't feel a need to provide any more info about a repo than it's owner/name and that link to it's GitHub page. But I'm not against adding low-items that make
the list easier to scan, eg maybe a repo description.

* I would like to add a button beside the repo link that expands and shows the issues we pulled from Github,
sorted by date, with info like the issue title, the labels, maybe the number of comments.

The reason that would be useful is because I find myself checking out the issues tab first when I go check
after clicking the link to visit the repo, so it sort of makes sense to summarize some of that info for
better scanning, with less effort for the user.

The issues should have links that take the user directly to the issue on the Github page.

* Provide the ability to add custom labels the user may want to look for, and provide the user a master
list of the labels we currently search for, with the ability to remove any of those labels if they please.

#### Technical Foundation

* 
