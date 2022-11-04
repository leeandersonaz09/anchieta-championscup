import './index.css';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
//import { useLocation, useNavigate  } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Details = () => {

  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');

  //const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setDescricao(`No Ensino Fundamental (EF) do 6º ao 9º ano, os alunos são apresentados a desafios de maior complexidade, com a finalidade de ressignificar e consolidar as aprendizagens anteriores, além da importante ampliação de repertório linguístico, de ideias e conhecimento, ao longo dos anos/séries.

    Vale ressaltar que, o trabalho pedagógico nesse segmento do EF deixa de ser conduzido por um único professor e passa a ser orientado por uma equipe de educadores especializados em diferentes áreas do conhecimento, tais como: Linguagens, Ciências da Natureza, Matemática e Ciências Sociais. Os diversos tipos de conhecimento trabalhados em cada Disciplina de cada uma dessas áreas, desenvolvem ações a partir de informações variadas, que requerem o uso de ferramentas tecnológicas e inúmeros estímulos, no sentido de estimular o educando a se desenvolver cognitivamente, mas também levá-lo a se tornar mais autônomo, organizado e crítico. Essas habilidades contribuem para a sociabilidade, a empatia, o respeito ao próximo, bem como a formação de atitudes e valores cruciais para que o estudante exerça um papel ativo no seu processo social de aprendizagem.
    
    O Colégio Anchieta está atento à elaboração dos currículos e práticas pedagógicas que consideram a necessidade de continuidade dos processos de aprendizagem e a superação de novos desafios. A Instituição tem o compromisso, também, de estimular seus estudantes a desenvolverem competências e habilidades dentro das novas perspectivas do século XXI, estabelecidas a partir dos quatro pilares da Educação contemporânea, estabelecidos pela UNESCO: Aprender a Aprender, Aprender a Ser, Aprender a Conviver e Aprender a Fazer.
    
    Ciente de seu papel no processo formativo dos alunos do Colégio, a Equipe Pedagógica busca exercer suas funções de forma crítica, criativa, transformadora e comprometida. Nessa perspectiva, nossos educadores compreendem o aluno como sujeito em desenvolvimento e respeitam as singularidades e os anseios de cada estudante em relação ao seu Projeto de Vida.`
    );
    setImg(location.state.data.img);
    //setDescricao(location.state.data.descrição);
    setName(location.state.data.nome);
    setDisciplina(location.state.data.disciplina);

  }, [location]);

  console.log(name)
  /*
  const pushPage = () => {
    navigate("/");
  }
*/

  return (
    <div className="container">
      <div className='content'>
        <header>
          <img src={logo} alt="Logo do Anchieta 40 anos" />
        </header>
        <div className='name'>
          <h1>
          {name}
          </h1>
          </div>
        <div className='disciplina'>
          <h3>
          {disciplina}
          </h3>
        </div>
        <div className='image-container'>
          <img className="img" src={img} alt="" />
        </div>

        <div className='about-container'>
          <div className='about'>
            {descricao}
          </div>
         
        </div>
      </div>
    </div>
  );

};

export default Details;
