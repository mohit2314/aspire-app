<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="navigation__panel">
        <div class="brand">
          <div class="logo">
            <img src="../assets/Logo.svg" alt="asprie-logo" />
          </div>
          <div class="tagline">
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </div>
        </div>
        <!--Navigation items list  -->
        <div>
          <ul class="navigation__list">
            <li
              v-for="item in navigationListItems"
              :key="item"
              class="navigation__list--item"
            >
              <span
                ><img :src="require(`../assets/${item.icon}`)" alt="home"
              /></span>
              <span class="label">{{ item.itemLabel }}</span>
            </li>
          </ul>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  components: {},

  data() {
    return {
      leftDrawerOpen: false,
      navigationListItems: [
        {
          icon: `Home.svg`,
          itemLabel: "Home",
        },
        {
          icon: "Card.svg",
          itemLabel: "Cards",
        },
        {
          icon: "Payments.svg",
          itemLabel: "Payments",
        },
        {
          icon: "Credit.svg",
          itemLabel: "Credit",
        },
        {
          icon: "Account.svg",
          itemLabel: "Settings",
        },
      ],
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
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
