import { useState } from 'react';
import { FaHome, FaBox, FaBookOpen, FaUsers } from 'react-icons/fa';
import './App.scss';

function App() {
  const [index, setIndex] = useState(1);

  const tabs = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1053&amp;q=80',
      description: 'home',
      icon: <FaHome />,
      text: 'Home',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80',
      description: 'work',
      icon: <FaBox />,
      text: 'Work',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1266&amp;q=80',
      description: 'blog',
      icon: <FaBookOpen />,
      text: 'Blog',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80',
      description: 'about',
      icon: <FaUsers />,
      text: 'About Us',
    },
  ];

  return (
    <div className="App">
      <div className="phone">
        {tabs.length > 0 &&
          tabs.map((tab) => (
            <img
              key={tab.id}
              src={tab.url}
              alt={tab.description}
              className={`content${tab.id === index ? ' show' : ''}`}
            />
          ))}
        <nav>
          <ul>
            {tabs.length > 0 &&
              tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={tab.id === index ? 'active' : null}
                  onClick={() => setIndex(tab.id)}
                >
                  {tab.icon}
                  <p>{tab.text}</p>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
