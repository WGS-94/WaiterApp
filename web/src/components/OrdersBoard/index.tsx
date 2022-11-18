import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import * as S from './styles';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({icon, title, orders}: OrdersBoardProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenOrder() {
    setIsModalVisible(true);
  }

  // function handleCloseOrder() {
  //   setOpen(false)
  // }

  return (
    <>
      <OrderModal visible={isModalVisible} />
      <S.Board>
        <header>
          {icon}
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </header>

        {orders.length > 0 ? (
          <S.OrdersContainer>
            {orders.map((order) => (
              <button key={order._id} type="button" onClick={handleOpenOrder}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            ))}
          </S.OrdersContainer>
        ): (
          <S.Empty>
            <span>Vazio</span>
          </S.Empty>
        )}

      </S.Board>
    </>
  );
}
