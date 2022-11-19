import { X, Clock, CookingPot, CheckSquare } from 'phosphor-react';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import * as S from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {

  if(!visible || !order){
    return null;
  }

  // let total = 0;

  // order.products.forEach(({ product, quantity }) => {
  //   total += product.price * quantity;
  // });

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <S.Overlay>
      <S.ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button">
            <X size={20} />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            { order.status === 'WAITING' && <Clock size={20} /> }
            { order.status === 'IN_PRODUCTION' && <CookingPot weight="bold" size={20} />}
            { order.status === 'DONE' && <CheckSquare size={20} color="#13a300" weight="fill" />}
            <strong>
              { order.status === 'WAITING' && 'Fila de espera' }
              { order.status === 'IN_PRODUCTION' && 'Em produção'}
              { order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>

        <S.OrderDetails>
          <strong>Itens</strong>

          <div className="order-itens">
            {order.products.map(({_id, product, quantity }) => (
              <div key={_id} className='item'>
                <img src={`http://localhost:3001/files/${product.imagePath}`} alt={product.name} />
                <span>{quantity}x</span>

                <div className='product-details'>
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>

        </S.OrderDetails>
      </S.ModalBody>
    </S.Overlay>
  );
}
