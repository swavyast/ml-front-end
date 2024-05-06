import { Octokit } from "octokit";
import { isValidUsername } from "../js/Utilities";
import { RepositoryContext, UserContext } from "../AppContext";
import { useContext } from "react";

const useOctokit = () => {
    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_TOKEN
    });
    return octokit;
};

const useRepoService = () => {
    const userContext = useContext(UserContext);
    const repositoryContext = useContext(RepositoryContext);
    const octokit = useOctokit();

    const resetRepositories = () => {
        repositoryContext.setRepositories([{
            repoId: '',
            repoName: '',
            repoUrl: '', //html_url
            repoApiUrl: '', //url
            repoDesc: '',
            gitUrl: '',
            sshUrl: '',
            cloneUrl: '',
            homepage: '',
            size: '',
            language: '',
            forksCount: '',
            mirrorUrl: '',
            openIssuesCount: '',
            license: '',
            signoffRequired: '',
            topics: [],
            defaultBranch: '',
            visibility: '',
            hasProjects: false,
            hasIssues: false,
            hasDownloads: false,
            hasWiki: false,
            hasPages: false,
            hasDiscussions: false,
            isArchieved: false,
            isDisabled: false,
            allowsForking: false,
            isTemplate: false,
            dateCreated: '',
            datePushed: '',
            lastUpdated: ''
        }]);
    }

    const repositoryByUsername = async () => {
        try {
            console.log('username within repositoryByUsername() : ', userContext.username);
            console.log('isValidUsername(username) is returning ', isValidUsername(userContext.username));
            if (isValidUsername(userContext.username)) {
                const response = await octokit.request(`GET /users/${userContext.username}/repos`, {
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28',
                        'User-Agent': 'ml.com'
                    }
                });

                if (response.status === 200) {
                    console.log('response headers : ', response.headers);

                    const data = response.data;
                    const newData = {
                        repositories: data,
                        lastFetched: new Date().getTime()
                    };

                    localStorage.setItem('repositoryData', JSON.stringify(newData));

                    return newData.repositories;
                }
            }
        } catch (error) {

            return new Error('Error fetching repository by username ', error);
        }
    };

    const fetchMyRepositories = async () => {

        try {
            const storedData = localStorage.getItem('repositoryData');

            console.log('storedData', JSON.stringify(storedData));

            if (storedData) {
                const { repositories, lastFetched } = JSON.parse(storedData);
                const currentTime = new Date().getTime();

                console.log('repositories : ', JSON.stringify(repositories));
                console.log('lastFetched : ', JSON.stringify(lastFetched));

                // Check if last fetch was within the last 4 hours
                if (currentTime - lastFetched < 4 * 60 * 60 * 1000) {

                    return repositories; // Return stored data
                }
            }

            return repositoryByUsername();

        } catch (error) {

            console.error('error fetching repositories...', error);

        }
    };

    const fetchAndMapMyRepo = () => {

        fetchMyRepositories().then((res) => {

            const repos = res.map((repo) => ({
                repoId: repo.id,
                repoName: repo.name,
                repoUrl: repo.html_url, //html_url
                repoApiUrl: repo.url, //url
                repoDesc: repo.description,
                gitUrl: repo.git_url,
                sshUrl: repo.ssh_url,
                cloneUrl: repo.clone_url,
                homepage: repo.homepage,
                size: repo.size,
                language: repo.language,
                forksCount: repo.forks_count,
                mirrorUrl: repo.mirror_url,
                openIssuesCount: repo.open_issues_count,
                license: repo.license,
                signoffRequired: repo.web_commit_signoff_required,
                topics: [...repo.topics],
                defaultBranch: repo.default_branch,
                visibility: repo.visibility,
                hasProjects: repo.has_projects,
                hasIssues: repo.has_issues,
                hasDownloads: repo.has_downloads,
                hasWiki: repo.has_wiki,
                hasPages: repo.has_pages,
                hasDiscussions: repo.has_discussions,
                isArchieved: repo.archived,
                isDisabled: repo.disabled,
                allowsForking: repo.allow_forking,
                isTemplate: repo.is_template,
                dateCreated: repo.created_at,
                datePushed: repo.pushed_at,
                lastUpdated: repo.updated_at,
            }));

            repositoryContext.setRepositories(repos);

        })
            .catch((error) => {
                console.log('error setting repository details', error);
            })
    };

    const refreshMyRepo = async () => {

        await repositoryByUsername().then((res) => {

            const repos = res.map((repo) => ({

                repoId: repo.id,
                repoName: repo.name,
                repoUrl: repo.html_url, //html_url
                repoApiUrl: repo.url, //url
                repoDesc: repo.description,
                gitUrl: repo.git_url,
                sshUrl: repo.ssh_url,
                cloneUrl: repo.clone_url,
                homepage: repo.homepage,
                size: repo.size,
                language: repo.language,
                forksCount: repo.forks_count,
                mirrorUrl: repo.mirror_url,
                openIssuesCount: repo.open_issues_count,
                license: repo.license,
                signoffRequired: repo.web_commit_signoff_required,
                topics: [...repo.topics],
                defaultBranch: repo.default_branch,
                visibility: repo.visibility,
                hasProjects: repo.has_projects,
                hasIssues: repo.has_issues,
                hasDownloads: repo.has_downloads,
                hasWiki: repo.has_wiki,
                hasPages: repo.has_pages,
                hasDiscussions: repo.has_discussions,
                isArchieved: repo.archived,
                isDisabled: repo.disabled,
                allowsForking: repo.allow_forking,
                isTemplate: repo.is_template,
                dateCreated: repo.created_at,
                datePushed: repo.pushed_at,
                lastUpdated: repo.updated_at

            }));

            repositoryContext.setRepositories(repos);

        }).catch((error) => {

            throw new Error('error refreshing repository details :', error);

        })

    }




    const fetchUserData = async () => {
        const response = await octokit.request(`GET /user`, {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'accept': 'application/json',
                'user-agent': 'ml.com',
                'authorization': process.env.REACT_APP_GITHUB_CLIENT_ID
            }
        })

        if (response.status === 200) {

            return response.data;

        } else {

            throw new Error('error fetching user details : ', response.statusText);
        }
    }






    return {
        // Return the methods you want to expose from this service
        resetRepositories: resetRepositories,
        fetchAndMapMyRepo: fetchAndMapMyRepo,
        refreshMyRepo: refreshMyRepo,
        fetchUserData: fetchUserData
    };

}
export default useRepoService;