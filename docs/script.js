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
const headerTemp = document.createElement("template");
headerTemp.innerHTML = `<div class="container-fluid">
  <a href="/gp-project" class="navbar-brand text-primary">
    <img
      src="images/gp-logo.png"
      alt="logo"
      width="50px"
      height="50px"
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
        <a class="nav-link" href="/gp-project">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./poem.html">Poem</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./form.html">Form</a>
      </li>
      </li>
    </ul>
  </div>
</div>`;

header.appendChild(headerTemp.content);

document.addEventListener(
  "scroll",
  throttle((e) => {
    console.log(
      document.documentElement.scrollTop,
      document.querySelector("section").clientHeight
    );
    if (
      document.documentElement.scrollTop >
      document.querySelector("section").clientHeight
    ) {
      header.style = "background-color:#212529";
    } else {
      header.style = "background-color:transparent";
    }
  }, 100)
);
