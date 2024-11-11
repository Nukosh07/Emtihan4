var moon = prompt("1-ден 12-ке дейн сан танда");

switch (moon) {
  case "1":
    order += "Қантар";
    break;
  case "2":
    order += "Ақпан";
    break;
  case "3":
    order += "Наурыз";
    break;
  case "4":
    order += "Сауыр";
    break;
  case "5":
    order += "Май";
    break;
  case "6":
    order += "Маусым";
    break;
  case "7":
    order += "Шылде";
    break;
  case "8":
    order += "Тамыз";
    break;
  case "9":
    order += "Қыркуйек";
    break;
  case "10":
    order += "Казан";
    break;
  case "11":
    order += "Караша";
    break;
  case "12":
    order += "Желтоксан";
    break;
  default:
    alert("Qate variant");
    isCorrect = false;
}
