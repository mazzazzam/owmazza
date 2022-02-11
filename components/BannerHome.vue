<template>
  <div>
    <div class="slidershow middle">

      <div class="slides">

        <input type="radio" name="r" id="r1" checked>
        <input type="radio" name="r" id="r2">
        <input type="radio" name="r" id="r3">
        <input type="radio" name="r" id="r4">
        <input type="radio" name="r" id="r5">


        <div class="slide s1">
          <img src="@/assets/img/banner1.jpg" alt="banner1">
        </div>
        
        <div class="slide">
          <img src="@/assets/img/banner1.jpg" alt="banner1">
        </div>

        <div class="slide">
          <img src="@/assets/img/banner1.jpg" alt="banner1">
        </div>

        <div class="slide">
          <img src="@/assets/img/banner1.jpg" alt="banner1">
        </div>

        <div class="slide">
          <img src="@/assets/img/banner1.jpg" alt="banner1">
        </div>

      </div>

      <div class="navigation">
        <label for="r1" class="bar"></label>
        <label for="r2" class="bar"></label>
        <label for="r3" class="bar"></label>
        <label for="r4" class="bar"></label>
        <label for="r5" class="bar"></label>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

.slidershow {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.middle {
  position: relative;
}

.navigation {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.bar {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid white;
  margin: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: white;
  }

  &:active {
    background: white;
  }
}

input[name="r"] {
  position: absolute;
  visibility: hidden;
}

.slides {
  width: 500%;
  height: 100%;
  display: flex;
}

.slide {
  width: 20%;
  transition: 0.5s;

  img {
    width: 100%;
    height: 100%;
  }
}

#r1:checked ~ .s1 {
  margin-left: 0;
}

#r2:checked ~ .s1 {
  margin-left: -20%;
}

#r3:checked ~ .s1 {
  margin-left: -40%;
}

#r4:checked ~ .s1 {
  margin-left: -60%;
}

#r5:checked ~ .s1 {
  margin-left: -80%;
}
</style>