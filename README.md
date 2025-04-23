# Module-14-lock-n-board

## **Description**

**Lock N Board** is a full-stack Kanban board application that helps users organize tasks in a visual and intuitive swimlane layout. Built with TypeScript, Express, PostgreSQL, and React, it allows users to register, log in, and manage their tickets across "To Do," "In Progress," and "Done" columns. Inspired by agile methodology, the project was developed for educational purposes and demonstrates modern full-stack development practices.

Users can:

- Register for a new account or log in securely
- Create, update, and delete task tickets
- View all tickets sorted into categorized swimlanes
- Persist data across sessions with a PostgreSQL database
- Enjoy responsive UI and error handling

This tool is ideal for students, developers, and project managers seeking a simple, extensible task board experience.

| **Key Features**                               | **Technology Stack**                                                                                       |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Full CRUD functionality for task tickets       | **Languages:** [JavaScript](https://developer.mozilla.org/), [TypeScript](https://www.typescriptlang.org/) |
| JWT Authentication                             | **Front-End:** [React](https://react.dev/), [React Router](https://reactrouter.com/)                       |
| RESTful API architecture                       | **Back-End:** [Express](https://expressjs.com/), [PostgresSQL](https://www.postgresql.org/)                |
| Modular architecture with clear file structure | **Styling:** [CSS Modules](https://github.com/css-modules/css-modules)                                     |
| Protected routes and secure login              | **Build Tools:** [Vite](https://vitejs.dev/), [Sequelize](https://sequelize.org/)                          |
| Responsive design and mobile-friendly layout   | **Deployment:** [Render](https://render.com/)                                                              |

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Walkthrough Video](#walkthrough-video)
- [Live Demo](#live-demo)
- [Future Development](#future-development)
- [Contact](#contact)

---

## Installation **DO NOT FORGET TO REPLACE WITH CORRECT LINKS!**

You can access the live app [here](https://alex-menendez.onrender.com/). To run the app locally: **DO NOT FORGET TO REPLACE WITH CORRECT LINK!**

**1. Clone the Repository**

```bash
git clone https://github.com/alexis-menendez/Module-12-Crafted-by-Alex.git
cd devmatch
```

**2. Set Environment Variables**
Create a .env file in the root with the following:
```env
DB_NAME=kanban_db
DB_USER=postgres
DB_PASSWORD= [YOUR-LOCAL-POSTGRESS-PASSWORD]
JWT_SECRET_KEY= [YOUR-LOCAL-JWT-KEY]
```

**3. Install Dependencies**
From the root run:
```bash
npm install
```

Or if you want to only run the client or server:

Client:
```bash
cd ../client
npm install
```

Server:
```bash
cd server
npm install
```

**4. Seed the Database**

```bash
cd ../server
npm run seed
```

**5. Start the Dev Server**
From the root run:
```bash
npm run start:dev
```

---

## Usage **DO NOT FORGET TO REPLACE WITH CORRECT LINKS!**
1. Launch the app through [localhost](http://localhost:5173) or at follow this link for the [live deployment](https://alex-menendez.onrender.com/). **DO NOT FORGET TO REPLACE WITH CORRECT LINK!**
2. Register or log in to access your board.
3. View and manage tickets across swimlanes: To Do, In Progress, and Done.
4. Create new tickets using the Create Ticket form.
5. Edit or delete tickets with available action buttons.
6. Experience real-time UI updates and API interactions.
7. All user data is securely stored in the PostgreSQL database.

---

## Screenshots **DO NOT FORGET TO REPLACE WITH CORRECT LINKS!**

![homepage-screenshot](https://github.com/alexis-menendez/Module-14-Lock-N-Board/blob/main/Assets/p-home.png?raw=true) 
![board-screenshot](https://github.com/alexis-menendez/Module-14-Lock-N-Board/blob/main/Assets/p-board.png?raw=true) 
![new-ticket-screenshot](https://github.com/alexis-menendez/Module-14-Lock-N-Board/blob/main/Assets/p-new.png?raw=true) 
![edit-ticket-screenshot](https://github.com/alexis-menendez/Module-14-Lock-N-Board/blob/main/Assets/p-edit.png?raw=true) 



---

## Walkthrough Video

[Lock N Board Walkthrough](https://drive.google.com/file/d/1EKAMk0dPdx7ZgTJARjjorZ_RJB6NCyJ9/view?usp=drive_link)

---

## Live Demo **DO NOT FORGET TO REPLACE WITH CORRECT LINK!**

You can access the live version of the app here: [Lock N Board Live](https://alex-menendez.onrender.com/) **DO NOT FORGET TO REPLACE WITH CORRECT LINK!**

---

## Future Development

- Add drag-and-drop support for ticket rearrangement
- Filter and search functionality
- Add labels and due dates to tickets
- Light/Dark mode toggle
- Team-based ticket sharing

---

## Contact

### [**Alex Menendez**](https://alex-menendez.onrender.com/) – Junior Developer, Junior Project Manager, and Junior UI/UX Designer

- [**Portfolio**](https://alex-menendez.onrender.com/)
- **GitHub**: [alexis-menendez](https://github.com/alexis-menendez)
- **Email**: [alexis.menendez@austincc.edu](https://alex-menendez.onrender.com/contact)

---

