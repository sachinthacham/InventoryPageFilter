
import ItemList from "./ItemList";

function Content({handleCheck,handleDelete ,items}){
 
return(
<main>
  {items.length ? (
  
    <ItemList
   
    items = {items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}/>
    
  
   
  
  ): (<h1>list is empty</h1>)}
  
</main>
 
);


}
 
export default Content;