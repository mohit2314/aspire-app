<template>
<q-layout class="q-pa-lg">
  <account-info-card></account-info-card>
  <div class="row ">
<loan-apply @appliedLoan="loanGranted=true">

</loan-apply>

<loan-panel :loanGranted="loanGranted" :repaymentList="repaymentList"></loan-panel>
</div>
</q-layout>
</template>

<script>
import AccountInfoCard from "components/AccountInfoCard.vue";
import LoanApply from "components/LoanApply.vue"
import LoanPanel from "components/LoanPanel.vue"
import OffersPanel from "components/OffersPanel.vue"

export default {
components:{
    AccountInfoCard,
    LoanPanel,
    LoanApply,
    OffersPanel
},
data(){
return{
    loanGranted:false
}
},
computed:{
  isLoggedIn() {
return this.$store.getters.isAuthenticated;
  },
    repaymentList: {
      get: function () {
        return this.$store.state.loanModule.repaymentList;
      },
      set: function (newValue) {
        this.$store.dispatch("loanModule/setRepaymentList", newValue);
      },
    },
}
}
</script>

<style lang="scss">

.account__info-card{
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  margin-top: 16px;
  display: flex;
  padding: 16px;
  
.account__avtar{
background-color: #0000001F;
border-radius: 50%;
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
}

}
.personal__details{
    display: flex;
    width: 40%;
}

.account__detail-cards{
    width: 100%;
display: flex;
justify-content: space-around;
    .detail-card{
        border: 1px solid #0000001F;
        border-radius: 16px;
        padding: 16px;
        width: 162px;
        height: 122px;

        .card-row{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

}
.icon{
    background-color: #DDFFEC;
    height: 52px;
    width: 52px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width:600px){
  
}
</style>