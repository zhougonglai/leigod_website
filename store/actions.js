export default {
  async getDownload(_, params) {
    const { data } = await this.$axios.$get("/tools/advertise/list", {
      params,
    });
    return data;
  },
};
