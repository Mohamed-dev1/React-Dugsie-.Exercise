import { useState } from "react";

const ShoppingCard = () => {
  // products
  const [products, setProducts] = useState([]);
  //products name waxaan ahe adey kas o joho dallka 
  const [productName, setProductName] = useState("");
  // Product price
  const [price, setPrice] = useState("");

  const handleproduct = () => {
    if (productName.trim() !== "" && price.trim() !== "") {
      const newproduct = {
        id: Date.now(),
        name: productName,
        prrice:  parseFloat(price),
        quantity: 1
      };

      setProducts([...products, newproduct]);
      setProductName("");
      setPrice("");
    }
  };

  const removeProduct=(id)=>{
      const Updateproducts=products.filter(products=>products.id!==id)

      setProducts(Updateproducts)
  }

     const increasequatitt=(id)=>{
        console.log(products)

        const Updateproducts=products.map(product=>(
            product.id===id ? {...product,quantity:product.quantity+1}:products
        ))
      console.log(Updateproducts)
        setProducts(Updateproducts)
     }

     const decresequatity=(id)=>{
        
        const Updateproducts=products.map(product=>(
            product.id===id && product.quantity>1?{...product,quantity:product.quantity-1}:product
        ))
        setProducts(Updateproducts)
     }

     const totalprice=products.reduce((total,prduct)=> total+prduct.prrice*prduct.quantity,0)
  return (
    <div>
      <div>
        <h1>Simple Shopping Card</h1>
        <h3>Add a product</h3>
        <input 
          type="text" 
          placeholder="product Name" 
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <input 
          type="number" 
          min={0}
          placeholder="product price" 
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button onClick={handleproduct}>Add to cart</button>
      </div>

      {
      products.length > 0 ? (
       <div> <h3>product in card</h3>
        //list of product
        <ul>
        {
            products.map(product=>(
             <li key={product.id}> 
                <strong>{product.name}</strong> -${product.prrice.toFixed(2)}

                <div>
                    quantity:
                    <button onClick={()=>decresequatity(product.id)}>-</button>
                    {product.quantity}
                    <button onClick={()=>increasequatitt(product.id)}>+</button>
                    
                </div>
                <button onClick={()=>removeProduct(product.id)}>Remove</button>
                
             </li>
            ))
        }
        </ul>
                <h4>Total price:${totalprice}</h4>
         </div>
      ) : (
        <h3>this card is empty</h3>
      )
      }
    </div>
  );
};

export default ShoppingCard;