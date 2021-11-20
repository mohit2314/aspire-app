<template>
  <div class="navigation__panel">
    <div class="brand">
      <div class="logo">
        <img src="../../assets/Logo.svg" alt="asprie-logo" />
      </div>
      <div class="tagline">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>
    </div>
    <!--Navigation items list  -->
    <div>
      <ul class="navigation__list">
        <li class="navigation__list--item">
          <span><img src="../../assets/Home.svg" alt="home" /></span>
          <span class="label">Home</span>
        </li>
        <li class="navigation__list--item">
          <span><img src="../../assets/Card.svg" alt="card" /></span>
          <span class="label">Card</span>
        </li>
        <li class="navigation__list--item">
          <span><img src="../../assets/Payments.svg" alt="payment" /></span>
          <span class="label">Payments</span>
        </li>
        <li class="navigation__list--item">
          <span><img src="../../assets/Credit.svg" alt="Credit" /></span>
          <span class="label">Credit</span>
        </li>
        <li class="navigation__list--item">
          <span><img src="../../assets/Account.svg" alt="setting" /></span>
          <span class="label">Settings</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItems: [
        {
          icon: `../../assets/Home.svg`,
          itemLabel: "Home",
        },
        {
          icon: "../../assets/Card.svg",
          itemLabel: "Cards",
        },
        {
          icon: "../../assets/Payments.svg",
          itemLabel: "Payments",
        },
        {
          icon: "../../assets/Credit.svg",
          itemLabel: "Credit",
        },
        {
          icon: "../../assets/Account.svg",
          itemLabel: "Settings",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.navigation__panel {
  max-width: 340px;
  background-color: #0c365a;
  height: 100vh;
  width: 20vw;
  padding: 12px 28px;
}

.brand {
  margin: 16px 0px;
  .logo {
    padding: 4px 0px;
  }
  .tagline {
    color: #fff;
    opacity: 30%;
    font-size: 15px;
    font-family: "Open Sans", "Regular";
  }
}

.navigation__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px;
}
.navigation__list--item {
  padding: 16px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .label {
    font-size: 16px;
    color: #fff;
    margin-left: 14px;
  }
}
</style>
