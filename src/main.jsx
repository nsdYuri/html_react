import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Bloco de rotas
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import EditarProdutos from './Routes/EditarProdutos.jsx'
import Home from './Routes/home.jsx'
import Produtos from './Routes/produtos.jsx'
import Error404 from './Routes/Error404.jsx'

//Criuando o objeto de rotas
const router = createBrowserRouter([
  { path: '/', element: <App />,
      errorElement: <Error404 />,      
      children: [
        { path: '/', element: <Home />},
        { path: '/produtos', element: <Produtos />},
        { path: '/editar/produtos/:id', element: <EditarProdutos />}
      ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)