<template>
  <div class="account__info-card">
<div class="account__avtar">
<img src="../assets/Account.svg"  alt="">
</div>
<div class="personal__details q-pa-lg">
    <div class="name text-h6 text-indigo-10 q-mb-md">
        Mohit Patel
    </div>
    <div class="acc-no text-bold text-grey-8">
        Account no: xxxx xxxx 1234
    </div>
    <div class="date text-grey">
        Member since : 20 May,2021
    </div>

</div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.account__info-card{
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  margin-top: 16px;
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
.account__avtar{
background-color: #0000001F;
border-radius: 50%;
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
}

}

</style>