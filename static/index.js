const xhr = new XMLHttpRequest();
const json = [];
xhr.open("GET", "files.json");
xhr.send();

xhr.onreadystatechange = function () {
  // 서버 응답 완료 && 정상 응답
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  if (xhr.status === 200) {
    json = JSON.parse(xhr.responseText);

    json.forEach((elem) => {
      h3 = document.createElement(h3);
      h3.innerHTML = elem.date;
      elem.files.forEach((el) => {
        a = document.createElement(a);
        a.href = el.url;
        a.dataset.ajax = "false";
        a.classList.add(
          "ui-btn ui-corner-all ui-btn-icon-left ui-icon-location"
        );
        a.innerHTML = el.title;
        h3.appendChild(a);
      });
    });
  } else {
    console.log(`[${xhr.status}] : ${xhr.statusText}`);
  }
};
