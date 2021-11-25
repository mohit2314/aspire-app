<template>
  <div class="account__info-card">
    <div class="personal__details">
      <div class="account__avtar">
        <img src="../assets/Account.svg" alt="" />
      </div>
      <div class="q-pa-md">
        <div class="name text-h6 text-indigo-10 q-mb-md">Mohit Patel</div>
        <div class="acc-no text-bold text-grey-8">
          Account no: xxxx xxxx 1234
        </div>
        <div class="date text-grey">Member since:20 May,2021</div>
        <div class="loan-status">
          <q-chip square color="primary" text-color="white" icon="event">
            Status:{{ loanStatus }}
          </q-chip>
        </div>
      </div>
    </div>

    <div class="account__detail-cards">
      <div class="detail-card">
        <div class="label text-bold">
          Loan amount
          <img
          v-if="loanAmount !==0 && loanPaid==loanAmount"
            height="20"
            class="bg-green-3 q-ml-md"
            style="border-radius: 50%"
            src="../assets/done_white_48dp.svg"
            alt=""
          />
        </div>

        <div class="card-row">
          <div class="icon q-mt-md">
            <img src="../assets/Card.svg" alt="" />
          </div>
          <div class="q-ml-md">
            <span v-if="loanAmount" class="text-h6 amt-text"> S$ {{ loanAmount }}</span>
            <span v-else class="text-h6 amt-text"> S$ - - - </span>
          </div>
        </div>
      </div>
      <div class="detail-card">
        <div class="label text-bold">Amount Paid</div>
        <div class="card-row">
          <div class="icon q-mt-md bg-indigo-2">
            <img src="../assets/Credit.svg" alt="" />
          </div>
          <div class="q-ml-md">
            <span class="text-h6 amt-text"> S$ {{ loanPaid || "- - -" }}</span>
          </div>
        </div>
      </div>
      <div class="detail-card">
        <div class="label text-bold">Amount Remaining</div>
        <div class="card-row">
          <div class="icon q-mt-md bg-red-2">
            <img src="../assets/Payments.svg" alt="" />
          </div>
          <div class="q-ml-md">
            <span class="text-h6 amt-text"> S$ {{ loanRemain || "- - -" }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loanAmt: 0,
    };
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
    loanPaid: {
      get: function () {
        return this.$store.state.loanModule.loanPaid;
      },
    },
    loanRemain: {
      get: function () {
        return this.$store.state.loanModule.loanRemain;
      },
      set: function (newValue) {
        this.$store.dispatch("loanModule/setLoanRemain", newValue);
      },
    },
    loanStatus() {
      if (this.loanPaid !== 0 && +this.loanPaid === +this.loanAmount) {
        return "Repaid";
      } else if (this.loanPaid == 0 && +this.loanPaid === +this.loanAmount) {
        return " NA";
      } else if (this.loanPaid !== 0 && +this.loanPaid !== +this.loanAmount) {
        return " Pending";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.account__info-card {
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  margin-top: 16px;
  display: flex;
  align-items: center;
  // flex-wrap: wrap;

  padding: 16px;
  overflow: hidden;

  .account__avtar {
    background-color: #0000001f;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.personal__details {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 220px;
}

.account__detail-cards {
  width: 60%;
  display: flex;
  justify-content: space-around;
  .detail-card {
    border: 1px solid #0000001f;
    border-radius: 16px;
    padding: 16px;
    width: 162px;
    height: 122px;

    .card-row {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.icon {
  background-color: #ddffec;
  height: 52px;
  width: 52px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width:600px){
  .account__avtar{
    display: none !important;
  }
  .account__info-card{
    padding: 4px !important;
  }
    .account__detail-cards{
      flex-direction: column;
       height: 0px;
    width:0px;
    padding-bottom: 14px !important;
    }
  .label{
    display: none;
  }
  .detail-card{
    border: 0px !important;
    padding: 0px !important;
    height: 0px;
    width:0px;
  }
  .card-row{
    width: 200px;
  }
  .amt-text{
    font-size: 16px !important;
    color:grey !important;
  }
  .icon{
    height: 42px !important;
    width:42px !important;
  }
}
</style>
