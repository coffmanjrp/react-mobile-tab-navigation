import { FaHome, FaBox, FaBookOpen, FaUsers } from 'react-icons/fa';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="phone">
        <img
          src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80"
          alt="home"
          className="content show"
        />
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
          alt="work"
          className="content"
        />
        <img
          src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1266&amp;q=80"
          alt="blog"
          className="content"
        />
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80"
          alt="about"
          className="content"
        />
        <nav>
          <ul>
            <li className="active">
              <FaHome />
              <p>Home</p>
            </li>
            <li>
              <FaBox />
              <p>Work</p>
            </li>
            <li>
              <FaBookOpen />
              <p>Blog</p>
            </li>
            <li>
              <FaUsers />
              <p>About Us</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
