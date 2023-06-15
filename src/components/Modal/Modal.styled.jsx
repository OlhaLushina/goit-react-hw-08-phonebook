import styled from 'styled-components';
import { MdClose as MdCloseStyled } from 'react-icons/md';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  padding: 10px 30px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background: #fff;
`;

export const MdClose = styled(MdCloseStyled)`
  position: absolute;
  top: 20px;
  right: 0px;
  width: 50px;
  cursor: pointer;
`;
