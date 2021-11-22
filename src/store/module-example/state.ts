export interface ExampleStateInterface {
  prop: boolean;
  loanAmount:Number;
  loanTerms:Number;
  loanPaid:Number;
  repaymentList:[];
}

function state(): ExampleStateInterface {
  return {
    prop: false,
    loanAmount:1000,
    loanTerms:1,
    loanPaid:0,
    repaymentList:[]
        
  }
};

export default state;
