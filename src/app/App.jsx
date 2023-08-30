import "./App.scss";
import Header from "../components/Header";
import { FaCalendar, FaCalendarAlt, FaChevronDown, FaInbox } from "react-icons/fa";
import Lists from "../components/Lists";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoList from "../components/Todo/TodoList";

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
      <div className="todo__content">
        <main className="todo__container">
            <TodoHeader />
            <TodoCreate />
            <TodoList />
        </main>
      </div>
    </div>
  );
}

export default App;


/*Challenge : Refactor
- ให้ 2 section render UI ที่ ...
 - Option A (2/5): render ต่างกัน <Lists /> กับ <Accordion /> : Difficult 2.5
 - Option B (4/5) : render UI เดียวกัน เช่น <Lists /> 
 - Option C (5/5) : render <List /> ภายใต้ <Accordion> <List /> </Accordion>
 // ใช้ props.children 
*/