import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

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
  constructor(private formbuilder: UntypedFormBuilder) {
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
      'assets/html.png',
      'assets/css.png',
      'assets/html.png',
      'assets/css.png',
    ];
    this.contactImages = [
      {
        image: 'assets/call.png',
        content: '+91 7285995018',
      },
      {
        image: 'assets/email.png',
        content: 'chavvamanasa@gmail.com',
      },
      {
        image: 'assets/location.png',
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
      },
      {
        name: 'TODO APP',
        description:
          'A user-friendly web application that allows users to manage their tasks efficiently.',
        pathname: 'Todo Code Path',
        netlifylink: '',
        githublink: '',
      },
      {
        name: 'TODO APP',
        description:
          'A user-friendly web application that allows users to manage their tasks efficiently.',
        pathname: 'Todo Code Path',
        netlifylink: '',
        githublink: '',
      },
      {
        name: 'TODO APP',
        description:
          'A user-friendly web application that allows users to manage their tasks efficiently.',
        pathname: 'Todo Code Path',
        netlifylink: '',
        githublink: '',
      },
      {
        name: 'TODO APP',
        description:
          'A user-friendly web application that allows users to manage their tasks efficiently.',
        pathname: 'Todo Code Path',
        netlifylink: '',
        githublink: '',
      },
      {
        name: 'TODO APP',
        description:
          'A user-friendly web application that allows users to manage their tasks efficiently.',
        pathname: 'Todo Code Path',
        netlifylink: '',
        githublink: '',
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
        timeline: '2021 December - Present',
        subrolename: 'Senior FrontEnd Developer',
        roledesc: `Over the span of two years, I took on more complex projects, displaying an in-depth understanding of front-end technologies and design principles.
  In addition to HTML, CSS, and JavaScript, I also gained proficiency in Angular, RxJS for asynchronous interactions TypeScript, jQuery, Bootstrap, JSON, allowing me to build dynamic and highly interactive user interfaces. 
  My role encompassed optimizing web applications for speed and performance, and I actively kept learning of emerging trends in UI development to integrate innovative features and techniques.
  Led the development of complex web applications using Angular, collaborating with design and backend teams.
  Developed and maintained modular and reusable UI components, adhering to industry coding standards.
  Mentored junior developers, providing guidance on coding practices and fostering their professional growth.
  `,
      },
    ];
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
  get f() {
    return this.profileForm.controls;
  }
}
