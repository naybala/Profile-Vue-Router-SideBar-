<template>
	<main id="setting-page">
		<div class="themes-container">
              <h3>switch theme</h3>
              <div class="theme-toggler" @click="themeToggler">
                  <span>light</span>
                  <span class="toggler"></span>
                  <span>dark</span>
              </div>

              <h3>pick an acent color</h3>
              <div class="theme-colors">
                  <div class="color" style="background:#3e6ff4"></div>
                  <div class="color" style="background:#0044fd"></div>
                  <div class="color" style="background:#27ae60"></div>
                  <div class="color" style="background:#00ee63"></div>
                  <div class="color" style="background:#0fb9b1"></div>
                  <div class="color" style="background:#00fff2"></div>
                  <div class="color" style="background:#ceb244"></div>
                  <div class="color" style="background:#ffcc00"></div>
                  <div class="color" style="background:#ac354c"></div>
                  <div class="color" style="background:#ff0033"></div>
                  <div class="color" style="background:#e84393"></div>
                  <div class="color" style="background:#baee00"></div>
                  <div class="color" style="background:#914b6c"></div>
                  <div class="color" style="background:#fc07ef"></div>
              </div>
              <br>
              <h5>Comming Soon.....</h5>
            </div>
	</main>
</template>

<script>
export default {
  methods:{
    themeToggler(){
      let themeToggler = document.querySelector('.theme-toggler');
      let activeDark = document.querySelector('.router-link-exact-active');
      let toastAlert =document.querySelector('#cookie')
        themeToggler.classList.toggle('activeToggle');
          if (themeToggler.classList.contains('activeToggle')) {
              document.body.classList.add('activeDark');
              activeDark.style.backgroundColor = "#242f3f";
              localStorage.setItem("dark", "1");
              toastAlert.classList.add('dark');
          } else {
              document.body.classList.remove('activeDark');
              activeDark.style.backgroundColor = "var(--light)";
              localStorage.setItem("dark", "0");
              toastAlert.classList.remove('dark');
          }
    },
  }
}
</script>

<style scoped>
.themes-container {
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  /* position: fixed;
  top: 100;
  left: -100%; */
  background: rgb(143, 143, 150);
  height: 75vh;
  width: 550px;
  z-index: 1000;
  text-align: right;
  padding: 20px;
  border-radius: 1rem;
  transition: all 0.7s ease;
}
.themes-container h3 {
  color: var(--first-color);
  text-align: center;
  padding: 2px 0;
  margin: 20px 0;
}

.themes-container .theme-toggler {
  display: flex;
  align-items: center;
  justify-content: center;
}

.themes-container .theme-toggler .toggler {
  height: 40px;
  width: 100px;
  border-radius: 50px;
  background: rgb(89, 89, 95);
  position: relative;
  cursor: pointer;
  margin: 0 10px;
}

.themes-container .theme-toggler .toggler::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: rgb(233, 228, 228);
  transition: .2s linear;
}

.themes-container .theme-toggler.activeToggle .toggler::before {
  left: 65px;
}

.themes-container .theme-colors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.themes-container .theme-colors .color {
  border-radius: 5px;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.themes-container .theme-colors .color:hover {
  opacity: .5;
}
</style>