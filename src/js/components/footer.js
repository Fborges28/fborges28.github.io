import React from "react";

class Footer extends React.Component {
  render(){
    return (
      <footer className="content-info">
        <div className="container">
              <div className="text-center">
            <a href="https://www.linkedin.com/in/felipe-borges-9291572a/" target="_blank">
              <i className="fab fa-linkedin fa-3x"></i></a>
            <a href="https://github.com/fborges28" target="_blank">
              <i className="m-left-10 fab fa-github-square fa-3x"></i>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;