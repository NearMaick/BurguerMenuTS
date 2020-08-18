import React from 'react';

import { Content, MenuNav, MenuList, SubmenuList } from './styles';

export default function Header() {  

  return (
    <Content>      
      <MenuNav>
        <MenuList>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#none">Treinamentos</a>
            <SubmenuList>
              <li>
                <a href="/standards">Normas Regulamentares</a>
              </li>
              <li>
                <a href="/courses">Cursos</a>
              </li>
            </SubmenuList>
          </li>
          <li>
            <a href="#none">Laudos</a>
          </li>
          <li>
            <a href="/consulting">Consultoria</a>
            <SubmenuList id="training">
              <li>
                <a href="/standards">Normas Regulamentares</a>
              </li>
              <li>
                <a href="/courses">Cursos</a>
              </li>
            </SubmenuList>
          </li>
          <li>
            <a href="/about">Empresa</a>
          </li>
          <li>
            <a href="#none">Noticias</a>
          </li>
          <li>
            <a href="#none">Contato</a>
          </li>
          <li>
            <a href="#none">EAD</a>
          </li>
        </MenuList>
      </MenuNav>
    </Content>
  );
}
