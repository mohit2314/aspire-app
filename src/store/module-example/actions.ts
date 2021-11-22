import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  setLoanAmount: ({ commit }, amt) => {
    commit('setLoanAmount', amt);
  },
  setLoanTerms: ({ commit }, terms) => {
    commit('setLoanTerms', terms);
  },
  setLoanPaid: ({ commit }, paid) => {
    commit('setLoanPaid', paid);
  },
};

export default actions;
