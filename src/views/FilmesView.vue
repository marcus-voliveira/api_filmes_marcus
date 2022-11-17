<script>
const axios = "axios";

const options = {
  method: "GET",
  url: "",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
</script>

<template>asdasdasjpp</template>

<style></style>
