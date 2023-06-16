function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}
const header = document.querySelector("header");
const headerTempl = document.createElement("template");
headerTempl.innerHTML = `<div class="container-fluid">
  <a href="./index.html" class="navbar-brand text-primary">
    <img
      src="images/gp-logo.png"
      alt="logo"
      width="50px"
      class="navbar-brand"
    />
    S&R Health
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbar"
    aria-controls="navbar"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav w-100 p-4 justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="./poem.html">Poem</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./articles.html">Articles</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./statistics.html">Statistics</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="./team.html">Team</a>
    </li>
    </ul>
  </div>
</div>`;

const footer = document.querySelector("footer");
const footerTempl = document.createElement("template");
footerTempl.innerHTML = `<a href="https://github.com/Abban-Fahim/gp-project"
><i class="bi bi-github fs-4 me-3"></i
></a>
<small>Sports & Recreational Health | Abban Fahim, Talha Ijaz, Moosa Syed. </ small><a href="mailto:atm.sr.health@gmail.com"
><i class="bi bi-envelope"></i
></a>`;

header.appendChild(headerTempl.content);
footer.appendChild(footerTempl.content);

document.addEventListener(
  "scroll",
  throttle((e) => {
    if (
      document.documentElement.scrollTop >
      document.querySelector("section").clientHeight
    ) {
      header.style = "background-color:#2c343b";
    } else {
      header.style = "background-color:transparent";
    }
  }, 100)
);
