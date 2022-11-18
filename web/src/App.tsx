import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <div className="App">
      <Header />
      <Orders />
      <GlobalStyles />
    </div>
  );
}
