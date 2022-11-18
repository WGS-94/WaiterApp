import { X, Clock } from 'phosphor-react';
import * as S from './styles';

interface OrderModalProps {
  visible: boolean;
}

export function OrderModal({ visible }: OrderModalProps) {

  if(!visible){
    return null;
  }

  return (
    <S.Overlay>
      <S.ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button type="button">
            <X size={20} />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <Clock size={20} />
            <strong>Fila de espera </strong>
          </div>
        </div>
      </S.ModalBody>
    </S.Overlay>
  );
}
