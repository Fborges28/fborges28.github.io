import React from "react";
import HeaderLine from "../components/header-line";
import JobResume from "../components/job-resume";
import SidebarTemplate from "../layout/index";

import pearson from "../../assets/img/jobs/bv-pearson.png";
import saga from "../../assets/img/jobs/saga1.png";

class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: [
        {
          title: "Biblioteca Virtual Pearson",
          img: pearson,
          description: "Projeto desenvolvido por uma equipe multidisciplinar, designers, arquitetos de software e desenvolvedores backend e frontend. Trabalhei envolvido nas áreas de UX, UI, e desenvolvimento FrontEnd. Utilizamos ReactJS, Sass, VanillaJS",
          url: "https://bv4.digitalpages.com.br"
        },
        {
          title: "Grupo Saga",
          img: saga,
          description: "Site base para todos os demais sites da concessionária Saga. Desenvolvi o tema dentro da plataforma SearchOptics, implementando a estrutura HTML e CSS elaborada previamente em ambiente de desenvolvimento local. Tecnologias utilizadas: Bootstrap, CSS, HTML, VanillaJS",
          url: "http://www.gruposaga.com.br/"
        }
      ]
    }
  }

  render(){
    let portfolioContent = (
      <div className="portfolio inner-simple">
        <HeaderLine title="Portfólio"/>
        {
          this.state.jobs.map((item, index) => <JobResume info={item}/>)
        }
      </div>
    );

    return (
      <SidebarTemplate content={portfolioContent}/>
    )
  }
}

export default Portfolio;