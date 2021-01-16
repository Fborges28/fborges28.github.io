import React from "react";
import Sidebar from "./sidebar/sidebar";
import MainContent from "./main-content/main-content";
import "./sidebar-template.scss";

class SidebarTemplate extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='sidebar-template'>
        <Sidebar/>
        <MainContent content={this.props.content}/>
      </div>
    )
  }
}

export default SidebarTemplate;