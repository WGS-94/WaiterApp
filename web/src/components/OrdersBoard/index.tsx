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
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenOrder(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseOrder() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <>
      <OrderModal
        visible={isModalVisible}
        onRequestClose={handleCloseOrder}
        order={selectedOrder}/>
      <S.Board>
        <header>
          {icon}
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </header>

        {orders.length > 0 ? (
          <S.OrdersContainer>
            {orders.map((order) => (
              <button key={order._id} type="button" onClick={() => handleOpenOrder(order)}>
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
