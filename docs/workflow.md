# Workflow

## Contribution Workflow

To start contributing to this project, you first need to fork this repository and clone it to your local machine. Each time you want to change something, do the following steps:

- Create a new issue and label it.
- Create a new branch named `issue-#`.
- Commit your changes (1-3 commits/merge request). Prefix your commit messages with the number of the issue, e.g. _#25 Added mobile responsiveness_.
- Open a new merge request, from source branch `issue-#` to target branch `master`. Also prefix your merge request's title with the number of the issue.
- Ping everyone on the **#notifications** channel on Slack to review your merge request.
- Your merge request must receive at least two thumbs-up to be accepted.

After your merge request has been accepted, sync your repository with the `upstream` repository (you need to [specify the remote `upstream` repository](https://help.github.com/en/articles/configuring-a-remote-for-a-fork) first):

```shell
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
```

## Coding Workflow

- To start the app, run the following command:

```shell
$ docker-compose up
```

- To stop the app, run the following command:

```shell
$ docker-compose down
```

## Recommended IDEs

- For frontend development: Visual Studio Code
- For backend development: PHPStorm
