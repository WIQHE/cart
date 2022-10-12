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
        // this.increaseQuant = this.increaseQuant.bind(this); this is also a method of object binding to method
    }
    increaseQuant = () => {//whenever we uses the arrow functions it automatically binds the object to the function in these senarios
        // this.state.qty +=1; this will cahnge the value but will not re render the react component
        
        
        // this is setState form 1
        this.setState({
            qty : this.state.qty + 1
        });
    }
    decreaseQuant = () => {
        // setState form 2 - if previous state requried use this
        this.setState((prevState) => {
            return{
                qty: prevState.qty -1
            }
        });
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
                        <img 
                            alt="increase" 
                            className="actions-icons" 
                            src ="https://cdn-icons-png.flaticon.com/512/1665/1665680.png" 
                            onClick={this.increaseQuant}
                        />
                        <img 
                            alt="decrease" 
                            className="actions-icons" 
                            src ="https://cdn-icons-png.flaticon.com/512/1665/1665714.png" 
                            onClick={this.decreaseQuant}
                        />
                        <img 
                            alt="delete" 
                            className="actions-icons" 
                            src ="https://cdn-icons-png.flaticon.com/512/4980/4980302.png" 
                        />
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
        borderRadius: 4,
        background: '#777'
    }
}

export default CartItem;