import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  setLoanAmount: (state, amt) => {
    state.loanAmount = amt;
  },
  setLoanTerms: (state, terms) => {
    state.loanTerms = terms;
  },
  setLoanPaid: (state, paid) => {
    state.loanPaid = paid;
  },
};

export default mutation;
