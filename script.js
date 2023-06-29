document.addEventListener("DOMContentLoaded", () => {
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

  const addButtonClickListener = (buttonId, url) => {
    const button = document.querySelector(buttonId);
    button.addEventListener("click", () => {
      copyToClipboard(url);
    });
  };

  addButtonClickListener(
    "#button-ln",
    "https://www.linkedin.com/in/rahym-charyyev-rc/"
  );
  addButtonClickListener("#button-telegram", "https://t.me/RC_IT");
  addButtonClickListener(
    "#button-habr",
    "https://career.habr.com/rahymcharyyev"
  );
  addButtonClickListener(
    "#button-insta",
    "https://www.instagram.com/charyyev_rahym/"
  );
  addButtonClickListener("#button-github", "https://github.com/RahymCharyyev");
  addButtonClickListener("#button-futuris", "https://www.futurisfze.com/");
  addButtonClickListener("#button-zenno", "https://zenno-us.com/");
  addButtonClickListener("#button-euroasia", "https://euroasia-tm.com/");
  addButtonClickListener("#button-merjenyol", "https://merjenyol.com.tm/");
  addButtonClickListener("#button-onki", "https://onki.games/contact");
  addButtonClickListener(
    "#button-asteroids",
    "https://rahymcharyyev.github.io/asteroids-app/"
  );
  addButtonClickListener(
    "#button-spacex",
    "https://rahymcharyyev.github.io/SpaceX-Rocket-Launches-Timeline/"
  );
  addButtonClickListener(
    "#button-home",
    "https://budget-app-gules.vercel.app/"
  );
  addButtonClickListener(
    "#button-org",
    "https://rahymcharyyev.github.io/organize.me/"
  );
  addButtonClickListener("#button-star", "https://db-silk.vercel.app/");
  addButtonClickListener(
    "#button-about",
    "https://react-about-app.vercel.app/"
  );
  addButtonClickListener("#button-wpl", "https://rahymcharyyev.github.io/WPL/");
  addButtonClickListener(
    "#button-trvl",
    "https://trvl-landing-page.vercel.app/"
  );
  addButtonClickListener(
    "#button-race",
    "https://rahymcharyyev.github.io/RaceJs/"
  );
});
