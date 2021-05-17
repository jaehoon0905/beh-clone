let param;

if (location.href.split("?").length > 1) {
  param = JSON.parse(
    '{"' +
      decodeURI(
        location.href.split("?")[1].replace(/&/g, '","').replace(/=/g, '":"')
      ) +
      '"}'
  );
} else {
  param = { uId: 1 };
}

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
    json[0] = JSON.parse(xhr[0].responseText)[param.uId];

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
      if (elem.contentId > 0) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "view.html?id=" + elem.contentId;
        let img = document.createElement("div");
        img.classList.add("works--img");
        img.style.backgroundImage = "url('" + elem.contentId + "');";
        let div = document.createElement("div");
        div.classList.add("works--detail");
        let tmp = document.createElement("span");
        tmp.innerHTML = elem.title;
        tmp.classList.add("works--title");
        div.appendChild(tmp);
        tmp = document.createElement("ul");
        tmp.classList.add("works--tags");
        elem.tags.forEach((el) => {
          let tagLi = document.createElement("li");
          tagLi.innerHTML = el;
          tmp.appendChild(tagLi);
        });
        div.appendChild(tmp);
        a.appendChild(img);
        a.appendChild(div);
        li.appendChild(a);
        document.querySelector(".works").appendChild(li);
      }
    });
  } else {
    console.log(`[${xhr[1].status}] : ${xhr[1].statusText}`);
  }
};
