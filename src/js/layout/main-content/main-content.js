import React from "react";
import Footer from "../../components/footer";
import "./main-content.scss";

class MainContent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="main-content">
        <div className="inner">
          {this.props.content}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default MainContent;