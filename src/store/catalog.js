import axios from 'axios'

export default {
    state: {
        catalog: [],
    },
    getters: {
        CATALOG(state) {
          return state.catalog;
        }
    },
    
    mutations: {
        SET_CATALOG_TO_STATE: (state, catalog) => {
            state.catalog = catalog;
        }
    },
    
    actions: {
        GET_CATALOG_API({commit}) {
            return axios('/json/data.json', {
                method: "GET"
            })
            .then((catalog) => {
                commit('SET_CATALOG_TO_STATE', catalog.data);
                return catalog.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        }
    },
  }