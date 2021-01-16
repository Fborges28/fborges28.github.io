import React from "react";
import HeaderLine from "../components/header-line";
import JobResume from "../components/job-resume";
import SidebarTemplate from "../layout/index";

import pearson from "../../assets/img/jobs/bv-pearson.png";
import saga from "../../assets/img/jobs/saga1.png";
import inglesveracruz from "../../assets/img/jobs/ingles-veracruz.png";
import projetocidadaos from "../../assets/img/jobs/projeto-cidadaos.png";
import protocolosretorno from "../../assets/img/jobs/protocolos-retorno.png";
import marketup from "../../assets/img/jobs/marketup.png";

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
        },
        {
          title: "Inglês Vera Cruz",
          img: inglesveracruz,
          description: "Projeto desenvolvido para apresentar as atividades escolares dos alunos do curso de Inglês da Escola Vera Cruz. Aqui desenvolvi a proposta de layout e também a programação, em Wordpress. O design foi elaborado a partir de documentação coletada pela coordenação do curso",
          url: "https://site.veracruz.edu.br/materialdidatico/inglesdovera"
        },
        {
          title: "Projeto Cidadãos",
          img: projetocidadaos,
          description: "A escola Vera Cruz, em parceria com a editora Vagalume, inaugurou uma biblioteca na comunidade de Mirinzal. A história desse projeto é contada aqui neste site. Elaboramos uma linha do tempo, para demonstrar a evolução da parceria e dos laços construídos com a comunidade. A paleta de cores escolhida faz referência as cores utilizadas pela Escola, em seu projeto de comunicação visual, mas também a editora Vagalume, assim como ao cenário da comunidade. O projeto é desenvolvido em ReactJS",
          url: "https://site.veracruz.edu.br/projetoscidadaos/"
        },
        {
          title: "Protocolos de retorno",
          img: protocolosretorno,
          description: "Devido à pandemia do novo coronavírus, se tornou necessário divulgar os protocolos de convívio social nos espaços compartilhados. Derivado dessa necessidade, desenvolvemos esse site apresentando os protocolos de retorno para as atividades escolares com duas frentes principais: Orientações para funcionários e para os pais e os alunos. O design precisava ser simples e direto, para reforçar o foco no conteúdo, por isso utilizamos umasolução visual muito limpa e minimalista. O projeto foi desenvolvido com as ferramentas Adobe XD, para o design, e Wordpress, para a programação.",
          url: "https://site.veracruz.edu.br/protocolos-retorno"
        },
        {
          title: "MarketUP",
          img: marketup,
          description: "Reprogramação do site da empresa MarketUP para uma estrutura de código estática (html, css e javascript), com a intenção de melhorar a usabilidade, principalmente com relação ao tempo de carregamento das páginas, e também ampliar a avaliação do site pelos motores de busca do Google.",
          url: "http://marketup.com/"
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