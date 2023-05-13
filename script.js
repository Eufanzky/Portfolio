class Project {
  constructor(title, image, link) {
    this.title = title;
    this.image = image;
    this.link = link;
  }
  show() {
    console.log(this.title, this.image, this.link);
  }
  getTitle() {
    return this.title;
  }
  getImage() {
    return this.image;
  }
  getLink() {
    return this.link;
  }
}

const createProjectSlides = () => {
  const projectRickAndMorty = new Project(
    "Rick And Morty App",
    "./src/img/rick-and-morty.png",
    "https://github.com/Eufanzky/Rick-and-Morty-App"
  );
  const projectCalculator = new Project(
    "Calculator",
    "./src/img/calculator.png",
    "https://eufanzky.github.io/calculator-app/"
  );
  const projectTicTacToe = new Project(
    "Tic Tac Toe",
    "./src/img/tic-tac-toe.png",
    "https://eufanzky.github.io/tic-Tac-Toe/"
  );
  const projectClockTime = new Project(
    "Clock Time",
    "./src/img/clockTime.png",
    "https://eufanzky.github.io/Clock-Time/"
  );
  const projectPassWordGenerator = new Project(
    "Password Generator",
    "./src/img/passwordGenerator.png",
    "https://eufanzky.github.io/password-generator/"
  );

  const allProjects = [
    projectRickAndMorty,
    projectTicTacToe,
    projectCalculator,
    projectPassWordGenerator,
    projectClockTime,
  ];

  //creating the html
  const projectsSlides = document.querySelector(".projects-slide");
  for (let i = 0; i < allProjects.length; i++) {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const divForImage = document.createElement("div");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = `${allProjects[i].getImage()}`;
    figure.appendChild(img)
    divForImage.appendChild(figure);
    const h3 = document.createElement("h3");
    h3.innerHTML = `${allProjects[i].getTitle()}`;
    const link = document.createElement("a");
    link.setContent = "Know More!";
    link.href = `${allProjects[i].getLink()}`;
    projectContainer.append(divForImage, h3, link);

    projectsSlides.appendChild(projectContainer);
  }
};
createProjectSlides();