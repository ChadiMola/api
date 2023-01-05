import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import UserList from "./components/UserList";

function App() {
  return (
    <><Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Users" element={ <UserList />}/>
      <Route path="/User/:id" element={ <UserInfo/>}/>
    </Routes>
     
    </>
  );
}

export default App;
