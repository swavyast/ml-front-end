import axios from 'axios';

const API_BASE_URL = 'https://api.github.com/users/swavyast/repos';

class RepoService {

    fetchMyRepositories() {
        return axios.get(API_BASE_URL)
            .then((response) => {
                if (response.status === 200)
                    return response.data;
                else
                    throw new Error('Error fetching repository in fetchMyRepositories() ...')
            })
            .catch(error => { throw error });
    }


}
const repoService = new RepoService();
export default repoService;