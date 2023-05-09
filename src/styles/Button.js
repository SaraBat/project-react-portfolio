import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 12px 0px 12px 0;
  background-color: #F5F5F5;
  border-radius: 40px;
  border: none;
  padding: 12px;
  font-family: 'Satoshi-Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #333333;

  &:hover {
    background-color: ${(props) => props.btnColor};
    color: white;
  }

  @media (min-width: 1024px) {
    display: inline;
    margin-right: 5px;
  }
`