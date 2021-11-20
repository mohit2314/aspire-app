<template>
  <div class="page__container">
    <left-navigation-panel></left-navigation-panel>
    <div class="main__section">
      <div class="info-section__wrapper">
        <info-section></info-section>
      </div>
      <div class="dashboard__wrapper">
<dashboard-panel></dashboard-panel>
      </div>
    </div>
  </div>
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
  padding: 48px;
}
</style>
