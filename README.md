<h1 align="center">Lore Ipsum</h1>

<br />
<div 
  <h3 align="center">Management about social media events</h3>

</div>

<details>
  <summary>Content's table</summary>
    <ol>

- [About this project](#about-this-project)
  - [Why I did it?](#why-i-did-it)
- [Data model](#data-model)
    - [Entities and attributes](#entities-and-attributes)
    - [Relationships between tables](#relationships-between-tables)
    - [Data model diagrams](#data-model-diagrams)
- [Use cases](#use-cases)
- [Description of system operation and technical specifications](#description-of-system-operation-and-technical-specifications)
  - [Technical specifications](#technical-specifications)
- [Interfaces](#interfaces)
- [Manuals](#manuals)
  - [Installation guide](#installation-guide)
    - [Requirements](#requirements)
    - [Get started](#get-started)
      - [Frontend](#frontend)
      - [Backend](#backend)
- [Technology stack](#technology-stack)
- [Technology comparison](#technology-comparison)
- [Conclusion](#conclusion)
- [Links and references](#links-and-references)
- [Author/s](#authors)
</details>

## About this project

### Why I did it?


How was this created? Well, the idea was simple, a website that can show a list of events about the danger of the social media, organized by the ITC, and after my decision I started working on this project.

The idea was that the people could look the list of the events, register or login, and signin in the event they want to assist, other than that, the website has a system where the administrator can create or edit events in the frontend from it computer or mobile phone.

And how I chosen about this topic, well, I threw a pair of dices and selected one of the things that they listed in the area the dices selected.

(ITC stands for "Instituto Tecnológico de Canarias")

---

## Data model

Our first step will be analyze the data model of our project following the next sections: 

- [About this project](#about-this-project)
  - [Why I did it?](#why-i-did-it)
- [Data model](#data-model)
    - [Entities and attributes](#entities-and-attributes)
    - [Relationships between tables](#relationships-between-tables)
    - [Data model diagrams](#data-model-diagrams)
- [Use cases](#use-cases)
- [Description of system operation and technical specifications](#description-of-system-operation-and-technical-specifications)
  - [Technical specifications](#technical-specifications)
- [Interfaces](#interfaces)
- [Manuals](#manuals)
  - [Installation guide](#installation-guide)
    - [Requirements](#requirements)
    - [Get started](#get-started)
      - [Frontend](#frontend)
      - [Backend](#backend)
- [Technology stack](#technology-stack)
- [Technology comparison](#technology-comparison)
- [Conclusion](#conclusion)
- [Links and references](#links-and-references)
- [Author/s](#authors)

#### Entities and attributes

![ERDiagram][ERDiagram.img]

With this entity-relationship diagram, we can see what entities, attributes and keys we should create in our database structure.

As we can see, we have a database with 6 entities that we will later transform into tables. These are:

+ Speaker:

  - ID: Identification number of each speaker (not null).
  - Dni: Speaker's dni.
  - Email: Speaker's email.
  - Name: Speaker's name.
  - Phone: Speaker's phone.

+ Event:

  - ID: Identification number of each event(not null).
  - Initial_Hour: Hour and day of when the event start.
  - Final_Hour:  Hour and day of when the event end.
  - location: Location of the event.
  - title: Title of the event.
  - Description: Description of the event.
  - Image: Event image what it contains blob (not null).
  - NameImg: Image name encoded.
  - TypeImg: Image type (.png, .jpg...).
  - FK:Speaker_ID: Identification number of the speaker who will talk in the event (not null).

+ Attendance:

  - FK:User_ID: Identification number of the user who has signed up in the event.
  - FK:Event_ID: Identification number of the event where the user has signed up.
  
+ Users:

  - ID: Identification number of each user(not null).
  - Name: Users's name.
  - Username: Users's username.
  - Email: Users's email.
  - Password: Users's password encrypted.
  - Age: Users's age.
  - Dni: Users's dni.
  - Phone: Users's phone.

+ Role:

  - ID: role identifier number (not null).
  - Name: Name of the role.

  The information in this table will not change.

+ User_Role:

  - FK:User_ID: Identification number of the user that has a role.
  - FK:Role_ID: Identification number of the role that a user has.

We can obtain the .sql file to create the database in the folder 'DB' of this project. 

#### Relationships between tables

  - Speaker-Event: One-to-Many relationship, one speaker can talk in many events.
  - Event-Users: Many-to-Many relationship, many users can assist to a event, and a user can assist to many events.
  - User-Role: Many-to-Many relationship, many users can have many roles.

#### Data model diagrams

UML diagram:

![umlDiagram][umlDiagram.img]


Relational Model:

![relacionalDiagram][relacionalDiagram.img]

---

## Use cases

Now we will see the use case diagram, this is reduced to the actions that can be performed by the guest, the user (common user of the application) and the administrator (admin user of the application).

![UseCaseDiagram][useCase.img]

---

## Description of system operation and technical specifications

### Technical specifications

To run this application, you must have a computer with the following minimum requirements:

  - Storage: 500MB.

  - RAM memory: 1GB.

  - S.O.: Windows 10.

  - CPU: Intel Core i3 or AMD Ryzen 4.

  - Web browser: Google Chrome, Opera, Opera GX, Microsoft Edge, Firefox.


---

## Interfaces

The summary.
 
![image](https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual/blob/develop/images/interfaces.jpg)


---

## Manuals

### Installation guide

#### Requirements

- Eclipse IDE o IntelliJ IDEA.
- MySQL Workbench.
- PostMan, for RESTFul tests.
- Visual Studio Code.

#### Get started 

##### Frontend

[![Angular][angular.io]][angular.url]

To get started, create an empty folder on your computer and open your Visual Studio Code.

Once open, go to Files > Open Folder > and select the folder you just created.

Now, open a terminal in the new folder.

![newTerminal][newTerminal.img]

Once you are in the terminal of your folder execute the following commands:

* clone repository
    ```sh
    git clone https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual.git
    ```

Install all project's dependencies (you can make and drink coffee, play to your favorite game and study a degree while this finishes).:
 
* npm
    ```sh
    npm install
    ```

When dependencies have been installed, you can go to set up your backend.

##### Backend

[![Spring][spring.io]][spring.url]

To get started, open the backend of the project with the IDE of your choice. In my case, I was forced to use IntelliJ.

![openedIDE][openedIDE.img]

Once you have the backend open, go to MYSQL Workbench and check your username and password to access in your IDE. Also, take advantage of this opportunity to import a database where you save your data:

![createDB][createDB.img]

And remember to change the database name and MySQL password to yours, so the IDE can connect with the database.

![changeBackendConfiguration][changeBackendConfiguration.img]

Remember start your frontend in your Visual Studio Code!

* Run your frontend
    ```sh
    cd frontend/

    npm start
    ```

---

## Technology stack

Against my will, I tried to make a miracle using this technology stack:

[![React][react2.io]][react.url] used as Frontend.

[![Spring][spring2.io]][spring.url] with Hibernate and Java, used as Backend.

---

## Technology comparison

To compare technologies, I will choose those that I have had the opportunity to test or see from my peers. In this case I have chosen the following:

Frontend: 

[![React][react.io]][react.url] to compare with [![Angular][angular.io]][angular.url]

Both are constituted by the use of components, therefore, they are a good example to compare. However, while React uses JavaScript, Angular uses TypeScript. The difference between the two tools is that React is a JavaScript library and Angular is a framework designed for the frontend. With the basics clarified, let's list the differences:

  - React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM.

  - React is faster than Angular as it has a smaller bundle size.

  - React is mostly used to build interactive UI components with frequently variable data, whereas Angular.js is used to build complex enterprise apps like progressive web apps and single-page apps.

  - React JS is commonly used to create user interfaces for single-page applications from isolated components. Angular JS is used to build single-page applications using HTML and TypeScript.

  - React is widely used to develop reusable HTML elements for front end development. On the other hand, Angular is a part of the MEAN stack and is very compatible with many code editors. It’s also considered to develop dynamic websites and web apps.

Backend: 

[![Sequelize][sequelize.io]][sequelize.url] to compare with [![Spring][spring.io]][spring.url]

Both technologies are ORMs used for the connection between the backend and the frontend. Therefore, it seems appropriate to compare them. So, let's list the differences:

  - Sequelize is a simpler development tool than Spring with respect to application development.

  - Spring and sequelize focus on creating a backend for frameworks such as frontends, having similar power in their uses. 

  - Spring allows us to work with MVC frameworks with PHP, being the better of the two ORMs in this aspect.

  - Sequelize allows us to perform powerful works in Digital Drawing and Painting environments.

---

## Conclusion

This project has been a roller coaster of emotions: anger, joy, laziness. This project opened my eyes and showed me how hard is the real work of a programmer, and I'm happy with that. 

As a conclusion of this project, I have to say that this is not my best work, but at least I have something and I'm happy with that, and I will keep working to polish this project to make it even better. 

---

## Links and references

  - [tcrurav repository][tcrurav.url]

  - [![Postman][postman.io]][postman.url]

  - [![Base64][base64.io]][base64.url]

---

## Author/s

[![Juan Alberto Trujillo Carballo][author-alberto.io]][author-alberto.url]

---

<!-- MARKDOWN LINKS AND IMAGES -->
[newTerminal.img]: https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual/blob/develop/images/Visual%20Studio%20Starting.png
[openedIDE.img]: https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual/blob/develop/images/Intell%20Starting.png
[createDB.img]: https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual/blob/develop/images/MySQL.png
[changeBackendConfiguration.img]: https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual/blob/develop/images/Properties%20Intell.png
[ERDiagram.img]: https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual/blob/develop/images/Diagrama%20E-R.drawio.png
[umlDiagram.img]: https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual/blob/develop/images/Diagrama%20UML.png
[relacionalDiagram.img]: https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual/blob/develop/images/Diagrama%20relacional.drawio.png
[useCase.img]: https://github.com/JuanAlbertoTrujilloCarballo/ProyectoIndividual/blob/develop/images/Casos%20de%20uso.png

[tcrurav.url]: https://github.com/tcrurav/SpringReactHooksJWTAuthMySQL

[author-alberto.io]: https://img.shields.io/badge/-Juan%20Alberto%20Trujillo%20Carballo-aqua?style=for-the-badge&label=author&logo=Dragonframe&labelColor=black
[author-alberto.url]: https://github.com/JuanAlbertoTrujilloCarballo

[angular2.io]: https://img.shields.io/badge/Angular-red?style=for-the-badge&logo=angular&logoColor=black
[angular.io]: https://img.shields.io/badge/Frontend-Angular-red?style=flat-square&logo=angular&logoColor=red
[angular.url]: https://angular.io

[react2.io]: https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white
[react.io]: https://img.shields.io/badge/Frontend-React-aqua?style=flat-square&logo=React&logoColor=aqua
[react.url]: https://reactjs.org

[spring2.io]: https://img.shields.io/badge/Spring-green?style=for-the-badge&logo=spring&logoColor=black
[spring.io]: https://img.shields.io/badge/Backend-Spring-green?style=flat-square&logo=spring&logoColor=green
[spring.url]: https://spring.io