let lis = document.querySelectorAll(".m-item");
let box = document.querySelector(".m-box");

box.addEventListener("click", e => {
  if (e.target && e.target.nodeName === "LI") {
    for (let i = 0, len = lis.length; i < len; i++) {
      if (e.target === lis[i]) {
        alert(i + 1);
      }
    }
  }
});

function add() {
  lis[0].onclick = function(e) {
    lis[0].style.color = "red";
  };

  lis[1].onclick = function(e) {
    let date = new Date();
    let str = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
    box.childNodes[1].innerHTML = str;
  };

  lis[2].onclick = function(e) {
    lis[2].classList.add("fn-active");
  };

  lis[3].onclick = function(e) {
    if (!!lis[7]) {
      lis[3].parentNode.removeChild(lis[7]);
      lis = document.querySelectorAll(".m-item");
      add();
    }
  };

  lis[4].onclick = function(e) {
    window.open("https://www.taobao.com");
  };

  lis[5].onclick = function(e) {
    let size = lis.length + 1;
    lis[5].parentNode.innerHTML += '<li class="m-item">p' + size + "</li>";
    lis = document.querySelectorAll(".m-item");
    add();
  };
}

add();
