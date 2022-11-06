import './App.css';
import Header from './components/common/Header/Header';
import AppRoutes from './routes/AppRoutes';
import ProductContextProvider from './contexts/ProductContext';

function App() {
  return (
    <>
      <Header />
      <ProductContextProvider>
        <AppRoutes />
      </ProductContextProvider>
    </>
  );
}

export default App;
