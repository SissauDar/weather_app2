import idb from '../../utils/idb';

export default {
    state: {
        cachedData: [],
        currentSelected: null
    },

    getters: {
        cachedData: state => state.cachedData,
        currentSelected: state => state.currentSelected
    },

    mutations: {
        setCachedData: async function (state, payload) {
            state.cachedData = payload;
        },
        setCurrentSelected: function (state, payload) {
            state.currentSelected = payload;
        }
    },

    actions: {
        saveItem: async function ({ commit, getters }, payload) {
            await idb.saveItem(payload);
        },

        getItems: async function ({ commit, getters }) {
            let items = await idb.getItems();
            commit('setCachedData', items);
        },

        getItemById: async function ({ commit, getters }, id) {
            console.log(id);

            const item = await idb.getItemById(id);
            commit('setCurrentSelected', item);
        },

        deleteItem: async function ({ commit, getters }, payload) {
            await idb.deleteItem(payload);
        }
    },
}