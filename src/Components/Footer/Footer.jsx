import styled from "styled-components";
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const ContainerFooter = styled.div`
  display: flex;
  background-color: #04244f;
  max-width: 100%;
  height: 80px;
  margin-top: 80px;
  justify-content: space-between;
  & div {
    max-width: 162.19px;
    height: 35px;
    justify-content: space-between;
  }
  & a {
    width: 32.31px;
    height: 35px;
    margin-left: 15px;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  & img {
    width: 32.31px;
    height: 35px;
    margin-top: 20px;
  }
  & p {
    font-family: "Montserrat";
    font-size: 16px;
    line-height: 19.5px;
    margin-top: 30px;
    margin-right: 30px;
    color: #ffffff;
    opacity: 0.8;
  }
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
      </div>
      <p>Desenvolvido por William e Alura</p>
    </ContainerFooter>
  );
};

export default Footer;
