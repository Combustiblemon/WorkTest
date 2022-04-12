import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  margin: 0px;
  color: black;
  border: 1px solid rgb(205, 205, 205);
  position: relative;
`;

export const CardTop = styled.div<{backgroundURL: string}>`
  height: 80px;
  width: 100%;
  margin-top: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;

  background-image: url(${(props) => props.backgroundURL});
  background-position-x: 50%;
  background-position-y: 50%;

  display: flex;
  align-items: flex-end;

  ::before {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0px,
      transparent
    );
    height: 80px;
    width: 100%;
    background-position-x: 0%;
    background-position-y: 0%;
    position: absolute;
    content: "";
  }
`;

export const Link = styled.a`
  margin-bottom: 10px;
  margin-left: 16px;
  color: white;
  text-decoration: none;
  line-height: 20px;
  position: relative;
`