import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './features/api/apiSlice';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={apiSlice}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
