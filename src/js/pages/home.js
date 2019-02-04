import React from "react";
//PAGES IMPORTS
import { Link } from 'react-router-dom';
import SidebarTemplate from "../layout/index";

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log("Home");
  }
  
  render() {
    let homeContent = (
      <div>
        <h2>Olá,</h2>
        <p>Meu nome é Felipe Borges, sou formado no curso de <strong>Jogos Digitais</strong>, pela PUCSP, e no curso técnico em <strong>Design Gráfico</strong>, pelo Centro Paula Souza. No início da minha carreira, trabalhei por algum tempo como Web Designer, com tratamento de imagens, criação de layouts para e-mail marketing e, com o passar do tempo, foquei especificamente no desenvolvimento (programação).</p>
        <p>Nos últimos anos trabalhei principalmente com desenvolvimento web voltado para a área de educação, desde o desenvolvimento de jogos educacionais até o desenvolvimento de plataformas de ensino à distância.Esta é uma pequena introdução da minha experiência profissional, clique no botão à seguir para saber mais sobre a minha trajetória.</p>
        <p>Esta é uma pequena introdução da minha experiência profissional, clique no botão à seguir para saber mais sobre a minha trajetória.</p>
        <div className="wp-block-button">
          <Link className="btn-simple" to="/sobre-mim">Ver mais</Link>
        </div>
      </div>
    )

    return (
      <SidebarTemplate content={homeContent}/>
    )
  }
}

export default Home;
