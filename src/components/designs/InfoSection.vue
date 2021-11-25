<template>
  <div class="info__section">
    <div class="balance__col">
      <div class="label mobile__font-color">Available Balance</div>
      <div class="balance__info">
        <div class="currency__badge"><span>$$</span></div>
        <div class="amount mobile__font-size">3,000</div>
      </div>
    </div>
    <!-- CTA Btn -->
    <div class="new__card--cta">
      <div class="q-mt-lg flex align-center new__card-link">
      <img  src="../../assets/box.svg" alt="" class="q-mr-xs "> <span>New card</span></div>
<q-btn style="background: #325BAF; color: white; font-size:13px;"  class="new__card-btn" icon="add_circle" label="new card"></q-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.info__section{
  min-width: 414px;
  max-width: 906px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
width: 100%;
}

.balance__col{
    display: flex;
    flex-direction: column;
.label{
    font-size: 14px;
    color: #222222;
    
}
    .balance__info{
        display: flex;
        align-items: center;
        .currency__badge{
            text-align: center;
            background-color: #01D167;
            padding: 2px;
            color: #fff;
            border-radius: 4px;
            font-size: 13px;
            width: 40px;
            height: 24px;
            margin-right: 10px;
            
            // font-weight: 500;
        }

        .amount{
font-size: 26px;
font-weight: 600;
        }
    }
}


</style>
