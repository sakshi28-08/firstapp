import React,{classes,props,orderHandler} from 'react'

const Conditional = () => {
    const cartContentButtons = (
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button> &&
        <button className={classes["button--alt"]} onClick={orderHandler}>Order's Details</button>    
      );
    
      const orderDetailsButtons = (
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button> &&
        <button className={classes["button--alt"]} onClick={orderHandler}>Cart's Content</button> &&    
        <button className={classes["button--alt"]} onClick={orderHandler}>Order's Checkout</button>        
      );
    
      const modalActions = (
        <div className={classes.actions}>
          !isCheckout && hasItems ? cartContentButtons : orderDetailsButtons;
        </div>
      );
  return (
    <div>Conditional</div>
  )
}

export default Conditional