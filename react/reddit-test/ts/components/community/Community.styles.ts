import styled from "styled-components";

export const WrapperList = styled.div`
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgb(237, 239, 241);
  border-bottom: 1px solid rgb(237, 239, 241);
  font-size: 14px;
  font-weight: 500;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 0.5px;
  gap: 10px;
`;



export const ItemStyle = styled.div`
`

export const Content = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`

export const Position = styled.span`
  font-size: 14px;
  text-align: end;
  font-weight: 600;
  width: 20px;
`

export const PositionArrow = styled.div<{icon: string | null}>`
  font-size: 18px;
  width: 10px;
  color: ${props => props.icon === "UP" ? "green" : "red"};
`

export const Icon = styled.img`
  border-radius: 9999px;
  padding-left: 2px;
  width: 32px;
  height: 32px;
`

export const Link = styled.div`
  flex: 1;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
`
