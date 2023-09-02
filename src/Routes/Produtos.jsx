import { Link } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"
import "./Produtos.css"

export default function Produtos() {

    document.title = "Lista de Produtos"
    const tbEstilo = {
        textAlign:"center",
        letterSpacing:"2px",
        color: "#0000ff",
        textDecoration: "none"
    }


  return (
    <div>
        <h1>Produtos</h1>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>EDITAR</th>
                <th>EXCLUIR</th>
            </tr>
            </thead>
            <tbody>
                {ListaProdutos.map((produto,indice)=>(
                    <tr key={indice} style={tbEstilo}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td><Link to={`/editar/produtos/${produto.id}`}>Editar</Link></td>
                        <td><Link to={`/excluir/produtos/${produto.id}`}>Excluir</Link></td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
            <tr>
            <td colSpan={2} style={tbEstilo}>PRODUTOS</td>
            </tr>
            </tfoot>
        </table>
        
    </div>
  )
}