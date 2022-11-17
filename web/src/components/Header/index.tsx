import logoImg from '../../assets/images/logo.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <div className='page-details'>
          <h1>Pedidos</h1>
          <p>Acompanhe os pedidos dos clientes</p>
        </div>

        <img src={logoImg} alt="logo" />
      </S.Content>
    </S.Container>
  );
}
