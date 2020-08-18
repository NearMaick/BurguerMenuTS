import styled from 'styled-components';

export const Content = styled.div`
  background: #0ff;

  display: flex;
  justify-content: center;
`;

export const MenuNav = styled.nav`
  background: #f00;

  width: 1300px;

  display: flex;
  align-items: center;
  justify-content: center;  
`;

export const MenuList = styled.ul`
  list-style: none;
  position: relative;

  display: flex;

  li {
    width: 150px;
  }

  a {
    background: #ddd;

    height: 40px;
    width: 130px;

    padding: 3px 5px;
    margin: 0 5px;

    display: block;
    color: #000;
    text-decoration: none;
    text-align: center;
    transition-property: color;
    transition-duration: 0.5s;
  }

  #training {
    left: 503px;
  }

  li:hover ul {
    visibility: visible;
    opacity: 1;
  } 
`;

export const SubmenuList = styled.ul`
  position: fixed;
  left: 204px;

  

  /* visibility: visible;
  opacity: 1; */
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s linear, opacity 0.3s linear;

  li {
    background: #333;
    float: none;
    
  }

  a {
    height: 70px;
  }

  a:hover {
    color: #f00;
  }
`;
