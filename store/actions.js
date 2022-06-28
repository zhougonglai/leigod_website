export default {
  async getDownload(_, params) {
    const { data } = await this.$axios.$get("/tools/advertise/list", {
      params,
    });
    return data;
  },
  async getUserInfo({ commit }, body) {
    const { data } = await this.$axios.$post("/api/user/info", body);
    commit("SET_INFO", data);
    return data;
  },
};
