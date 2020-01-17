const Team = require("../models/team.model");

module.exports = {
  get: async params => {
    const data = await Team.find(params);
    return data;
  },
  getById: async id => {
    const data = Team.findById(id);
    return data;
  },
  post: async params => {
    const data = Team.create(params);
    return data;
  },
  put: async (id, params) => {
    const data = Team.findByIdAndUpdate(id, params, { new: true });
    return data;
  },
  delete: async id => {
    Team.findByIdAndDelete(id)
  }
};
