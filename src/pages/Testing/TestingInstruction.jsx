import React from "react";
import { Link } from "react-router-dom";

import bgImg from './testingBg.svg'

function TestingInstruction() {
  return (
    <section className="testing" style={{backgroundImage: `url(${bgImg})`}}>
      <h2 className="testing__title">Скрининговый тест на аутизм для детей (модифицированный)</h2>
      <h3 className="testing__subtitle">Пожалуйста, ответьте на вопросы о Вашем ребёнке.</h3>
      <p className="testing__instruction">
      При ответах учитывайте, как обычно ведёт себя ребёнок. Если Вы замечали у ребёнка поведение несколько раз, но обычно он/она так себя не ведёт, то, пожалуйста, ответьте "нет". Пожалуйста, выберите в каждом вопросе "да" или "нет". 
      </p>
      <p className="testing__thanks"></p>
      <Link to='/testing/entry'><button className='testing__btn'>Начать тест</button></Link>
      <br/>
      <br/>
      <Link to='/testing/manual'>Ознакомиться с инструкцией</Link>
    </section>
  );
}

export default TestingInstruction;
