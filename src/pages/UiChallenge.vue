<template>
<q-layout>
  <q-page-container>
  <div class="page__container">
    <left-navigation-panel class="large-screen-only"></left-navigation-panel>
    <q-page>
    <div class="main__section q-layout-padding flex justify-center small-screen-padding">
      <div class="info-section__wrapper">
        <info-section></info-section>
      </div>
      <div class="dashboard__wrapper">
<dashboard-panel ></dashboard-panel>
      </div>
      <q-footer bordered class="bg-white footer text-primary small-screen-only">
        <div v-for="item in navItemsList" :key="item" class="mobile__nav-item">
        <div class="icon">
        <img :src="require(`../assets/${item.icon}`)" alt="">
        </div>
<div class="label">
{{item.label}}
</div>
        </div>

      </q-footer>
    </div>
    </q-page>
  </div>
  </q-page-container>
</q-layout>
</template>

<script>
import LeftNavigationPanel from "components/designs/LeftNavigationPanel.vue";
import InfoSection from "components/designs/InfoSection.vue";
import DashboardPanel from "components/designs/DashboardPanel.vue";
export default {
  components: {
    LeftNavigationPanel,
    InfoSection,
    DashboardPanel
  },
  data(){
      return {
          navItemsList:[
              {
                  icon:'mobile_Logo.svg',
                  label:'Home'
              },
              {
                  icon:'pay.svg',
                  label:'Cards'
              },
              {
                  icon:'mobile_payments.svg',
                  label:'Payments'
              },
              {
                  icon:'mobile_credit.svg',
                  label:'Credit'
              },
              {
                  icon:'mobile_account.svg',
                  label:'Profile'
              },
          ]
      }
  }
};
</script>

<style lang="scss">
.page__container {
  display: flex;
  font-family: "Open Sans", "Regular";
}

.main__section {
  width: 100%;
  max-width: 1302px;
  // padding: 48px 104px;
}
.footer{
  position: fixed;
    box-shadow: 0px -3px 6px #00000014;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 8px 0px;
}
.mobile__nav-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    .label{
        font-size: 9px;
    }
    .--active{
        color:#01D167 ;
    }
}
</style>
