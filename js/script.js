$(document).ready(function () {
  const botonIdioma = document.getElementById('cambioIdioma');
  let idioma = localStorage.getItem("kayuvaty_language") || "ES"; // Idioma inicial: español

  establecerIdioma(idioma);

  botonIdioma.addEventListener('click', () => {
    idioma = idioma === "ES" ? "EN" : "ES";
    establecerIdioma(idioma);
    localStorage.setItem("kayuvaty_language", idioma);
  });

  function establecerIdioma(idioma) {
    botonIdioma.textContent = idioma === "ES" ? "EN" : "ES"; // Texto del botón

    if (idioma == "ES") {
      $(".cambio_idioma_EN").hide();
      $(".cambio_idioma_ES").show();
    } else {
      $(".cambio_idioma_ES").hide();
      $(".cambio_idioma_EN").show();
    }
  }
});
