<template>
  <div class="searchContainer">
    <p>Encontre seu Produto:</p>
    <input type="text" class="searchInput">

  </div>
</template>



<style lang="scss" scoped>
.searchContainer {
  padding: 20px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: gainsboro;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
  box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
}

.searchInput {
  width: 60vw;
  height: 50px;
  margin: 20px;
  // padding:10px;
  border-radius:10px;
  // border: solid gray 2px;
  border:0;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  background: url(@/assets/img/magnifying-glass.svg) no-repeat scroll 12px 12px;
  background-size: 25px;
  padding-left: 50px;
  font-size: 20px;
}
</style>