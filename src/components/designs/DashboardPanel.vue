<template>
  <div class="dashboard__panel">
    <div class="cards__tab--row">
      <span class="card__tab --active"> My debit cards </span>
      <span class="card__tab"> All company cards </span>
    </div>
    <div class="dashboard__card-body">
<div class="left-col">
<div class="carousel__section">
    <div><img src="../../assets/remove_red_eye-24px.svg" alt=""> Show card number</div>
<credit-card></credit-card>
</div>
</div>
<div class="right-col">

</div>
    </div>
  </div>
</template>

<script>
import CreditCard from "./CreditCard.vue";
export default {

    components:{
        CreditCard
    }
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

.dashboard__card-body{
    border: 1px solid #FCFCFC;
    box-shadow: 0px 2px 12px #00000014;
    margin-top: 16px;
}
</style>
