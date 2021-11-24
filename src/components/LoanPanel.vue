<template>
  <div class="loan__panel">
    <div v-if="!loanGranted" class="no__transaction">
      <div>
        <img
          height="300"
          width="400"
          src="https://image.freepik.com/free-vector/plain-credit-card-concept-illustration_114360-199.jpg"
          alt=""
        />
      </div>
      <div class="text-h6 text-grey-8">No Transactions</div>
    </div>
    <div v-show="loanGranted" class="loan__repayments">
      <div
        v-for="(term, i) in updatedList"
        :key="i"
        class="repayment__card q-mb-md"
      >
        <div class="col">
          <div>
            <q-badge v-show="term.paid" color="green-3"> Repaid </q-badge>
          </div>
          <div>
            <q-badge v-show="!term.paid" color="red-3"> Unpaid </q-badge>
          </div>
          <div>Amount:- {{ term.amount.toFixed(2) }}</div>
          <div class="text-grey-8">Due date:- {{ term.date }}</div>
        </div>

        <div class="col-3">
          <q-btn
            v-if="!updatedList[i].paid"
            @click="repay(i)"
            outline
            rounded
            color="primary"
            label="Repay"
          />

          <img
            v-show="updatedList[i].paid"
            class="bg-green-3"
            style="border-radius: 50%"
            src="../assets/done_white_48dp.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loanGranted: {
      type: Boolean,
      default: false,
    },
    repaymentList: {
      type: Array,
    },
  },
  data() {
    return {
      repayList: [],
      updatedList: [],
    };
  },
  Updated() {
    this.repaymentList;
  },

  beforeMount() {
    this.updatedList = this.constructRepaymentList(
      this.loanAmount,
      this.loanTerms
    );
  },
  watch: {
    loanTerms: function () {
      this.updatedList = this.constructRepaymentList(
        this.loanAmount,
        this.loanTerms
      );
      console.log("Updated List", this.updatedList);
    },
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
    },
    loanPaid: {
      get: function () {
        return this.$store.state.loanModule.loanPaid;
      },
      set: function(newValue) {
        return this.$store.dispatch("loanModule/setLoanPaid",newValue);
      }
    },
     loanRemain: {
      get: function () {
        return this.$store.state.loanModule.loanRemain;
      },
      set: function (newValue) {
        this.$store.dispatch("loanModule/setLoanRemain", newValue);
      },
    },
  },
  methods: {
     /**
     * Repays the loan of respective loan term
     * @param i {Number}
     */
    repay(i) {
      this.loanRemain = (this.loanRemain - this.updatedList[i].amount).toFixed(2);
      this.loanPaid=(this.loanAmount- this.loanRemain).toFixed(2);
      //quick fix can be handled in more better way
      if(+this.loanRemain < 1){
        this.loanRemain=0;
        this.loanPaid=this.loanAmount;
      }
      this.updatedList[i].paid = true;
    },
    constructRepaymentList(loanAmt, terms) {
      this.updatedList = [];
      for (let i = 0; i < +terms; i++) {
        let repaymentObj = {
          amount: loanAmt / +terms,
          paid: false,
          date: this.formatDate(new Date(Date.UTC(2021, i + 1, 20, 3, 0, 0))),
        };
        this.updatedList.push(repaymentObj);
      }
      return this.updatedList;
    },

    /**
     * Internationalize date & time as per country and format it
     * @param dateObj {Object}
     * @returns String or resource
     */
    formatDate(dateObj) {
      const locale = navigator.language;
      var options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = new Intl.DateTimeFormat(locale, options).format(
        dateObj
      );

      return formattedDate;
    },
  },
};
</script>

<style lang="scss">
.loan__panel {
  width: 60%;
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  margin-top: 16px;
  display: flex;
  padding: 28px;

  overflow: hidden;
}

.no__transaction {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loan__repayments {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .repayment__card {
    width: 80%;
    border: 1px solid #0000001f;
    padding: 16px 12px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
