import React from "react";
import "./sidebar.scss";

class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showMenu: true,
      menu: [
        {
          "title": "Home",
          "url": "/"
        },
        {
          "title": "Sobre mim",
          "url": "/sobre-mim"
        },
        {
          "title": "Portfólio",
          "url": "/portfolio"
        },
        {
          "title": "Contato",
          "url": "/contato"
        }
      ]
    }
  }

  toggleMenu(e){
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render(){
    return (
      <div className={`sidebar ${this.state.showMenu ? "": "collapsed-header"}`}>
        <div className="sidebar-content">
          <nav className="main-nav">
            <ul>
              {
                this.state.menu.map((item, index) => <li key={"menu-"+index}><a href={item.url}>{item.title}</a></li>)
              }
            </ul>
          </nav>
        </div>
        <button id="toggle-header" onClick={(e) => this.toggleMenu(e)}><i className="fas fa-sort-down fa-2x"></i></button>
      </div>
    )
  }
}

export default Sidebar;