// const result = require("index.js");

// const scoreContainer = document.querySelector(".col-lg-8");

// scoreContainer.insertAdjacentHTML("afterbegin", htmlnew);

// console.log(result);

// public/script.js

document.addEventListener("DOMContentLoaded", async function () {
  try {
    console.log("hiiiii");
    const response = await fetch("http://localhost:3000/api/getData");
    const result = await response.json();
    console.log(result);

    // Get the container element where you want to display the data
    // if(result[0].inni)
    const htmlnew = `<div class="card-body-1">
    <div class="info">
      <div class="team">
        <div class="teamName_el namet"><p>${result[0].team1.teamName}</p></div>
        <div class="teamName_el over"><p>${result[0].inning1.runs} - ${result[0].inning1.wickets}</p></div>
        <div class="teamName_el over pp"><p>(${result[0].inning1.overs})</p></div>
      </div>

      <div class="team">
        <div class="teamName_el namet"><p>${result[0].team2.teamName}</p></div>
        <div class="teamName_el over"><p>${result[0].inning2.runs} - ${result[0].inning2.wickets}</p></div>
        <div class="teamName_el over pp"><p>(${result[0].inning2.overs})</p></div>
      </div>
    </div>
    <div class="image"></div>
  </div>`;

    const scoreContainer = document.querySelector(".col-lg-4");

    scoreContainer.insertAdjacentHTML("afterbegin", htmlnew);

    // Loop through the 'result' array and add content to the container
    // result.forEach((item) => {
    //   const div = document.createElement("div");
    //   div.innerHTML = `<strong>${item.player}</strong>: ${item.runs} runs`;
    //   container.appendChild(div);
    // });
  } catch (error) {
    console.error("Error fetching and displaying data:", error);
  }
});

document.addEventListener("DOMContentLoaded", async function () {
  try {
    console.log("hiiiii");
    const response = await fetch("http://localhost:3001/api/getData1");
    const result = await response.json();
    console.log(result);

    // Get the container element where you want to display the data
    const htmlnew = `<div class="card-body-1">
    <div class="info">
      <div class="team_unique">
        <div class="teamName_el namet"><p>${result[0].team1.teamName}</p></div>
      </div>
      <div class="team">
        <div class="teamName_el_1 namet"><p>${result[0].team2.teamName}</p></div>
        <div class="teamName_el_1 teamName_el_1_status">
          <p>${result[0].status}</p>
        </div>
      </div>
    </div>
  </div>`;

    const scoreContainer = document.querySelector(".col-lg-4");

    scoreContainer.insertAdjacentHTML("afterbegin", htmlnew);

    // Loop through the 'result' array and add content to the container
    // result.forEach((item) => {
    //   const div = document.createElement("div");
    //   div.innerHTML = `<strong>${item.player}</strong>: ${item.runs} runs`;
    //   container.appendChild(div);
    // });
  } catch (error) {
    console.error("Error fetching and displaying data:", error);
  }
});

document.addEventListener("DOMContentLoaded", async function () {
  try {
    console.log("hiiiii");
    const response = await fetch("http://localhost:3002/api/getData2");
    const result = await response.json();
    console.log(result);

    const htmlnew = `<div class="card">
        <div class="card-body">
        <a href="${result[0]._0.webURL}"><h5 class="card-title">${result[0]._0.seoTitle}</h5></a>
        </div>
      </div>`;
    const scoreContainer = document.querySelector(".col-lg-8");
    scoreContainer.insertAdjacentHTML("afterbegin", htmlnew);
    const htmlnew1 = `<div class="card">
        <div class="card-body">
        <a href="${result[0]._1.webURL}"><h5 class="card-title">${result[0]._1.seoTitle}</h5></a>
        </div>
      </div>`;
    const scoreContainer1 = document.querySelector(".col-lg-8");
    scoreContainer1.insertAdjacentHTML("afterbegin", htmlnew1);
    const htmlnew2 = `<div class="card">
        <div class="card-body">
        <a href="${result[0]._2.webURL}"><h5 class="card-title">${result[0]._2.seoTitle}</h5></a>
        </div>
      </div>`;
    const scoreContainer2 = document.querySelector(".col-lg-8");
    scoreContainer2.insertAdjacentHTML("afterbegin", htmlnew2);

    // Loop through the 'result' array and add content to the container
    // result.forEach((item) => {
    //   const div = document.createElement("div");
    //   div.innerHTML = `<strong>${item.player}</strong>: ${item.runs} runs`;
    //   container.appendChild(div);
    // });
  } catch (error) {
    console.error("Error fetching and displaying data:", error);
  }
});

document.addEventListener("DOMContentLoaded", async function () {
  try {
    console.log("hiiiii");
    const response = await fetch("http://localhost:3003/api/getData3");
    const result = await response.json();
    console.log(result);

    const htmlnew = `<div class="card-body-1">
    <a href="${result[0]._1.link}"><h5 class="card-title">${result[0]._0.title}</h5></a>
  </div>`;
    const scoreContainer = document.querySelector(".col-lg-88");
    scoreContainer.insertAdjacentHTML("afterbegin", htmlnew);
    const htmlnew1 = `<div class="card-body-1">
    <a href="${result[0]._1.link}"><h5 class="card-title">${result[0]._1.title}</h5></a>
  </div>`;
    const scoreContainer1 = document.querySelector(".col-lg-88");
    scoreContainer1.insertAdjacentHTML("afterbegin", htmlnew1);
    const htmlnew2 = `<div class="card-body-1">
    <a href="${result[0]._2.link}"><h5 class="card-title">${result[0]._2.title}</h5></a>
  </div>`;
    const scoreContainer2 = document.querySelector(".col-lg-88");
    scoreContainer2.insertAdjacentHTML("afterbegin", htmlnew2);

    // Loop through the 'result' array and add content to the container
    // result.forEach((item) => {
    //   const div = document.createElement("div");
    //   div.innerHTML = `<strong>${item.player}</strong>: ${item.runs} runs`;
    //   container.appendChild(div);
    // });
  } catch (error) {
    console.error("Error fetching and displaying data:", error);
  }
});
