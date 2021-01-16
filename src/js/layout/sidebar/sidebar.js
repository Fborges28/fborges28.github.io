import React from "react";
import { Link } from 'react-router-dom';
import profilePhoto from "../../../assets/img/profile.jpg";
import "./sidebar.scss";

class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showMenu: false,
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
          <div className="sidebar-profile">
            <div className="profile-photo">
              <img src={profilePhoto} alt="Felipe Borges - Foto de Perfil"/>
            </div>
            <div className="text-center sidebar-small-description">
              <small>Felipe Borges</small>
              <br/>
              <small>Desenvolvedor web</small>
            </div>
          </div>
          <nav className="main-nav">
            <ul>
              {
                this.state.menu.map((item, index) => <li key={"menu-"+index}><Link to={item.url}>{item.title}</Link></li>)
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