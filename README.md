https://github.com/johnzhou1210/jjef-final-backend

Instructions on setting up the Todo List app:

1. In an empty folder, clone the following repositories
2. Frontend: git clone https://github.com/johnzhou1210/jjef-final-frontend.git
3. Backend: git clone https://github.com/johnzhou1210/jjef-final-backend.git
4. Make sure your postgres server is running
5. Set up postgres database, create a database named 'todoList' (in pgAdmin for example, and port 5432 is default)
6. In configdb.js in backend, add your password to variable dbPass to access the database
7. Do npm install for both frontend and backend
8. node index.js for backend, port 3001 should have no programs running on it beforehand
9. In your browser or in Postman (GET), please do 'http://localhost:3001/dbSync' to sync the database
10. npm start for frontend, port 3000, should have no programs running on it beforehand
11. Now you can test the app


Frontend Requirements
UI (React)
  1. Create a topbar or sidebar component that is present throughout the app
  > Sidebar: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/Sidebar.js#L6-L21

  2. Create 3 or more additional components

  > Everything in components and routes folder

  > BoredTodo: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/BoredTodo.js#L1-L20

  > CreateEntry: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateEntry.js#L7-L113

  > CreateList: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateList.js#L7-L44

  > DisplayLists: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/DisplayLists.js#L6-L32

  > Entry: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/Entry.js#L5-L127

  > ListLabel: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/ListLabel.js#L10-L117

  > RiddlesTodo: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/RiddlesTodo.js#L1-L41

  > App: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/App.js#L8-L76

  > NoActiveListsNotice: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/App.js#L78-L85

  > ErrorPage: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/ErrorPage.js#L3-L17

  > List: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/List.js#L7-L43

  > Riddles: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/Riddles.js#L5-L72

  > Sidebar: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/Sidebar.js#L6-L21

  3. 1 or more components should take text-based user input

  > CreateEntry: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateEntry.js#L75-L113

  4. 1 or more components should display data representing a single instance from a model
       Clicking on one of these components should show additional information related to that instance

      > Entry: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/Entry.js#L87-L126

      > List: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/List.js#L18-L42

      > ListLabel: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/ListLabel.js#L98-L116

      > DisplayLists: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/DisplayLists.js#L21-L31

  5. 1 or more components should display data based on store state

  > List: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/List.js#L8-L9

  > https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/List.js#L22-L40

  6. Components should enable to user to perform CRUD operations on the backend models

  > CreateEntry: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateEntry.js#L16
  
  > https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateEntry.js#L34-L55

  > CreateList: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateList.js#L12

  > https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateList.js#L18-L33


Client-Side Routing (React Router)
  1. Create 2 our more routes that display different components based on the URL, that are accessible from the navbar/topbar

  > index.js: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/index.js#L12-L29

  2. Use dynamic segments to display appropriate info based on the segment info
      Ex: Appropriate task is displayed when the URL matches `/tasks/:taskId`

  > For dynamic segments, we didn't fulfill this requirement (clicking on the lists created in the sidebar doesn't show lists based on their id in the URL).
  
State Management (Redux)
  1. Create a store and a reducer to handle incoming actions

  > store.js: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/app/store.js#L1-L8

  2. Create 1 or more action creators to create actions based on inputs
  
  > listSlice.js: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/app/listSlice.js#L13-L63

  3. Update store state using dispatch and actions

  > CreateEntry: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateEntry.js#L31

  > https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateEntry.js#L61

  > https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/CreateEntry.js#L69-L69

  > ListLabel: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/ListLabel.js#L25

  > https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/ListLabel.js#L38-L38


  4. Reflect updates to the state in the frontend UI

  > ListLabel: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/ListLabel.js#L29-L40

API Calls (External and to Backend)
  1. Backend: Using the backend routes, should be able to perform CRUD operations on database models

  > ListLabel: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/ListLabel.js#L36-L40

  2. External: Should make 2 or more External API calls

  > BoredTodo: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/BoredTodo.js#L6-L11

  > RiddlesTodo: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/components/RiddlesTodo.js#L4-L32

  > Riddles: https://github.com/johnzhou1210/jjef-final-frontend/blob/af40ddc6325e4da069ac92f0f91743e735c15d81/src/routes/Riddles.js#L14-L18


  * Please note there is a lot of overlap and more code that fulfills the requirement but didn't get linked here.
