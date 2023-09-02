import { useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
export default function EditarProdutos(){

    document.title = "Editar Produtos";

    //O HOOK useParams()
    const{id} = useParams();
    const produtoRecuperadoPorId = ListaProdutos.filter((produto)=>{
        if(produto.id == parseInt(id)){
            return produto;
        }
    });

    return(
        <> 
            <div>Editar Produtos</div>
            <p>Produto selecionado - {id}</p>
            <p>Produto selecionado - {produtoRecuperadoPorId}</p>
        </> 
    )
}