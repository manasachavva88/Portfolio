import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {
  private textIndex: number = 0;
  private texts: string[] = [];
  public typingText: string = '';
  images: any = [];
  contactImages: any = [];
  profileForm: any;
  skillContent: any;
  projects: any;
  Experience: any;
  constructor(private formbuilder: UntypedFormBuilder, private router: Router) {
    this.texts = [
      'FrontEnd Developer',
      'Designer',
      'Creative Thinker',
      'UI developer',
    ];
  }

  ngOnInit(): void {
    this.profileForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: [''],
      message: [''],
    });
    this.typingText = this.texts[this.textIndex];
    this.textIndex = (this.textIndex + 1) % this.texts.length;
    setInterval(() => {
      this.typingText = this.texts[this.textIndex];
      this.textIndex = (this.textIndex + 1) % this.texts.length;
    }, 3000); // Change text every 3 seconds

    this.images = [
      'assets/html.png',
      'assets/css.png',
      'assets/Angular.png',
      'assets/js.png',
      'assets/typescript.png',
      'assets/python.png',
      'assets/java.png',
      'assets/github.png',
      'assets/visualstudio.png',
      'assets/postgres.png',
    ];
    this.contactImages = [
      // {
      //   image: 'assets/callphone.png',
      //   content: '+91 728599XXXX',
      // },
      {
        image: 'assets/Email1.png',
        content: 'chavvamanasa@gmail.com',
      },
      {
        image: 'assets/location1.png',
        content: 'Hyderabad',
      },
    ];
    this.skillContent = [
      {
        skill: 'Web Design and Development',
        content:
          'Designed and developed responsive websites using HTML, CSS, and JavaScript to create seamless user experiences. Leveraged TypeScript to enhance code quality and maintainability. Developed dynamic web applications with Angular, integrating Material Design components for modern UI. Proficient in RESTful API integration and performance optimization for optimal load times.',
      },
      {
        skill: 'Responsive Web Design',
        content:
          'With a focus on mobile-first design, I excel in creating websites that adapt elegantly to various devices. Leveraging fluid grids and CSS media queries, I ensure seamless transitions between screen sizes while maintaining a consistent and visually appealing user experience. By prioritizing cross-device functionality, users receive the same high-quality interaction, whether on desktop, tablet, or smartphone.',
      },
      {
        skill: 'Angular FrameWork',
        content:
          'I possess a solid grasp of the Angular framework, equipped with a deep understanding of components, data binding, services, and directives. My hands-on experience includes architecting modular applications with responsive design. I excel in synchronizing data flow between components and templates, creating real-time user interactions. I"m eager to contribute this expertise to impactful projects.',
      },
      {
        skill: 'Backend Development',
        content:
          'In addition to front-end development, I’ve contributed to back-end functionality using Java, Spring Data JPA, and MariaDB. I’ve implemented custom repository methods, optimized SQL queries, and worked with relational databases to manage and retrieve complex transactional data. Experienced in testing APIs using Postman, collaborating across teams to deliver seamless full-stack solutions that are reliable, secure, and scalable.',
      },
      // {
      //   skill: 'Front-End Proficiency',
      //   content:
      //     'With a strong command over front-end frameworks, I bring dynamic web applications to life. I excel in Angular, utilizing its components, services, and RxJS for robust development. Additionally, I integrate Bootstrap and Foundation for responsive, user-centric designs that elevate the user experience. Committed to staying current with cutting-edge front-end technologies.',
      // },
    ];
    this.projects = [
      {
        name: 'TODO APP',
        description:
          'A user-friendly web application that allows users to manage their tasks efficiently.',
        pathname: 'Todo Code Path',
        netlifylink: 'https://manasa-todoapp.netlify.app',
        githublink: 'https://github.com/manasachavva88/TODO-APP.git',
        image: 'assets/todo.png',
      },
      {
        name: 'Quiz APP',
        description: `Interactive quiz application testing users' knowledge with multiple-choice questions and providing instant feedback.`,
        pathname: 'Quiz App Code Path',
        netlifylink: 'https://manasaquizapp.netlify.app/',
        githublink: 'https://github.com/manasachavva88/Quiz-App.git',
        image: 'assets/quiz.png',
      },
      {
        name: 'Tic-Tac-Toe Game',
        description:
          'Play the classic Tic-Tac-Toe with a computer AI or challenge a friend in this fun and interactive game. ',
        pathname: 'Tic-Tac-Toe Code Path',
        netlifylink: 'https://manasa-tictactoe.netlify.app/',
        githublink: 'https://github.com/manasachavva88/TicTacToe.git',
        image: 'assets/tic-tac-toe.png',
      },
    ];
    this.Experience = [
      {
        year: '2020-2021',
        companyname: 'Accenture',
        rolename: 'Application Development Associate',
        timeline: '2020 October - 2021 December',
        subrolename: 'FrontEnd Developer',
        roledesc: `I actively participated in designing and developing user interfaces that enhanced the overall user experience of our digital products.
    Collaborating closely with the design and development teams, I translated wireframes and mockups into functional, responsive, and visually appealing web interfaces. 
    I gained proficiency in HTML, CSS, and JavaScript, utilizing them to create interactive and engaging front-end solutions.
    I also conducted thorough testing and debugging to ensure cross-browser compatibility and optimal performance. 
    Through regular code reviews and feedback cycles, I continuously improved my coding practices and adhered to industry best practices.
    Collaborated with senior developers to implement JavaScript functionality, gradually expanding proficiency in scripting and interactivity.`,
      },
      {
        year: '2021-2023',
        companyname: 'Accenture',
        rolename: 'Custom Software Engineering Analyst',
        timeline: '2021 December - 2024 July',
        subrolename: 'Senior FrontEnd Developer',
        roledesc: `Over the span of two years, I took on more complex projects, displaying an in-depth understanding of front-end technologies and design principles.
  In addition to HTML, CSS, and JavaScript, I also gained proficiency in Angular, RxJS for asynchronous interactions TypeScript, jQuery, Bootstrap, JSON, allowing me to build dynamic and highly interactive user interfaces. 
  My role encompassed optimizing web applications for speed and performance, and I actively kept learning of emerging trends in UI development to integrate innovative features and techniques.
  Led the development of complex web applications using Angular, collaborating with design and backend teams.
  Developed and maintained modular and reusable UI components, adhering to industry coding standards.
  Mentored junior developers, providing guidance on coding practices and fostering their professional growth.
  `,
      },
      {
        year: '2024-2025',
        companyname: 'EPAM Systems',
        rolename: 'Software Engineer A2',
        timeline: '2024 July - Present',
        subrolename: 'Senior FrontEnd Developer',
        roledesc: `Working as a Frontend Developer on a large-scale banking and payment application, delivering secure and seamless user experiences for financial operations.
        Took initiative to contribute beyond frontend by learning Java and Spring Data JPA; implemented custom repository methods to support complex backend data operations.Integrated MariaDB for backend storage, writing and optimizing SQL queries to manage transactional data effectively.
        Developed responsive and scalable user interfaces using Angular 17, focusing on modularity, performance, and dynamic content rendering.
        Followed Agile methodologies, contributing to sprint planning, daily stand-ups, code reviews, and continuous improvement processes.`,
      },
    ];
  }
  onSubmit() {
    console.log(this.profileForm.value);
    //  const mailtoLink = `mailto:${this.profileForm.value}?subject=${encodeURIComponent(this.profileForm.value)}&body=${encodeURIComponent(this.profileForm.value)}`;
    //   window.location.href = mailtoLink;
  }
  get f() {
    return this.profileForm.controls;
  }
  linkedinClick() {
    window.open(
      'https://www.linkedin.com/in/chavva-manasa-88b16b137/',
      '_blank'
    );
  }
  githubClick() {
    window.open('https://github.com/manasachavva88', '_blank');
  }
  openResume() {
    const resumeURL = 'assets/Resume.pdf';
    window.open(resumeURL, '_blank');
  }
}
