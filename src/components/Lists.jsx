import ListItem from "./ListItem"

/* props {
    lists = [
        {
            id: Number,
            text: String,
            icon:<Component />, 
            active: true
        }
    ]
}; */ 
function Lists({data}) {
  return (
    <ul>
        {data.map(x => <ListItem key={x.id} {...x} />)}
    </ul>
  )
}

export default Lists