import { X, Clock, CookingPot, CheckSquare } from 'phosphor-react';
import { Order } from '../../types/Order';
import * as S from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
}

export function OrderModal({ visible, order }: OrderModalProps) {

  if(!visible || !order){
    return null;
  }

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
          <div >
            <img src="" alt="" />
            <span>1x</span>
          </div>
        </S.OrderDetails>
      </S.ModalBody>
    </S.Overlay>
  );
}
