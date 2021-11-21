<template>
  <div class="account__info-card">
      <div class="personal__details">
          <div class="account__avtar">
<img src="../assets/Account.svg"  alt="">
</div>
<div class=" q-pa-lg">
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

<div class="account__detail-cards">
<div class="detail-card">
<div class="label text-bold ">
Loan amount
</div>
<div class="card-row">
<div class="icon q-mt-md">
<img src="../assets/Card.svg" alt="">
</div>
<div class="q-ml-md">
   <span class="text-h6"> S$  {{ loanAmount|| '- - -'}}</span>
</div>
</div>
</div>
<div class="detail-card">
<div class="label text-bold ">
Amount Paid
</div>
<div class="card-row">
<div class="icon q-mt-md bg-indigo-2 " >
<img src="../assets/Credit.svg"  alt="">
</div>
<div class="q-ml-md">
   <span class="text-h6"> S$  {{ loanAmount|| '- - -'}}</span>
</div>
</div>
</div>
<div class="detail-card">
<div class="label text-bold ">
Amount Remaining
</div>
<div class="card-row">
<div class="icon q-mt-md bg-red-2">
<img src="../assets/Payments.svg" alt="">
</div>
<div class="q-ml-md">
   <span class="text-h6"> S$  {{ loanAmount|| '- - -'}}</span>
</div>
</div>
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
.personal__details{
    display: flex;
    width: 40%;
}

.account__detail-cards{
    width: 100%;
display: flex;
justify-content: space-around;
    .detail-card{
        border: 1px solid #0000001F;
        border-radius: 16px;
        padding: 16px;
        width: 162px;
        height: 122px;

        .card-row{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

}
.icon{
    background-color: #DDFFEC;
    height: 52px;
    width: 52px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>