<template>
<div style="color:red;">
    {{portfolioID}}
</div>
</template>

<script>
export default {
  data() {
    return {
        portfolioID:''
    };
  },
  mounted(){
      this.portfolioID = sessionStorage.getItem('porfolio');
      console.log(this.portfolioID);
  }
};
</script>