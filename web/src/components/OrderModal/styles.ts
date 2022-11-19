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
    padding: 0;

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
    margin-top: 2rem;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-itens {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      > span {
          font-size: 14px;
          color: #666;
          display: block;
          min-width: 20px;
          margin-left: 12px;
        }

      img {
        width: 56px;
        height: 28.51px;
        border-radius: 6px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    > span {
        font-size: 14px;
        font-weight: 500;
        opacity: 0.8;
      }

    > strong {
        font-weight: bold;
      }
  }


`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  .primary {
    background-color: #333;
    border-radius: 48px;
    border: 0;
    outline: 0;
    color: #fff;
    font-weight: bold;
    padding: 12px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .secondary {
    background-color: transparent;
    border-radius: 48px;
    border: 0;
    outline: 0;
    color: #D73035;
    font-weight: bold;
    padding: 12px 24px;
    margin-top: 0.6rem;

    &:hover {
      border: 1px solid rgba(204, 204, 204, 0.4);
    }
  }

`;
