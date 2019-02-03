import React from "react";
//PAGES IMPORTS
import SidebarTemplate from "../layout/index";

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log("Home");
  }
  
  render() {
    return (
      <SidebarTemplate/>
    )
  }
}

export default Home;
