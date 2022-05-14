<template>
    <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <i class="fa-solid fa-bars"></i>
    </label>
    <router-link to="/" class="enlace"
      ><img
        src=""
        alt="Logo"
        class="logo"
    /></router-link>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/about">Sobre Nosotros</router-link></li>
      <li><router-link to="/article">Artículos</router-link></li>
    </ul>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Lato:ital,wght@0,100;1,100&display=swap');
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

body{
  background-color: #B1D1F1;
}

#app {
  font-family: 'Fjalla One', sans-serif;
}

.enlace {
  position: absolute;
  padding: 20px 50px;
}

.logo {
  height: 70px;
  width: 95px;
  margin-top: -15px;
}

nav {
  background-color: #011638;
  height: 80px;
  width: 100%;
}

nav ul {
  float: right;
  margin-right: 20px;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}

nav ul li a {
  color: white;
  font-size: 18px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
}

nav ul li a:hover {
  background: #E3B505;
}

nav a.router-link-exact-active:not(.enlace) {
  background-color: #FF3E41;
  color: white;
}

nav a.router-link-exact-active:hover:not(.enlace) {
  background: #FF3E41;
  transition: 0.5s;
}

.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

#check:checked ~ ul {
  left: 0;
}


@media (max-width: 952px) {
  .enlace {
    padding-left: 20px;
  }
  nav ul li a {
    font-size: 16px;
  }
}

@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }
  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #22333b;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }

  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }

  nav ul li a {
    font-size: 20px;
  }

  li a:hover,
  li a.active {
    background: none;
    color: #f0803c;
  }

  #check:checked ~ ul {
    left: 0;
  }
}
</style>