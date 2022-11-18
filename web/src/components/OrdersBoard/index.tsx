import { Order } from '../../types/Order';
import * as S from './styles';

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({icon, title, orders}: OrdersBoardProps) {
  return (
    <S.Board>
      <header>
        {icon}
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 ? (
        <S.OrdersContainer>
          {orders.map((order) => (
            <button key={order._id} type="button">
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
  );
}
