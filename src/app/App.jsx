import "./App.scss";
import Header from "../components/Header";
import { FaCalendar, FaCalendarAlt, FaChevronDown, FaInbox } from "react-icons/fa";
import Lists from "../components/Lists";

function App() {

  const generalLists = [
    {id: 1, text: "Inbox", icon: <FaInbox />, active: true},
    {id: 2, text: "Today", icon: <FaCalendar />, active: false},
    {id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: false},
  ];

  const projectList = [
    {id: 4, text: "Project-A", icon: <FaInbox />, active: false},
    {id: 5, text: "Project-B", icon: <FaInbox />, active: false},
  ];


  // ObjectDetail => <ListItem ...ObjectDetail>

  return (
    <div className='todo'>
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalLists} />
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__icon accordion__item__active" />
                  <p className="accordion__text">Projects</p>
                </li>
              </div>
              <ul className="list">
                <Lists data={projectList} />
              </ul>
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
