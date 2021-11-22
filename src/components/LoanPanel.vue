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
<div v-for="(term,i) in +loanTerms" :key="i" class="repayment__card q-mb-md">
<div class="col">
    <div>
<q-badge color="green-3">
     Repaid
    </q-badge>
</div>
<div>
    Amount:-
</div>
<div class="text-grey-8">
    Due date:- 20 May,2021
</div>
</div>

<div class="col-3">
<img class="bg-green-3" style="border-radius:50%" src="../assets/done_white_48dp.svg" alt="">
   <q-btn outline rounded color="primary" label="Repay" />
</div>

</div>
</div>
 </div>
</template>

<script>
export default {

props:{

loanGranted:{
    type:Boolean,
    default:false
}

},
data(){
    return {
     
    }
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
  },
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