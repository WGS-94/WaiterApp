import logoImg from '../assets/images/logo.svg';

export function Header() {
  return (
    <header>
      <div className='page-details'>
        <h1>Pedidos</h1>
        <p>Acompanhe os pedidos dos clientes</p>
      </div>

      <img src={logoImg} alt="logo" />
    </header>
  );
}
