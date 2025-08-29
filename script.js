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

  