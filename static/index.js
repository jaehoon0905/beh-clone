const xhr = new XMLHttpRequest();

xhr.open("GET", "files.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);

    data.forEach((elem) => {
      let div = document.createElement("div");
      div.classList.add("ui-field-contain");
      let h3 = document.createElement("h3");
      h3.innerHTML = elem.date;
      elem.files.forEach((el) => {
        let a = document.createElement("a");
        a.href = el.url;
        a.dataset.ajax = "false";
        a.classList.add(
          "ui-btn ui-corner-all ui-btn-icon-left ui-icon-location"
        );
        a.innerHTML = el.title;
        div.appendChild(h3);
        div.appendChild(a);
        document.querySelector("div[data-role='content']").appendChild(div);
      });
    });
  } else {
    console.log(`[${xhr.status}] : ${xhr.statusText}`);
  }
};
