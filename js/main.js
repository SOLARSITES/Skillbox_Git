let platformLanguage =
    navigator &&
    (navigator.language ||
      navigator.browserLanguage ||
      navigator.systemLanguage ||
      navigator.userLanguage ||
      null),
  elemsRU,
  elemsEN;

if (platformLanguage.match("ru") && document.getElementsByClassName) {
  elemsRU = document.getElementsByClassName("b-text_lang_ru");
  elemsEN = document.getElementsByClassName("b-text_lang_en");

  let l = elemsEN.length;

  while (l--) {
    elemsEN[l].style.display = "none";
  }

  l = elemsRU.length;

  while (l--) {
    elemsRU[l].style.display = "block";
  }

  document.title = "Приветствую Вас!";
}
