import styled from 'styled-components';

export const Overlay = styled.div`
  /* padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1; */

  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 488px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      background-color: transparent;
      border: 0;
      outline: 0;
      line-height: 0;

      /* &:hover {
        background: #666;
        color: #000;
      } */
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;
