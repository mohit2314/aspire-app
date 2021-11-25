<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-xs" bordered>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-input outlined label="Search loan" dense>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-toolbar-title class=""> </q-toolbar-title>

        <div class="row" style="border-right: 1px solid grey">
          <div
            class="bg-grey-5 q-pa-xs q-pt-xs q-mr-md notification"
            style="border-radius: 30%"
          >
            <img
              class="q-pt-xs q-pl-xs q-pr-xs"
              src="../assets/notifications_white_24dp.svg"
              alt=""
            />
          </div>
          <div
            v-if="isLoggedIn"
            class="bg-grey-5 q-pa-xs q-pt-xs q-mr-md"
            style="border-radius: 30%; cursor: pointer"
            title="Logout"
            @click="logout"
          >
            <img
              class="q-pt-xs q-pl-xs q-pr-xs"
              src="../assets/power_settings_new_white_24dp.svg"
              alt=""
            />
          </div>
        </div>
        <div
          class="q-pa-xs q-ml-xs"
          style="border-radius: 50%; cursor: pointer"
        >
          <img
            height="44"
            src="https://cdn.quasar.dev/team/razvan_stoenescu.jpeg"
            style="border-radius: 50%"
            alt=""
          />
        </div>
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
      <router-view class="main-section" />
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
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
   
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/');
    }
  },
};
</script>
<style lang="scss">
.navigation__panel {
  max-width: 340px;
  background-color: #0c365a;
  height: 100%;
  width: 300px;
  padding: 12px 28px;
  overflow-x: hidden;
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
.main-section {
  padding: 40px 80px;
}

@media (max-width:600px){
  .main-section{
    padding: 0px !important;
  }
  .notification{
    display: none !important;
  }
}
</style>
