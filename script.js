import { Project } from "./Project";

const createProjectSlides = () => {
  const projectRickAndMorty = new Project(
    "Rick And Morty App",
    "./src/img/rick-and-morty.png",
    "https://github.com/Eufanzky/Rick-and-Morty-App",
    "not available :v", //TODO include deployment links,
    "Rick and Morty App is a website created using Reactjs, which includes a list of all characters from the series Rick and Morty, and it also includes a memory game."
  );
  const projectCalculator = new Project(
    "Calculator",
    "./src/img/calculator.png",
    "https://eufanzky.github.io/calculator-app/",
    "not available yet :v",
    "Calculator is a website created with React js, which shows a responsive calculator with basic operations."
  );
  const projectTicTacToe = new Project(
    "Tic Tac Toe",
    "./src/img/tic-tac-toe.png",
    "https://eufanzky.github.io/tic-Tac-Toe/",
    "link is not available, come soon later :D",
    "Tic Tac Toe is a website made with HTML, CSS and Vanilla Javascript, the purpose of this project was to improve my Javascript skills, and it helped me manage in a better ways the way I made projects."
  );
  const projectClockTime = new Project(
    "Clock Time",
    "./src/img/clockTime.png",
    "https://eufanzky.github.io/Clock-Time/",
    "the link will be available sooner",
    "Clock Time is a web application which includes time management tools wich includes Timer, Chronometer and Pomodoro. This website has been made using HTML, CSS and Javascript."
  );
  const projectPassWordGenerator = new Project(
    "Password Generator",
    "./src/img/passwordGenerator.png",
    "https://eufanzky.github.io/password-generator/",
    "Wait :)",
    "Password Generator is a simple website which generates passwords wandomly with random characters. You can also select the size of the password you want to generate."
  );

  const allProjects = [
    projectRickAndMorty,
    projectTicTacToe,
    projectCalculator,
    projectPassWordGenerator,
    projectClockTime,
  ];
  // <div class="project-container">
  //   <figure class="project-figure">
  //     <img class="project-figure__image" src="" />
  //   </figure>
  //   <h3 class="project__title">Title</h3>
  //   <p class="project__description">All the desciption comes here</p>
  //   <div class="project-links-div">
  //     <a class="project-links__github-link" href="">
  //       Github ->
  //     </a>
  //     <a class="project-links__deployment-link" href="">
  //       Deploy ->
  //     </a>
  //   </div>
  // </div>;
  //creating the html
  const projectsSlides = document.querySelector(".projects-slide");
  for (let i = 0; i < allProjects.length; i++) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const projectFigure = document.createElement("figure");
    projectFigure.classList.add("project-figure");
    const projectImage = document.createElement("img");
    projectImage.classList.add("project-figure-image");
    projectImage.src = allProjects[i].getImage();
    projectFigure.appendChild(projectImage)

    const h3 = document.createElement("h3");
    h3.classList.add("project__title");
    const description = document.createElement("p");
    description.classList.add("project__description");
    description.innerText = allProjects[i].getDescription();

    const projectLinksDiv = document.createElement("div");
    projectLinksDiv.classList.add("project-links-div");
    const linkGithub = document.createElement("a");
    linkGithub.href = allProjects[i].getLinkGithub();
    const linkDeployment = document.createElement("a");
    linkDeployment = allProjects[i].getLinkDeployment();
    projectLinksDiv.append(linkGithub, linkDeployment);

    projectContainer.append(projectFigure, h3, description, projectLinksDiv);

    projectsSlides.appendChild(projectContainer);
  }
};


createProjectSlides();
