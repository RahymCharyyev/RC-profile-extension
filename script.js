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
let buttonTelega = document.querySelector("#button-telegram");
let buttonHabr = document.querySelector("#button-habr");
let buttonInsta = document.querySelector("#button-insta");
let buttonGithub = document.querySelector("#button-github");
let buttonMerjenyol = document.querySelector("#button-merjenyol");
let buttonEuroasia = document.querySelector("#button-euroasia");
let buttonAsteroids = document.querySelector("#button-asteroids");
let buttonSpaceX = document.querySelector("#button-spacex");
let buttonBeauty = document.querySelector("#button-beauty");
let buttonItstudio = document.querySelector("#button-itstudio");
let buttonGlo = document.querySelector("#button-glo");
let buttonRc = document.querySelector("#button-rc");
let buttonOrg = document.querySelector("#button-org");
let buttonRace = document.querySelector("#button-race");
let buttonTrvl = document.querySelector("#button-trvl");
buttonLn.addEventListener("click", () =>
  copyToClipboard("https://www.linkedin.com/in/rahym-charyyev-rc/")
);
buttonTelega.addEventListener("click", () =>
  copyToClipboard("https://t.me/RC_IT")
);
buttonHabr.addEventListener("click", () =>
  copyToClipboard("https://career.habr.com/rahymcharyyev")
);
buttonInsta.addEventListener("click", () =>
  copyToClipboard("https://www.instagram.com/charyyev_rahym/")
);
buttonGithub.addEventListener("click", () =>
  copyToClipboard("https://github.com/RahymCharyyev")
);
buttonMerjenyol.addEventListener("click", () =>
  copyToClipboard("https://merjenyol.com.tm/")
);
buttonAsteroids.addEventListener("click", () =>
  copyToClipboard("https://rahymcharyyev.github.io/asteroids-app/")
);
buttonSpaceX.addEventListener("click", () =>
  copyToClipboard(
    "https://rahymcharyyev.github.io/SpaceX-Rocket-Launches-Timeline/"
  )
);
buttonEuroasia.addEventListener("click", () =>
  copyToClipboard("https://euroasia-tm.com/")
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
buttonTrvl.addEventListener("click", () =>
  copyToClipboard("https://trvl-landing-page.vercel.app/")
);
