import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import User from './User';
import Users from './Users';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li> 
            <Link to="/about">About</Link>
          </li>
          <li>
             <Link to="/users">Users</Link>
             </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<User />} />
      </Routes>
      </div>
    </BrowserRouter>
  )

};

export default App;
