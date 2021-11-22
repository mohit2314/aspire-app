<template>
 <div class="loan__panel">
<div v-if="!loanGranted" class="no__transaction">
  <div>  <img height="300" width="400" src="https://image.freepik.com/free-vector/plain-credit-card-concept-illustration_114360-199.jpg" alt="">
</div>
<div class="text-h6 text-grey-8">
    No Transactions
   
</div>
</div>
<div v-show="loanGranted" class="loan__repayments">
<div v-for="(term,i) in repaymentList" :key="i" class="repayment__card q-mb-md">
<div class="col">
    <div>
<q-badge v-show="term.paid" color="green-3">
     Repaid
    </q-badge>
</div>
<div>
<q-badge v-show="!term.paid" color="red-3">
     Unpaid
    </q-badge>
</div>
<div>
    Amount:- {{term.amount}}
</div>
<div class="text-grey-8">
    Due date:- 20 May,2021
</div>
</div>

<div class="col-3">
   <q-btn v-if="repayList[i]==undefined" @click="repay(i)" outline rounded color="primary" label="Repay" />
   {{repaymentList[i].paid}}
<img v-show="repayList[i] " class="bg-green-3" style="border-radius:50%" src="../assets/done_white_48dp.svg" alt="">

</div>

</div>
{{repaymentList}}
<!-- {{constructRepayList}} -->
</div>
 </div>
</template>

<script>
export default {

props:{

loanGranted:{
    type:Boolean,
    default:false
},
repaymentList:{
  type:Array
}

},
data(){
    return {
     repayList:[],
     updatedList:[]
    }
},
Updated(){
  this.repaymentList;

},
beforeMount(){
  this.updatedList=this.repaymentList;
  console.log("Updated List",this.updatedList)
},
computed: {
   
    loanAmount: {
      get: function () {
        return this.$store.state.loanModule.loanAmount;
      },
      set: function (newValue) {
        this.$store.dispatch("loanModule/setLoanAmount", newValue);
      },
    },
       loanTerms: {
      get: function () {
        return this.$store.state.loanModule.loanTerms;
      }
    },
    //   repaymentList: {
    //   get: function () {
    //     return this.$store.state.loanModule.repaymentList;
    //   },
    //   set: function (newValue) {
    //     this.$store.dispatch("loanModule/setRepaymentList", newValue);
    //   },
    // },
 
  },
  methods:{
      repay(i){
          this.loanAmount = this.loanAmount - this.repaymentList[i].amount;
        //   term.paid=true;
        console.log(this.repaymentList[i].paid)
       this.repaymentList[i].paid=true;
        console.log(this.repaymentList[i].paid)
conosole.log("%%% REpay")
       let repayObj={
         index:i,
         paid:true
       }
this.repayList.push(repayObj);
      },
    
   
  }
}
</script>

<style lang="scss">
.loan__panel{
    width: 60%;
      border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  margin-top: 16px;
  display: flex;
  padding: 28px;

 overflow: hidden;
}

.no__transaction{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loan__repayments{
    width:80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .repayment__card{
        width: 80%;
        border: 1px solid #0000001f;
        padding: 16px 12px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
    }
}
</style>