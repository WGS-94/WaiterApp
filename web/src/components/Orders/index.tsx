// import { Clock } from 'phosphor-react';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import * as S from './styles';

const orders: Order[] = [
  {
    '_id': '6372e48cbcd195b0d3d0f7f3',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': 'quatro-queijos-1668654829111.png',
          'url': 'http://localhost:3001/files/1668472896991-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6372e48cbcd195b0d3d0f7f4'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': 'coca-cola-1668655932105.png',
          'url': 'http://localhost:3001/files/coca-cola-1668655932105.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard
        icon="⏱️"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🥘"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </S.Container>
  );
}
