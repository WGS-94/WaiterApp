import { Clock } from 'phosphor-react';
import * as S from './styles';

export function Orders() {
  return (
    <S.Container>
      <S.Board>
        <header>
          <Clock size={20} />
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <S.OrdersContainer>
          <button>Mesa </button>
        </S.OrdersContainer>
      </S.Board>
    </S.Container>
  );
}
