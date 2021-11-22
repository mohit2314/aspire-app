import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  },
  setLoanAmount: ({ commit }, amt) => {
    commit('setLoanAmount', amt);
  },
};

export default actions;
