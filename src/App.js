import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';


export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      winkelmandje:[],
      producten:[
        {itemId:1,name:'footbal 1', prize:10},
        {itemId:1,name:'footbal 2', prize:10},
        {itemId:1,name:'footbal 3', prize:10},
        {itemId:1,name:'footbal 4', prize:10},
        {itemId:1,name:'footbal 5', prize:10},
      ],
    }
  }

  addToWinkelMandje = (name,prize,itemId)=>{
    const item = {
      naam:name,
      prijs:prize,
      itemId:itemId
    };
    var winkelmand = [];
    winkelmand = winkelmand.concat(this.state.winkelmandje);
    winkelmand.push(item);
    this.setState({winkelmandje:winkelmand});
    console.log(winkelmand);
  }

  login = (email,pass)=>{
    var response = fetch('server.domainnaam.nl/Login/email='+email+'&pass='+pass);
    response.JSON(data => {
      console.log(data);
    })
  }

  render(){
    return (
      <div className="App">

        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          {this.state.producten.map(
            (product)=>{
              return(
                <Product/>
              );
            }
          )}
        </div>
        <br/>
        <button
          value='Show Cart'
          
          onCLick={this.showCart}
        >Show Cart</button>
        <br/>
        <br/>
        <br/>
        {this.state.winkelmandje.map(
          (item)=>{
            return(
              <div>
                {item.naam}
                <br/>
                {item.prijs}
                <br/>
                {item.itemId}
                <br/>
              </div>
            );
          }
        )}
      </div>
    );

  }
}