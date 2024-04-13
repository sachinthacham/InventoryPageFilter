

import InventoryCard from './stuff/ExpandCard';
import InventoryFilter from './stuff/FilterMethod';
import CardComponent from './stuff/PopupCard';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'; 
//import UploadForm from './Withoutimage';
import Create from './stuff/Create';
import DropdownMenu from './stuff/DropdownMenu'
import AdvancedButton from './stuff/AdvancedButton'
import MyTable from './stuff/Table';
import '@fortawesome/fontawesome-free/css/all.css';
import CustomFileInput from './stuff/CheckFileInput'
import DisplayValue from './Assests/DisplayValue'



const App = () => {
  return (
     <div className = "App">
       {/* <h1>Inventory Details</h1>
       <div className="inventory-container">
       {inventoryData.map(item => (
          <Route path="/inventory/:id" component={InventoryCard}/>
        ))}
      </div>
      <Route exact path = "/" component = {InventoryFilter} /> */}
      {/* <Create/> */}
       <InventoryFilter/> 
        {/* <InputField/> */}
       {/* <CustomFileInput/> */}
      {/* <DisplayValue/> */}
      {/* <DropdownMenu/> */}
      {/* <AdvancedButton >Click Me</AdvancedButton> */}
      
    </div>
  );
};

export default App;




