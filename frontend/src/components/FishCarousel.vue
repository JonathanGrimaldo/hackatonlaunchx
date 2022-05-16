<template>
  <div class="container">
    <div class="slide">
      <div class="product-box">
        <div class="img">
          <img src="https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
        <div class="details">
          <p class="name">Ballena Jorobada</p>
          <p class="price">El gigante de Baja California</p>
        </div>
        <div class="button">
          <a href="#" class="add-btn">Ir al artículo</a>
        </div>
      </div>
      <div class="product-box">
        <div class="img">
          <img src="https://images.pexels.com/photos/1631768/pexels-photo-1631768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
        <div class="details">
          <p class="name">Tiburón Ballena</p>
          <p class="price">El pez más gradnde del mundo</p>
        </div>
        <div class="button">
          <a href="#" class="add-btn">Ir al artículo</a>
        </div>
      </div>
      <div class="product-box">
        <div class="img">
          <img src="https://images.pexels.com/photos/1817048/pexels-photo-1817048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
        <div class="details">
          <p class="name">Playa de Puerto Arista</p>
          <p class="price">Hogar de las tortugas</p>
        </div>
        <div class="button">
          <a href="#" class="add-btn">Ir al artículo</a>
        </div>
      </div>
      <div class="product-box">
        <div class="img">
          <img src="https://images.pexels.com/photos/1450362/pexels-photo-1450362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500" alt="" />
        </div>
        <div class="details">
          <p class="name">Isla Contoy</p>
          <p class="price">Santuario de Aves</p>
        </div>
        <div class="button">
          <a href="#" class="add-btn">Ir al artículo</a>
        </div>
      </div>
      <div class="product-box">
        <div class="img">
          <img src="https://images.pexels.com/photos/11060852/pexels-photo-11060852.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
        <div class="details">
          <p class="name">Ventilas Hidrotermales</p>
          <p class="price">500 especies endémicas</p>
        </div>
        <div class="button">
          <a href="#" class="add-btn">Ir al artículo</a>
        </div>
      </div>
      <div class="product-box">
        <div class="img">
          <img src="https://images.pexels.com/photos/4673685/pexels-photo-4673685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
        <div class="details">
          <p class="name">Pez León</p>
          <p class="price">Una terrible especie invasora</p>
        </div>
        <div class="button">
          <a href="#" class="add-btn">Ir al artículo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FishCarousel",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap");

/* --------------Reset-------------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/* --------------Common-------------- */
body {
  width: 100%;
  min-height: 100vh;
  background: rgb(206, 205, 228);
  background: radial-gradient(
    circle,
    rgba(206, 205, 228, 1) 0%,
    rgba(191, 191, 250, 1) 42%,
    rgb(164, 226, 238) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;
}

p {
  color: #000000;
  text-align: center;
}

/* --------------Container-------------- */
.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  perspective: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* ---------Slide--------- */
.container .slide {
  width: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotation 20s infinite linear;
}

.container .slide:hover {
  animation-play-state: paused;
}

/* Horizontal Rotation Animation */
@keyframes rotation {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-360deg);
  }
}

/* ---------Product Box--------- */
.container .slide .product-box {
  max-width: 450px;
  position: absolute;
  background: rgb(206, 205, 228);
  background: radial-gradient(
    circle,
    rgba(206, 205, 228, 1) 0%,
    rgba(154, 154, 255, 1) 42%,
    rgba(24, 161, 189, 1) 100%
  );
  padding: 20px;
  border-radius: 20px;
  margin: 0 10px;
}

.container .slide .product-box:nth-child(1) {
  transform: rotateY(60deg) translateZ(300px);
}

.container .slide .product-box:nth-child(2) {
  transform: rotateY(120deg) translateZ(300px);
}

.container .slide .product-box:nth-child(3) {
  transform: rotateY(180deg) translateZ(300px);
}

.container .slide .product-box:nth-child(4) {
  transform: rotateY(240deg) translateZ(300px);
}

.container .slide .product-box:nth-child(5) {
  transform: rotateY(300deg) translateZ(300px);
}

.container .slide .product-box:nth-child(6) {
  transform: rotateY(360deg) translateZ(300px);
}

/* Image */
.container .product-box .img {
  max-width: 250px;
  max-height: 300px;
  height:250px;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 15px;
  transition: all 0.5s ease-in-out;
}

.container .product-box:hover .img {
  transform: scale(0.95);
}

.container .product-box .img > img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

/* Details */
.container .product-box .details {
  margin-bottom: 10px;
}

.container .product-box .details .name {
  font-size: 1rem;
}

/* Button */
.container .product-box .button {
  text-align: center;
}

.container .product-box .button .add-btn {
  display: block;
  background-color: #000000;
  padding: 10px 15px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
}

.container .product-box .button:hover .add-btn,
.container .product-box .button .add-btn:hover {
  transform: rotateX(360deg);
  background-color: #ffffff;
  color: #000000;
}

/* --------------Media Queries-------------- */
@media (max-width: 768px) {
  /* ---------Container--------- */
  .container {
    overflow-y: auto;
  }

  /* ---Slide--- */
  /* Vertical Rotation Animation */
  @keyframes rotation {
    0% {
      transform: rotateX(0deg);
    }

    100% {
      transform: rotateX(-360deg);
    }
  }

  /* ---Product Box--- */
  .container .slide .product-box {
    max-width: 350px;
  }

  .container .slide .product-box:nth-child(1) {
    transform: rotateX(60deg) translateZ(400px);
  }

  .container .slide .product-box:nth-child(2) {
    transform: rotateX(120deg) translateZ(400px);
  }

  .container .slide .product-box:nth-child(3) {
    transform: rotateX(180deg) translateZ(400px);
  }

  .container .slide .product-box:nth-child(4) {
    transform: rotateX(240deg) translateZ(400px);
  }

  .container .slide .product-box:nth-child(5) {
    transform: rotateX(300deg) translateZ(400px);
  }

  .container .slide .product-box:nth-child(6) {
    transform: rotateX(360deg) translateZ(400px);
  }
}

@media (max-width: 550px) {
  /* ---Product Box--- */
  .container .slide .product-box {
    max-width: 250px;
  }
}
</style>
