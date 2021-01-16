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
    let aboutContent = (
      <div>
        <h2>Descrição profissional</h2>
        <p>Me chamo Felipe Borges, sou formado em <strong>Jogos Digitais</strong>, pela PUCSP, e no curso técnico em <strong>Design Gráfico</strong>,  pelo Centro Paula Souza. No início da minha carreira, trabalhei por  algum tempo como Web Designer, com tratamento de imagens, criação de  layouts para e-mail marketing e, com o passar do tempo, foquei  especificamente no desenvolvimento (programação).</p>
        <p>Atualmente, sou desenvolvedor web com foco no desenvolvimento Front-End. O desenvolvimento front-end me agrada porque me preocupo bastante com o design e em como boas experiências de uso, proporcionadas pelo design, podem ajudar as pessoas em suas tarefas diárias. </p>
        <p>No meu tempo livre costumo estudar filosofia, história, design e também programação, especificamente para desenvolver alguns jogos.</p>
        <h2>Tecnologias</h2>
        <div className="technologies-work">
          <button className="btn btn-primary">HTML</button>
          <button className="btn btn-primary">CSS</button>
          <button className="btn btn-primary">Bootstrap css</button>
          <button className="btn btn-primary">SASS</button>
          <button className="btn btn-primary">Javascript (Vanilla JS)</button>
          <button className="btn btn-primary">jQuery</button>
          <button className="btn btn-primary">JSON</button>
          <button className="btn btn-primary">React</button>
          <button className="btn btn-primary">Php</button>
          <button className="btn btn-primary">Gulp</button>
          <button className="btn btn-primary">Webpack</button>
          <button className="btn btn-primary">npm</button>
        </div>
      </div>
    )

    return (
      <SidebarTemplate content={aboutContent}/>
    )
  }
}

export default Home;
