const switchBtn = document.getElementById("switch-btn");

if(localStorage.getItem("theme") == null){
  localStorage.setItem("theme", "dark");
}

let localData = localStorage.getItem("theme");


if(localData == "dark"){
  document.body.classList.add("dark-mode");
  switchBtn.checked = true;
}else if(localData == "light"){
  document.body.classList.remove("dark-mode");
  switchBtn.checked = false;
}


switchBtn.addEventListener("change", (e) => {
  if (e.currentTarget.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");

  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");

  }
});

const projects = [
  {
    name: "Portfolio Webpage",
    image: "https://img.icons8.com/nolan/512/1A6DFF/C822FF/resume.png",
    link: "/projects-for-fcc/portfolio-webpage/",
    code: "https://github.com/sahilsonvane/projects-for-fcc/tree/main/portfolio-webpage",
  },
  {
    name: "A Tribute Page",
    image:
      "https://img.icons8.com/external-topaz-kerismaker/512/external-Tribute-award-topaz-kerismaker.png",
    link: "/projects-for-fcc/a-tribute-page/",
    code: "https://github.com/sahilsonvane/projects-for-fcc/tree/main/a-tribute-page",
  },
  {
    name: "Product Landing Page",
    image:
      "https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-product-e-commerce-flaticons-flat-flat-icons-2.png",
    link: "/projects-for-fcc/product-landing-page/",
    code: "https://github.com/sahilsonvane/projects-for-fcc/tree/main/product-landing-page",
  },
  {
    name: "Penguin Scenery by Css",
    image: "https://img.icons8.com/bubbles/500/pinguin.png",
    link: "/projects-for-fcc/penguin/",
    code: "https://github.com/sahilsonvane/projects-for-fcc/tree/main/penguin",
  },
  {
    name: "Documentation Page",
    image: "https://img.icons8.com/nolan/512/view.png",
    link: "/projects-for-fcc/documentation-page/",
    code: "https://github.com/sahilsonvane/projects-for-fcc/tree/main/documentation-page",
  },
  {
    name: "Survey Form",
    image: "https://img.icons8.com/fluency/240/survey.png",
    link: "/projects-for-fcc/survey-form/",
    code: "https://github.com/sahilsonvane/projects-for-fcc/tree/main/survey-form",
  },
];
let projectGrid = document.querySelector(".project-grid");
projects.forEach((data) => {
  let projectName = data.name;
  let Image = data.image;
  let Link = data.link;
  let Code = data.code;

  projectGrid.innerHTML += `<div class="cards">
    <img
      src="${Image}"
      alt="${projectName}"
    />
    <h4>${projectName}</h4>
    <div class="buttons">
      <a href="${Link}" class="btn" target="_blank"
        >See Project</a
      >
      <a href="${Code}" class="btn" target="_blank"
        >View Code</a
      >
    </div>
  </div>`;
});