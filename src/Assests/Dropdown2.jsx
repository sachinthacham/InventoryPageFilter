const DropdownIcon2 = ({size,color }) => {
    const iconStyle = {
        fontSize:size,
        color:color 
       
    }
    return <i className="fa-solid fa-caret-down" style = {iconStyle}></i>
    
    // <i class="fa-solid fa-circle-chevron-down" ></i>;
  };
  
  export default DropdownIcon2;