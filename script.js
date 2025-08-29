let heartCount = 0;
  let coinCount = 100;
  let copyCount = 2;

  let heartCountEl = document.getElementById("heart-count");
  let coinCountEl = document.querySelector("section .flex.gap-2 div:nth-child(2) h1");
  let copyCountEl = document.querySelector("section .flex.gap-2 div:nth-child(3) h1");

  let historyCol = document.querySelector(".row-span-3");
  let clearBtn = historyCol.querySelector("button");
  let historyList = document.createElement("ul");
  historyCol.appendChild(historyList);

let heartIcons = document.querySelectorAll(".fa-heart");
  heartIcons.forEach(function (icon) {
    icon.onclick = function () {
      heartCount++;
      heartCountEl.textContent = heartCount;
      icon.classList.toggle("fa-solid");
      icon.classList.toggle("fa-regular");
      icon.classList.toggle("text-red-500");
    };
  });

  let copyButtons = document.querySelectorAll("button i.fa-copy");
  copyButtons.forEach(function (icon) {
    let btn = icon.parentElement;
    btn.onclick = function () {
      let number = btn.parentElement.querySelector("h1.text-2xl").textContent;
      navigator.clipboard.writeText(number);
      alert("Number " + number + " copied!");
      copyCount++;
      copyCountEl.textContent = copyCount + " Copy";
    };
  });