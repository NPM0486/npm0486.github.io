fetch("data.json")
.then(response => response.json())
.then(data => {
  document.getElementById("rec-score").innerHTML = data[0].score + " <span>/ 100</span>";
  document.getElementById("rec-category").innerHTML = data[0].category;
  document.getElementById("rec-img").src = data[0].icon;
  document.getElementById("mem-score").innerHTML = data[1].score + " <span>/ 100</span>";
  document.getElementById("mem-category").innerHTML = data[1].category;
  document.getElementById("mem-img").src = data[1].icon;
  document.getElementById("ver-score").innerHTML = data[2].score + " <span>/ 100</span>";
  document.getElementById("ver-category").innerHTML = data[2].category;
  document.getElementById("ver-img").src = data[2].icon;
  document.getElementById("vis-score").innerHTML = data[3].score + " <span>/ 100</span>";
  document.getElementById("vis-category").innerHTML = data[3].category;
  document.getElementById("vis-img").src = data[3].icon;
})