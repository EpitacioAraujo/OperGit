import api from "./api";

class UserService {
  async searchUser(name, page = 1) {
    const response = await api({
      method: "get",
      url: `search/users?q=${name} in:name`,
    });

    const logins = response.data.items.map((item) => item.login);

    const items = [];

    for (let i = 0; i < logins.length; i++) {
      const dataUser = await api({
        method: "get",
        url: `users/${logins[i]}`,
      });

      items.push(dataUser.data);
    }

    return { items };
  }
}

export default new UserService();
