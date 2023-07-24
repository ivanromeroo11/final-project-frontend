import { useProducts } from "../../hooks/useProducts";


const Panel = () => {

const { data } = useProducts()
console.log('>estoy en panel ', data?.products)

  
return (
  <>
<h1>Bienvenido a la mejor pagina de componentes</h1>

{ data?.products.map((products) => 
 <p key={products.id}>{products.name}</p>)}
  </>
)
 
}
export default Panel;
