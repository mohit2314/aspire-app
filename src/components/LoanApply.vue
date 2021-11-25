<template>
  <div class="apply__panel">
    <div v-if="!applyLoan && !checkout" class="apply__loan-card">
      <div class="text-h5 q-pb-lg text-center text-grey-9">
        Take your first loan with Aspire!
      </div>
      <div class="q-pb-lg text-center">
        Fast,easy and convenient.Check it out...
      </div>
      <div class="offer-card q-mb-lg">
        <q-chip
          color="teal"
          class="q-mb-md"
          text-color="white"
          outline
          icon="sell"
          >Special offer</q-chip
        >

        <div class="text-center offer-detail">
          Get upto S$ 2500 vouchers for shopping at store near you
        </div>
      </div>
      <div class="apply__btn">
        <q-btn
          color="secondary"
          icon-right="arrow_forward"
          label="Apply now"
          @click="applyLoan = true"
        />
      </div>
    </div>
    <div v-if="applyLoan && !checkout" class="loan__form" style="width: 100%">
      <div class="text-h6 q-mb-md text-grey-8">Enter your Loan details</div>
      <q-input
        class="q-mb-lg"
        outlined
        v-model.number="loanAmount"
        label="Amount required"
        type="number"
      />
      <q-input
        class="q-mb-lg"
        outlined
        v-model="loanTerms"
        label="Loan terms"
        type="number"
      />
      <q-input
        class="q-mb-lg"
        outlined
        disable
        v-model="loanFrequency"
        label="Loan Frequency"
        type="text"
        readonly
      />

      <div class="login-btn">
        <q-btn
          color="secondary"
          label="Check out"
          @click="appliedLoan"
          style="width: 172px; border-radius: 8px"
        />
      </div>
    </div>
    <div v-if="checkout" class="success__form text-center">
      <div>
        <img
          class="bg-green-3"
          style="border-radius: 50%"
          src="../assets/done_white_48dp.svg"
          alt=""
        />
      </div>
      <div class="text-h6 text-center text-grey-7">Great !!!</div>
      <div class="text-h6 text-center text-grey-7">Loan Success</div>
      <q-separator class="q-mt-lg" style="width: 100%" />
      <div class="text-grey-8 text-bold q-pa-xs">Loan Summary</div>
      <div class="loan__summary q-mt-md text-grey-7">
        <div class="label">
          <div>Purpose Loan</div>
          <div>Monthly</div>
          <div>Installment</div>
          <div>Due date</div>
        </div>
        <div class="response">
          <div>Car Loan</div>
          <div>12 Month</div>
          <div>S$ 10/month</div>
          <div>May 10,2021</div>
        </div>
      </div>
      <!-- Apply again -->
       <div v-if="loanAmount!==0 && loanPaid==loanAmount" class="login-btn">
        <q-btn
        class="q-mt-xs"
          color="blue-10"
          label="Apply again"
          @click="applyAgain"
          style="width: 172px; border-radius: 8px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["appliedLoan"],
  data() {
    return {
      applyLoan: false,
      checkout: false,
      loanFrequency: "Monthly",
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
    loanTerms: {
      get: function () {
        return this.$store.state.loanModule.loanTerms;
      },
      set: function (newValue) {
        this.$store.dispatch("loanModule/setLoanTerms", newValue);
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
    repaymentList: {
      get: function () {
        return this.$store.state.loanModule.repaymentList;
      },
      set: function (newValue) {
        this.$store.dispatch("loanModule/setRepaymentList", newValue);
      },
    },
  },

  methods: {
    appliedLoan() {
      this.checkout = true;
      this.loanRemain = this.loanAmount;
      this.$emit("appliedLoan");
    },
  },
};
</script>

<style lang="scss">
.apply__panel {
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  margin-top: 16px;
  display: flex;

  padding: 28px 0px 28px 28px;
  max-height: 400px;
  min-width: 400px;
  margin-right: 18px;
  .apply__btn {
    display: flex;
    justify-content: center;
  }
}
.offer-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.offer-detail {
  background-color: #ddffec;
  color: #01d167;
  border-radius: 6px;
  padding: 8px;
}

.success__form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loan__summary {
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: left;
  .label > div {
    line-height: 2;
  }
  .response > div {
    line-height: 2;
  }
}

@media (max-width:600px){
  .apply__panel{
    margin-right:0px !important;
  }
}
</style>
