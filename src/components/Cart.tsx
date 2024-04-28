import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from '../store/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  const removeFromCart = (product) => {
    dispatch(remove(product.id));
  }
  const cards = cartProducts?.map((product) => (
    <div className="col-md-3">
      <Card key={product.id} className="h-100">
        <div className="display-flex aling-items-center ">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR:{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={() => removeFromCart(product)}>
           Remove From Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1>Cart Items</h1>
      <div className="row p-2">{cards}</div>
    </div>
  )
}

export default Cart