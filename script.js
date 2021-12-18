const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

let buttonLn = document.querySelector("#button-ln");
let buttonInsta = document.querySelector("#button-insta");
let buttonGithub = document.querySelector("#button-github");
let buttonBeauty = document.querySelector("#button-beauty");
let buttonItstudio = document.querySelector("#button-itstudio");
let buttonGlo = document.querySelector("#button-glo");
let buttonRc = document.querySelector("#button-rc");
let buttonOrg = document.querySelector("#button-org");
let buttonRace = document.querySelector("#button-race");
buttonLn.addEventListener("click", () =>
  copyToClipboard("https://www.linkedin.com/in/rahym-charyyev-451b19214/")
);
buttonInsta.addEventListener("click", () =>
  copyToClipboard("https://www.instagram.com/charyyev_rahym/")
);
buttonGithub.addEventListener("click", () =>
  copyToClipboard("https://github.com/RahymCharyyev")
);
buttonBeauty.addEventListener("click", () =>
  copyToClipboard("https://rahymcharyyev.github.io/Beauty/")
);
buttonItstudio.addEventListener("click", () =>
  copyToClipboard("https://rahymcharyyev.github.io/IT_studio/")
);
buttonGlo.addEventListener("click", () =>
  copyToClipboard("https://rahymcharyyev.github.io/Glo_academy/")
);
buttonRc.addEventListener("click", () =>
  copyToClipboard("https://rahymcharyyev.github.io/RC_portfolio/")
);
buttonOrg.addEventListener("click", () =>
  copyToClipboard("https://rahymcharyyev.github.io/organize.me/")
);
buttonRace.addEventListener("click", () =>
  copyToClipboard("https://rahymcharyyev.github.io/RaceJs/")
);
