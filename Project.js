class Project {
  constructor(title, image, linkGithub, linkDeployment, description) {
    this.title = title;
    this.image = image;
    this.linkGithub = linkGithub;
    this.linkDeployment = linkDeployment;
    this.description = description;
  }
  show() {
    console.log(
      this.title,
      this.image,
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
