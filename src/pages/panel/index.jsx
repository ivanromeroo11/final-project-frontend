import { useProducts } from "../../hooks/useProducts";
import Navegacion from "../../components/navbard";



const Panel = () => {

const { data } = useProducts()
console.log('>estoy en panel ', data?.products)

  
return (
  <>
 <Navegacion />
<h1>Bienvenido a la mejor página de componentes</h1>

{ data?.products.map((products) => 
 <p key={products.id}>{products.name}, {products.brand}, {products.description}, {products.category}, {products.price}, <button>Añadir a cesta</button>   </p>)}
  </>
)
 
}
export default Panel;
