<template>
  <div class="dashboard__panel small-screen-padding">
    <div class="cards__tab--row">
      <span class="card__tab --active"> My debit cards </span>
      <span class="card__tab"> All company cards </span>
    </div>
    <div class="dashboard__card-body row small-screen-padding">
      <div class="left-col col-xs-10 col-sm-8 col-md-6">
        <!-- Carousel Section -->
        <div class="carousel__section">
       
          <div class="view__card-number">
            <img
              src="../../assets/remove_red_eye-24px.svg"
              alt=""
              style="margin-right: 4px"
            />
            Show card number
          </div>
          
          <credit-card ></credit-card>
        </div>
        <!-- Card features options -->
        <div class="features__section">
          <div v-for="feature in featuresList" :key="feature" class="feature">
            <div class="feature__icon">
              <img :src="require(`../../assets/${feature.icon}`)" alt="" />
            </div>
            <div class="feature__label">
              {{ feature.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="right-col col-xs-12 col-sm-8 col-md-6">
        <div style="max-width: 366px; margin-left:40px;">
          <div class="accordian-header">
            <div>
              <img
                class="accordian-icon"
                src="../../assets/Card_details.svg"
                alt=""
              />
            </div>
            <div class="label">Card details</div>
            <div class="expand-icon">
              <img src="../../assets/down-arrow.svg" alt="" />
            </div>
          </div>
          <!-- Expanded accordian -->
          <div class="accordian-header --expanded">
            <div>
              <img
                class="accordian-icon"
                src="../../assets/recent_transc.svg"
                alt=""
              />
            </div>
            <div class="label">Recent Transactions</div>
            <div class="expand-icon expanded-icon">
              <img src="../../assets/down-arrow.svg" alt="" />
            </div>
          </div>
          <div class="recent__transaction--content">
            <div class="transaction__row">
              <div class="icon">
                <img src="../../assets/file-storage.svg" alt="" />
              </div>
              <div class="info">
                <div class="name">Hamleys</div>
                <div class="date">20 May 2020</div>
                <div class="refund__detail">
                  <div class="icon">
                    <img src="../../assets/business-and-finance.svg" alt="" />
                  </div>
                  Refund on debit card
                </div>
              </div>
              <div class="amount">
                <span>+ S$ 150</span>&nbsp;
                <img src="../../assets/next.svg" alt="" />
              </div>
            </div>
            <!--  -->
            <div
              v-for="(transaction, k) in transactionsList"
              :key="k"
              class="transaction__row"
            >
              <div class="icon">
                <img
                  :src="require(`../../assets/${transaction.icon}`)"
                  alt=""
                />
              </div>
              <div class="info">
                <div class="name">Hamleys</div>
                <div class="date">20 May 2020</div>
                <div class="refund__detail">
                  <div class="icon">
                    <img src="../../assets/business-and-finance.svg" alt="" />
                  </div>
                  Refund on debit card
                </div>
              </div>
              <div class="amount">
                <span style="color: #000">- S$ 150</span>&nbsp;
                <img src="../../assets/next.svg" alt="" />
              </div>
            </div>
           
          </div>
           <!-- View all transactions -->
            <div class="view-all">
                <span> View all transaction</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreditCard from "./CreditCard.vue";
export default {
  components: {
    CreditCard,
  },
  data() {
    return {
      featuresList: [
        {
          icon: "Freeze_card.svg",
          label: "Freeze card",
        },
        {
          icon: "spend_limit.svg",
          label: "Set spend limit",
        },
        {
          icon: "GPay.svg",
          label: "Add to GPay",
        },
        {
          icon: "Replace_card.svg",
          label: "Replace card",
        },
        {
          icon: "Deactivate_card.svg",
          label: "Cancel card",
        },
      ],
      transactionsList: [
        {
          icon: "flights.svg",
          name: "Hamleys",
        },
        {
          icon: "megaphone.svg",
          name: "Hamleys",
        },
        {
          icon: "file-storage.svg",
          name: "Hamleys",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.dashboard__panel {
  padding: 12px;
}
.cards__tab--row {
  .card__tab {
    font-size: 14px;
    padding: 4px;
    margin-right: 12px;
    opacity: 30%;
  }

  .--active {
    opacity: 100%;
    border-bottom: 2px solid #23cefd;
  }
}

.dashboard__card-body {
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  margin-top: 16px;
  display: flex;
  padding: 36px;
  flex-wrap: wrap;
  overflow: hidden;
}


.left-col {
  width: 55%;
}
.view__card-number {
  width: 414px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #01d167;
  font-size: 12px;
  font-weight: 600;
}

.carousel__section{
  width: 414px;

}
.features__section  {
  padding: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 414px;
  max-height: 116px;
  background-color: #edf3ff;
  border-radius: 10px;
  margin-top: 24px;

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    .feature__label {
      color: #0c365a;
      font-size: 13px;
      margin-top: 6px;
      text-align: center;
      max-width: 60px;
    }
  }
}

.right-col {
  // width: 45%;
}

.accordian-icon {
  height: 54px;
  width: 24px;
}

.accordian-header {
  padding: 12px;
  background-color: #f5f9ff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 0px 8px #0000000a;
  border-radius: 6px;
  width: 366px;
  height: 72px;
  color: #0c365a;
  margin-bottom: 16px;
  .expanded-icon {
    transform: rotate(180deg);
  }
  .--expanded {
    border: 1px solid #fcfcfc;
    height: 520px;
  }
}
.accordian-header:hover {
  background-color: #f5f9ff;
}
.recent__transaction--content {
  padding: 8px 16px;
  outline: 1px solid #f0f0f0;
}
.transaction__row {
  width: 318px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  margin: 14px 0px;
  .icon {
    height: 48px;
    width: 48px;
    background-color: #009dff1a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    width: 60%;
    .name {
      font-size: 14px;
      font-weight: 600;
    }
    .date {
      font-size: 13px;
      color: #aaaaaa;
      margin-top: 4px;
    }
    .refund__detail {
      margin-top: 8px;
      font-size: 12px;
      color: #325baf;
    }
  }

  .refund__detail {
    display: flex;
    .icon {
      height: 20px;
      width: 24px;
      background-color: #325baf;
      margin-right: 8px;
    }
  }
  .amount {
    color: #01d167;
    font-size: 14px;
    font-weight: 600;
  }
}
.view-all{
    width:366px;
    height: 42px;
    background-color: #EDFFF5;
    color: #01D167;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid #DDFFEC;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}
</style>
