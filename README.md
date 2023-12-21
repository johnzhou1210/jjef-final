Frontend Requirements
UI (React)
  1. Create a topbar or sidebar component that is present throughout the app 
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/routes/Sidebar.js
  2. Create 3 or more additional components
  3. 1 or more components should take text-based user input
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/components/CreateEntry.js (line 80-88)
  4. 1 or more components should display data representing a single instance from a model
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/components/DisplayLists.js
       Clicking on one of these components should show additional information related to that instance
          https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/components/ListLabel.js (line 111)
  5. 1 or more components should display data based on store state
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/routes/List.js
  6. Components should enable to user to perform CRUD operations on the backend models
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/components/Entry.js (example of using update and delete operations)
Client-Side Routing (React Router)
  1. Create 2 our more routes that display different components based on the URL, that are accessible from the navbar/topbar
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/index.js
  2. Use dynamic segments to display appropriate info based on the segment info
      Ex: Appropriate task is displayed when the URL matches `/tasks/:taskId`
        https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/routes/App.js (line 26)
State Management (Redux)
  1. Create a store and a reducer to handle incoming actions
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/app/store.js (store)
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/app/listSlice.js (reducer)
  2. Create 1 or more action creators to create actions based on inputs
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/app/listSlice.js
  3. Update store state using dispatch and actions
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/routes/App.js (line 28)
  4. Reflect updates to the state in the frontend UI
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/routes/List.js
API Calls (External and to Backend)
  1. Backend: Using the backend routes, should be able to perform CRUD operations on database models
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/components/ListLabel.js (lines 65-90 show example of delete operation)
  2. External: Should make 2 or more External API calls
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/components/RiddlesTodo.js
    https://github.com/johnzhou1210/jjef-final-frontend/blob/main/src/components/BoredTodo.js
