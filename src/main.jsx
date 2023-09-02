import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Bloco de rotas
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import EditarProdutos from './Routes/EditarProdutos.jsx'
import Home from './Routes/Home.jsx'
import Produtos from './Routes/Produtos.jsx'
import Error404 from './Routes/Error404.jsx'
import ExcluirProdutos from './Routes/ExcluirProdutos.jsx';

//Criuando o objeto de rotas
const router = createBrowserRouter([
  { path: '/', element: <App />,
      errorElement: <Error404 />,      
      children: [
        { path: '/', element: <Home />},
        { path: '/produtos', element: <Produtos />},
        { path: '/editar/produtos/:id', element: <EditarProdutos />},
        {path: '/excluir/produtos/:id', element: <ExcluirProdutos/>}
      ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)