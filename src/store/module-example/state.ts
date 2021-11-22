export interface ExampleStateInterface {
  prop: boolean;
  loanAmount:Number;
}

function state(): ExampleStateInterface {
  return {
    prop: false,
    loanAmount:1000
  }
};

export default state;
