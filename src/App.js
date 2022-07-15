import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListTodo from "./Todos/ListTodo";
import Nav from "./Nav/Nav";
import Home from "./Menu/Home";
import About from "./Menu/About";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {/* <div className="topnav">
            <NavLink to="/" activeClassName="active" exact={true}>
              Home
            </NavLink>
            <NavLink to="/todo" activeClassName="active">
              Todos
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/user" activeClassName="active">
              Users
            </NavLink>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/todo" element={<ListTodo />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<ListUser />} exact />
          <Route path="/user/:id" element={<DetailUser />} />
        </Routes> */}

          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
