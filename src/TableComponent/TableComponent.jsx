
import './TableComponent.css'





function TableComponent() {
    // const [row,setRow] = useState('');
    const rowItems = [{
        Inventory_Id: "L001",
        Inventory_Item: "laptop001",
        Category: "Laptop",
        Date: "2023/08/16",
        Status: "accepted"
    },
        {Inventory_Id: "T001",
        Inventory_Item: "Tab001",
        Category: "Tab",
        Date: "2023/08/10",
        Status: "rejected"},
    {

        Inventory_Id: "L001",
        Inventory_Item: "laptop001",
        Category: "Laptop",
        Date: "2023/10/04",
        Status: "pending"
    },
    {
        Inventory_Id: "L001",
        Inventory_Item: "laptop001",
        Category: "Laptop",
        Date: "2023/08/16",
        Status: "accepted"
    },
        {Inventory_Id: "T001",
        Inventory_Item: "Tab001",
        Category: "Tab",
        Date: "2023/08/10",
        Status: "rejected"},
    {

        Inventory_Id: "L001",
        Inventory_Item: "laptop001",
        Category: "Laptop",
        Date: "2023/10/04",
        Status: "pending"
    },{
        Inventory_Id: "L001",
        Inventory_Item: "laptop001",
        Category: "Laptop",
        Date: "2023/08/16",
        Status: "accepted"
    },
        {Inventory_Id: "T001",
        Inventory_Item: "Tab001",
        Category: "Tab",
        Date: "2023/08/10",
        Status: "rejected"},
    {

        Inventory_Id: "L001",
        Inventory_Item: "laptop001",
        Category: "Laptop",
        Date: "2023/10/04",
        Status: "pending"
    }]
   
return (
    <div>
        
      
      <h3 className = 'heading'> Inventory Details </h3>
                {/* <table className='style_table'>
                   
                   <tr style={{ backgroundColor: 'lightblue',borderRadius:"20%" }}>

                            <td >Inventory Id</td>
                            <td >Inventory Item</td>
                            <td >Category</td>
                            <td >Date</td>
                            <td >Status</td>
                    </tr>
                  
                   
                        
                   
                    {rowItems.map((item,index) => (
                        <tr key={index} >
                             <td className='row_style' >{item.Inventory_Id}</td>
                             <td>{item.Inventory_Item}</td>
                             <td className='row_style'>{item.Category}</td>
                             <td>{item.Date}</td>
                             <td>{item.Status}</td>
                        </tr>
                        ))}
                       
                    
                </table> */}
 <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Inventory Id</div>
                        <div className="col col-2">Inventory Item</div>
                        <div className="col col-3">Category</div>
                        <div className="col col-4">Date</div>
                        <div className="col col-4">status</div>
                    </li>
                             {rowItems.map((item,index) => (
                    <li className="table-row" key={index}>
                        <div className="col col-1" >{item.Inventory_Id}</div>
                        <div className="col col-2" >{item.Inventory_Item}</div>
                        <div className="col col-3" >{item.Category}</div>
                        <div className="col col-4" >{item.Date}</div>
                        <div className="col col-5" >{item.Status}</div>
                    </li>
                        ))}                 
    
   
                </ul> 
                
                
                      <button type = "button"  className = 'dash_btn'> Back to Dashboard </button>
                
                
            
      
    </div>
  )
}

export default TableComponent;


