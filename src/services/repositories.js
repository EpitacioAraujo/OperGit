import api from "./api";

class RepositoryService {
  async searchRepositories(name) {
    const response = await api({
      method: "get",
      url: `search/repositories?q=user:${name}`,
    });

    const repositories = response.data.items;

    for (let i = 0; i < repositories.length; i++) {
      repositories[i].languages = await api({
        method: "get",
        url: `${repositories[i].languages_url.substring(23)}`,
      }).then((response) => response.data);
    }

    return repositories;
  }
}

export default new RepositoryService();
