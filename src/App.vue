<script>
import HeaderView from "./views/HeaderView.vue";
import FilmesAPI from "@/api/filmes";
const filmeApi = new FilmesAPI();
export default {
  components: { HeaderView },
  props: {
    filmes: Object,
    quantidade: {
      type: Number,
      default: 4,
    },
    titulo: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <HeaderView />

  <main>
    {{ titulo }}

    <h2>Destaques</h2>
    <div class="row">
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
    </div>

    <h2>Filmes</h2>
    <div class="row">
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
    </div>

    <h2>Séries</h2>
    <div class="row">
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
      <img src="./assets/imagem.jpg" alt="filme" />
    </div>
  </main>
</template>

<style>
.container {
  display: flex;
}

img {
  width: 40%;
  z-index: 2;
  width: 300px;
  margin: 20px;
}

.row {
  display: flex;
  overflow-y: auto;
}
</style>
