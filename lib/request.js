// 通过axios来获取结果

const axios = require("axios")

axios.interceptors.response.use((res) => res.data)

async function fetchRepoList() {
  // 可以通过配置文件 拉取不同的仓库对应的用户下的文件
  return axios.get("https://api.github.com/users/Gao-Hongxiang/repos")
}

async function fetchTagList(repo) {
  return axios.get(`https://api.github.com/repos/Gao-Hongxiang/${repo}/tags`)
}

module.exports = {
  fetchRepoList,
  fetchTagList,
}
