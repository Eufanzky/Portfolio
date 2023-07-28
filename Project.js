export class Project {
  constructor(title, image, technologies, linkGithub, linkDeployment, description) {
    this.title = title;
    this.image = image;
    this.technologies = technologies;
    this.linkGithub = linkGithub;
    this.linkDeployment = linkDeployment;
    this.description = description;
  }
  show() {
    console.log(
      this.title,
      this.image,
      this.technologies,
      this.linkGithub,
      this.linkDeployment,
      this.description
    );
  }
  getTitle() {
    return this.title;
  }
  getImage() {
    return this.image;
  }
  getTechnologies() {
    return this.technologies;
  }
  getLinkGithub() {
    return this.linkGithub;
  }
  getLinkDeployment() {
    return this.linkDeployment;
  }
  getDescription() {
    return this.description;
  }
}


