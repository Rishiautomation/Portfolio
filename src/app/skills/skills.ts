import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {

 technologies = [
  {
    name: 'Angular',
    icon: 'assets/Icons/Angular.png'
  },
  {
    name: 'Appium',
    icon: 'assets/Icons/appium.png'
  },
  {
    name: 'Apache Maven',
    icon: 'assets/Icons/Apache-Maven.png'
  },
  {
    name: 'Apache Tomcat',
    icon: 'assets/Icons/Apache-Tomcat.png'
  },
  {
    name: 'Docker',
    icon: 'assets/Icons/Docker.png'
  },
  {
    name: 'Figma',
    icon: 'assets/Icons/Figma.png'
  },
  {
    name: 'GitLab',
    icon: 'assets/Icons/GitLab.png'
  },
  {
    name: 'Gradle',
    icon: 'assets/Icons/Gradle.png'
  },
  {
    name: 'Java',
    icon: 'assets/Icons/Java.png'
  },
  {
    name: 'JavaScript',
    icon: 'assets/Icons/JavaScript.png'
  },
  {
    name: 'Jenkins',
    icon: 'assets/Icons/Jenkins.png'
  },
  {
    name: 'Playwright',
    icon: 'assets/Icons/Playwrite.png'
  },
  {
    name: 'Selenium',
    icon: 'assets/Icons/Selenium.png'
  },
  {
    name: 'Spring Boot',
    icon: 'assets/Icons/Spring.png'
  },
  {
    name: 'SQL Developer',
    icon: 'assets/Icons/SQL-Developer.png'
  }
];
}
