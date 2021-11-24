<template>
  <div class="credit__card-body">
    <div class="logo q-mb-md">
      <img src="../../assets/Logo_light.svg" alt="" />
    </div>
    <div class="card__details">
      <div class="name q-mb-md">Mark Henry</div>
      <div class="card__number">
        <div v-for="n in 4" :key="n" class="white-dot"></div>
        &nbsp;&nbsp;&nbsp;
        <div v-for="n in 4" :key="n" class="white-dot"></div>
        &nbsp;&nbsp;&nbsp;
        <div v-for="n in 4" :key="n" class="white-dot"></div>
        &nbsp;&nbsp;&nbsp;
        <div style="font-size: 14px; font-weight: 600">2020</div>
      </div>
      <div class="other__details">
        <div class="expiry__date">Thru: 12/20</div>
        <div class="cvv">
          <div>CVV:</div>
          <div class="star">* * *</div>
        </div>
      </div>

    </div>
             <div class="logo">
      <img src="../../assets/Visa_Logo.svg" alt="" />
    </div>
 
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.credit__card-body {
  // max-height: 248.85px;
  // max-width: 414px;
  // min-width:358px;
  background-color: #01d167;
  color: #fff;
  border-radius: 10px;
  padding: 20px 18px;
max-width:100%;
height:auto;
  .logo {
    display: flex;
    justify-content: flex-end;
  }

  .card__details {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .name {
      font-size: 24px;
      font-weight: 600;
    }
    .card__number {
      display: flex;
      align-items: center;
    }
    .other__details {
      width: 55%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      font-weight: 600;
      .cvv {
        display: flex;
        align-items: center;
        justify-content: center;
        .star {
          font-size: 24px;
          margin-left: 6px;
          margin-top: 4px;
        }
      }
    }
  }
}

.white-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #fff;
  margin: 4px;
}
</style>
