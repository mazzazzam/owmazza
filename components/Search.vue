<template>
  <div class="row my-3">
    <div class="col-md-3">
      <p>Encontre seu Produto:</p>
    </div>
    <div class="col-md-9">
      <input type="text" class="searchInput">
    </div>
    

  </div>
</template>



<style lang="scss" scoped>
.searchContainer {
  // padding: 20px;
  margin: 20px 0;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
  box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
}

.searchInput {
  width: 100%;
  height: 50px;
  // margin: 20px;
  // padding:10px;
  border-radius:10px;
  // border: solid gray 2px;
  border:0;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  background: url(@/assets/img/magnifying-glass.svg) no-repeat scroll 12px 12px;
  background-size: 25px;
  padding-left: 50px;
  font-size: 20px;
  caret-color: red;
}
</style>