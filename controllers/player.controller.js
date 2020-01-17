const Player = require("../models/player.model");

module.exports = {
  get: async params => {
    const data = await Player.find(params);
    return data;
  },
  getById: async id => {
    const data = Player.findById(id);
    return data;
  },
  post: async params => {
    const data = Player.create(params);
    return data;
  },
  put: async (id, params) => {
    const data = Player.findByIdAndUpdate(id, params, { new: true });
    return data;
  },
  delete: async id => {
    Player.findByIdAndDelete(id);
  }
};
