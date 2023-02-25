import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  justify-items: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 5px;
  background-color: darkred;
  border-radius: 5px;
  transition: all 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  &:hover{
    background-color: #fff;
    color: #000;
    transform: scale(1.04);
}


@media (min-width: 440px) {
  & {
     width: 200px;
  }
`;

export const Img = styled.img`
  border-radius: 5px;
  width: 250px;
`;

export const Title = styled.h3`
  font-size: 1em;
  text-align: center;
  padding: 8px 0;
  color: darkgoldenrod;
`;
