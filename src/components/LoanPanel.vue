<template>
 <div class="loan__panel">
<div class="no__transaction">
  <div>  <img height="300" width="400" src="https://image.freepik.com/free-vector/plain-credit-card-concept-illustration_114360-199.jpg" alt="">
</div>
<div class="text-h6 text-grey-8">
    No Transactions
</div>
</div>
 </div>
</template>

<script>
export default {
data(){
    return {
      
    }
}
}
</script>

<style lang="scss">
.loan__panel{
    width: 60%;
      border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px #00000014;
  margin-top: 16px;
  display: flex;
  padding: 28px;

 overflow: hidden;
}

.no__transaction{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>