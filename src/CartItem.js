import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price:999,
            title: "Phone",
            qty:1,
            img:''
        }
    }
    render(){
        const {price,title, qty} = this.state;//this is object de structuring
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs: {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div style={ { color: '#777' } } className="cart-item-actions">
                        <img alt="increase" className="actions-icons" src ="https://cdn-icons-png.flaticon.com/512/1665/1665680.png" />
                        <img alt="decrease" className="actions-icons" src ="https://cdn-icons-png.flaticon.com/512/1665/1665714.png" />
                        <img alt="delete" className="actions-icons" src ="https://cdn-icons-png.flaticon.com/512/4980/4980302.png" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        boderRadius: 4,
        background: '#777'
    }
}

export default CartItem;