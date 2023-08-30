import "./ListItem.scss";

function ListItem({icon, text, active}) {
  return (
    <>
        <ul className="list">
            <li className={`list__item ${active && "active"}`}>
                {icon} 
                <p className="list__item__text">{text}</p>
            </li>
        </ul>
    </>
  )
}

// CSS + JS Value == Dynamics ClassName
// not-active : className ="list__item__text"
// active : className = "list__item_text active"

export default ListItem