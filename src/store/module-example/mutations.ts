import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  },
  setLoanAmount: (state, amt) => {
    state.loanAmount = amt;
  },
};

export default mutation;
