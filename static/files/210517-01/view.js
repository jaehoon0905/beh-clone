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
  param = { id: 1 };
}
const xhr = new XMLHttpRequest();
const json = [];

xhr.open("GET", "song.json");
xhr.send();

xhr.onreadystatechange = function () {
  // 서버 응답 완료 && 정상 응답
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  if (xhr.status === 200) {
    json = JSON.parse(xhr.responseText);
    json.forEach((elem) => {
      if (elem.contentId === param.id) {
        document.title = elem.title;
        document.querySelector(".content--title").innerHTML = elem.title;
        document.querySelector(".content--writer").innerHTML = elem.writer;
        let desc = document.createElement("div");
        desc.classList.add("desc--content");
        desc.classList.add("js-closed");
        desc.innerHTML = elem.lyric;
        document.querySelector(".content--desc").appendChild(desc);

        let credit = document.createElement("div");
        credit.classList.add("credit--content");
        credit.classList.add("js-open");
        credit.innerHTML = elem.credit;
        document.querySelector(".content--credit").appendChild(credit);

        let tag = document.createElement("ul");
        tag.innerHTML = elem.name;
        tag.classList.add("content--tags");
        elem.tags.forEach((el) => {
          let tagLi = document.createElement("li");
          tagLi.innerHTML = el;
          tag.appendChild(tagLi);
        });
        document.querySelector(".content").appendChild(tag);

        let music = document.querySelector(".player__albumImg");
        music.dataset.src = elem.musicSrc;
        music.style.backgroundImage = "url('" + musicArt + "');";
      }
    });
  } else {
    console.log(`[${xhr.status}] : ${xhr.statusText}`);
  }
};
