import axios from "../assets/axios/index";
import * as types from "./mutationType";

export const state = () => ({
  userData: [],
  porfolio:[]
});

export const mutations = {
  [types.setUserData](state, items) {
    state.userData = items;
  },
  [types.setPorfolio](state, items) {
    state.porfolio = items;
  }
};

export const actions = {
  async getUserData(context) {
    try {
      let response = await axios({
        method: "get",
        url: `/user-data`
      });
      context.commit("setUserData", response.data);
      return response;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  setUserData(context,data){
    context.commit("setUserData",data);
  },
  async getPorfolio(context) {
    try {
      let response = await axios({
        method: "get",
        url: `/porfolios`
      });
      context.commit("setPorfolio", response.data);
      return response;
    } catch (err) {
      return Promise.reject(err);
    }
  }
};
