import "./App.scss";
import Header from "../components/Header";
import { FaCalendar, FaCalendarAlt, FaChevronDown, FaInbox } from "react-icons/fa";
import ListItem from "../components/ListItem";

function App() {
  return (
    <div className='todo'>
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <ListItem 
              icon={<FaInbox className="list__item__icon" />}
              text="Inbox" 
              active={true}
              />
            <ListItem
              icon={<FaCalendar className="list__item__icon" />}
              text="Today" 
              active={false}
              />
            <ListItem
              icon={<FaCalendarAlt className="list__item__icon" />} 
              text="Next 7 days" 
              active={false}    
              />
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
                <ListItem
                  icon={<FaInbox className="list__item__icon" />}
                  text="Project-A" 
                  active={false}    
                  />
                <ListItem
                  icon={<FaInbox className="list__item__icon" />} 
                  text="Project-B" 
                  active={false}    
                  />
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
