# GoodFirstIssue-Dev

A wall-to-wall re-write of [goodfirstissue.com](http://goodfirstissue.com/) using React and
some of the tools used at [sourcecred](https://github.com/sourcecred/sourcecred), in part to gain
a better understand of those tools.

## Goals

The purpose of the site is to provide a place where beginner and intermediate open-source
developers can find a bunch of repositories with issues welcoming new contributions and contributors,
in their preferred language.

## Spec

The current strategy to find these repos is to query Github's API for issues that include a given label,
such as "contributions welcome", and accumulate all those issues that exist within a certain date frame.

As far as I know Github's Graphql API doesn't return a list of issues that's perfectly sorted by date, so the exact
cutoff date can be inconsistent; but it is a priority to exclude repositories that aren't being actively developed.

Currently for each label we want to search for we're creating a separate query.
Repo info is attached the Issue, and the first time we encounter a new repo,
we create a container for that repo, and subsequent issues encountered that belong to that
repo are added to the container.

"Good first issues" is a blanket term to describe any issue label inviting
new contributions. Eg "Good first issue", "starter task", "contributions welcome", "help wanted", etc

I'm not sure how to accumulate these at the moment. My current thought is to aggregate a bunch of
labels as a master list, provide them to the user so that can choose to exclude some of them if they wish, and provide
the user an option to add labels as well. Also some sort of reporting scheme if people want to suggest
to add a label to the master list, prob just by pinging me on Twitter to that effect. 

The current project goals are to:

* provide a table with a list of repos by language and sortable columns listing
the total number of "good first issues"
