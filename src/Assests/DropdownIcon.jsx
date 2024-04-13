
const DropdownIcon = ({size,color }) => {
    const iconStyle = {
        fontSize:size,
        color:color 
       
    }
    return <i className="fa-solid fa-chevron-right" style={iconStyle}></i>
    // <i class="fa-solid fa-circle-chevron-down" ></i>;
  };
  
  export default DropdownIcon;
