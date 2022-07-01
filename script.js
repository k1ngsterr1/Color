function changeColor() {
  let eblan = document.getElementById("eblan");
  let colorText = document.getElementById("color");
  let colorArray = [
    "A",
    "B",
    "C",
    "D",
    "F",
    "E",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  var hexcode = "";

  for (var i = 0; i < 6; i++) {
    var random_index = Math.floor(Math.random() * colorArray.length);

    hexcode += colorArray[random_index];
  }
  document.getElementById("color").innerHTML = hexcode;
  document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}
