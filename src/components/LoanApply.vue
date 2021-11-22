<template>
  <div class="apply__panel">
    <div v-if="!applyLoan && !checkout" class="apply__loan-card">
      <div class="text-h5 q-pb-lg">Take your first loan with Aspire!</div>
      <div class="q-pb-lg text-center">
        Fast,easy and convenient.Check it out...
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
    <div v-if="applyLoan && !checkout" class="loan__form">
      <div class="text-h6 q-mb-md text-grey-8">Enter your Loan details</div>
      <q-input
        class="q-mb-lg"
        outlined
        v-model="loanAmount"
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
      <img
        class="bg-green-3"
        style="border-radius: 50%"
        src="../assets/done_white_48dp.svg"
        alt=""
      />
      <div class="text-h6 text-center">Great !!!</div>
      <div class="text-h6 text-center">Loan Success</div>
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
    loanTerms: {
      get: function () {
        return this.$store.state.loanModule.loanTerms;
      },
      set: function (newValue) {
        this.$store.dispatch("loanModule/setLoanTerms", newValue);
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
  beforeUpdate() {
    this.constructRepaymentObj();
  },
  methods: {
    appliedLoan() {
      this.checkout = true;
      this.$emit("appliedLoan");
    },

    constructRepaymentObj() {
      let repaymentObj = {
        amount: this.loanAmount / +this.loanTerms,
        paid: false,
      };
      let list = [];

      for (let i = 0; i < +this.loanTerms; i++) {
        list.push(repaymentObj);
      }
      this.repaymentList = list;
      
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
  padding: 28px;
  height: 352px;
  width: 296px;

  .apply__btn {
    display: flex;
    justify-content: center;
  }
}
</style>
