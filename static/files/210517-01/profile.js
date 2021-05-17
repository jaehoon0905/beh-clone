const xhr = [new XMLHttpRequest(), new XMLHttpRequest()];
const json = [];
xhr[0].open("GET", "user.json");
xhr[0].send();

xhr[1].open("GET", "song.json");
xhr[1].send();

// Event Handler
xhr[0].onreadystatechange = function () {
  // 서버 응답 완료 && 정상 응답
  if (xhr[0].readyState !== XMLHttpRequest.DONE) return;

  if (xhr[0].status === 200) {
    json[0] = JSON.parse(xhr[0].responseText[0]);

    document.querySelector(".profile--name").innerHTML = json[0].name;
    document.querySelector(".profile--status").innerHTML = json[0].postion;
    document.querySelector(".profile--contact").innerHTML = json[0].status;
    document.querySelector(".profile--place").innerHTML = json[0].place;
  } else {
    console.log(`[${xhr[0].status}] : ${xhr[0].statusText}`);
  }
};

xhr[1].onreadystatechange = function () {
  // 서버 응답 완료 && 정상 응답
  if (xhr[1].readyState !== XMLHttpRequest.DONE) return;

  if (xhr[1].status === 200) {
    json[1] = JSON.parse(xhr[1].responseText);
    json[1].forEach((elem) => {
      li = document.createElement("li");
      a = document.createElement("a");
      a.href = "view.html?id=" + elem.contentId;
      img = document.createElement("img");
      img.src = "files/" + elem.contentId + ".jpg";
      img.alt = elem.contentId;
      div = document.createElement("div").innerHTML = elem.name;
      div.classList.add("works--detail");
      tmp = document.createElement("span").innerHTML = elem.name;
      tmp.classList.add("works--title");
      div.appendChild(tmp);
      tmp = document.createElement("ul").innerHTML = elem.name;
      tmp.classList.add("works--tags");
      elem.tags.forEach((el) => {
        li = document.createElement("li").innerHTML = el;
        tmp.appendChild(li);
      });

      div.appendChild(tmp);
      a.appendChild(img);
      a.appendChild(div);
      li.appendChild(a);
    });
  } else {
    console.log(`[${xhr[1].status}] : ${xhr[1].statusText}`);
  }
};
