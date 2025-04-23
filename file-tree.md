# Project File Tree

Module-14-Lock-N-Board/
│
│
├── instructions/               # This folder contains instructions and the start code for the project
│
│
├── Assets/                     # This folder contains screenshots of the project for the README
│
│
├── client/                     # Frontend 
│   ├── public/  
│   │    └── ... 
│   │    
│   ├── src/ 
│   │    ├── api/
│   │    |    ├── authAPI.tsx
│   │    |    | 
│   │    |    ├── ticketAPI.tsx
│   │    |    | 
│   │    |    └── userAPI.tsx
│   │    | 
│   │    ├── assets/
│   │    |    └── react.svg
│   │    | 
│   │    ├── components/
│   │    |    ├── Navbar.tsx
│   │    |    | 
│   │    |    ├── Swimlane.tsx
│   │    |    | 
│   │    |    └── TicketCard.tsx
│   │    | 
│   │    ├── interfaces/
│   │    |    ├── ApiMessages.tsx
│   │    |    | 
│   │    |    ├── TicketData.tsx
│   │    |    | 
│   │    |    ├── UserData.tsx
│   │    |    | 
│   │    |    └── UserLogin.tsx
│   │    | 
│   │    ├── pages/
│   │    |    ├── Board.tsx
│   │    |    | 
│   │    |    ├── CreateTicket.tsx
│   │    |    | 
│   │    |    ├── EditTicket.tsx
│   │    |    | 
│   │    |    ├── ErrorPage.tsx
│   │    |    | 
│   │    |    └── Login.tsx
│   │    | 
│   │    ├── utils/ 
│   │    │    └── auth.ts 
│   │    | 
│   │    ├── App.tsx 
│   │    | 
│   │    ├── index.css
│   │    | 
│   │    ├── main.tsx
│   │    |
│   │    └── vite-env.d.ts 
│   │    
│   ├── dist/
│   │    ├── assets/
│   │    |    ├── index-8ric8zly.css 
│   │    |    |  
│   │    |    └── index-BK6SGht3.js 
│   │    | 
│   │    ├── index.html
│   │    |    
│   │    └── vite.svg
│   │    
│   ├── node_modules/ 
│   │    └── ...  
│   │    
│   ├── .eslintrc.cjs 
│   │    
│   ├── .gitignore
│   │    
│   ├── index.html
│   │    
│   ├── package.json
│   │    
│   ├── package-lock.json
│   │    
│   ├── tsconfig.json
│   │    
│   ├── tsconfig.node.json
│   │    
│   └── vite.config.ts                
│
│   
├── server/                     # Backend
│   ├── db/ 
│   │    └── schema.sql  
│   │                  
│   ├── src/ 
│   │    ├── controllers/
│   │    |    ├── ticketController.ts 
│   │    |    | 
│   │    |    └── userController.ts
│   │    | 
│   │    ├── middleware/
│   │    |    └── auth.ts
│   │    | 
│   │    ├── models/
│   │    |    ├── index.ts
│   │    |    | 
│   │    |    ├── ticket.ts 
│   │    |    | 
│   │    |    └── user.ts
│   │    | 
│   │    ├── routes/
│   │    |    ├── api/
│   │    |    |    ├── index.ts 
│   │    |    |    | 
│   │    |    |    ├── ticket-routes.ts
│   │    |    |    | 
│   │    |    |    └── user-routes.ts
│   │    |    | 
│   │    |    ├── auth-routes.ts
│   │    |    | 
│   │    |    └── index.ts
│   │    | 
│   │    ├── seeds/ 
│   │    |    ├── index.ts
│   │    |    | 
│   │    |    ├── ticket-seeds.ts 
│   │    |    | 
│   │    |    └── user-seeds.ts  
│   │    | 
│   │    ├── types/ 
│   │    │    └── express/
│   │    │         └── index.d.ts 
│   │    | 
│   │    └── server.ts  
│   │ 
│   │       
│   ├── dist/ 
│   │    ├── controllers/
│   │    |    ├── ticketController.js 
│   │    |    | 
│   │    |    └── userController.js
│   │    | 
│   │    ├── middleware/
│   │    |    └── auth.js
│   │    | 
│   │    ├── models/
│   │    |    ├── index.js
│   │    |    | 
│   │    |    ├── ticket.js 
│   │    |    | 
│   │    |    └── user.js
│   │    | 
│   │    ├── routes/
│   │    |    ├── api/
│   │    |    |    ├── index.js 
│   │    |    |    | 
│   │    |    |    ├── ticket-routes.js
│   │    |    |    | 
│   │    |    |    └── user-routes.js
│   │    |    | 
│   │    |    ├── auth-routes.js
│   │    |    | 
│   │    |    └── index.js
│   │    | 
│   │    ├── seeds/ 
│   │    |    ├── index.js
│   │    |    | 
│   │    |    ├── ticket-seeds.js 
│   │    |    | 
│   │    |    └── user-seeds.js  
│   │    |    
│   │    └── server.js 
│   │ 
│   ├── node_modules/ 
│   │    └── ...   
│   │ 
│   ├── package.json
│   │ 
│   ├── package-lock.json
│   │ 
│   └── tsconfig.json
│
│
├── .env
│   
├── .gitignore
│   
├── package.json
│   
├── package-lock.json
│   
├── tsconfig.json
│   
└── README.md
   