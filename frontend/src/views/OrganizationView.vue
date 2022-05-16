<template>
  <h1>Nombre de la Organización</h1>
  <div class="image">
    <img
      src="https://images.pexels.com/photos/3157890/pexels-photo-3157890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Santuario marino"
    />
  </div>
  <div class="text-container">
    <p class="left">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod officia
      quasi aut amet, vero nostrum soluta, nulla ratione, quidem animi et iure
      repellendus! Velit, culpa architecto tempore quae commodi delectus. Beatae
      laudantium nemo eveniet necessitatibus quibusdam architecto porro,
      exercitationem tenetur laboriosam rem quaerat molestias neque autem
      repudiandae est modi ea? Possimus ad cupiditate, non nam nesciunt nulla
      aliquam ex! Minima!
    </p>
    <p class="right">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati nemo
      molestias doloremque voluptate laborum tempore quasi consequatur enim
      corrupti! Tempora libero accusantium repellat porro voluptate quidem,
      velit sit voluptas alias. Explicabo similique excepturi libero beatae ut
      accusamus, exercitationem, delectus sapiente odio in nemo deleniti non
      ratione debitis ullam voluptatibus. Laboriosam, quam. Quis, rerum?
      Pariatur aspernatur repellat quas illo iusto error!
    </p>
  </div>
</template>

<style scoped>
html {
  font-family: "Fjalla One", sans-serif;
}
h1 {
  margin: 15px auto;
  text-transform: capitalize;
  text-align: center;
  color: #011638;
}
p {
  font-size: 20px;
}
.image {
  width: 40%;
  margin: 25px auto;
  height: 40%;
}
.image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.text-container {
  display: flex;
  flex-flow: row wrap;
  width: 90%;
  margin: 35px auto;
}
.left {
  width: 45%;
  text-align: justify;
  margin-right: auto;
}
.right {
  width: 45%;
  text-align: justify;
  margin-left: auto;
  margin-top: 15%;
}
@media (max-width: 858px) {
  .image {
    width: 60%;
    margin: 15px auto;
    height: 60%;
  }
  .image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .left {
    width: 100%;
    text-align: center;
    margin: 10px auto;
  }
  .right {
    width: 100%;
    text-align: center;
    margin-left: auto;
    margin: 10px auto;
  }
}
</style>  