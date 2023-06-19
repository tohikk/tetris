import React from 'react'
import "./CartWrapper.css"
import {addToCart, decrementCart, removeFromCart} from "../../context/cart"
import { useDispatch } from 'react-redux'
function CartWrapper({data}) {


    const handleSubmit = (e) => {
        e.preventDefault();
    
      let token = "5834835746:AAEVop_Y-jcUJARKjXyXrh7s2hHrJeWrkeo";
      let chat_id = -1001879496515;
      let text1 = encodeURIComponent(document.getElementById("text1").value);
      let text2 = encodeURIComponent(document.getElementById("text2").value);
      let text3 = encodeURIComponent(document.getElementById("text3").value);
      let my_text = `Mahsulot oluvchi(Admin tohirjon):%0A - Oluvchi ismi: ${text1}😎 %0A - Oluvchini raqami: ${text2} 📲 %0A -Mmanzili: ${text3}🗺`;
      let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      console.log("Message sent");
    };
    const dispatch = useDispatch()
    return (
    <div className='wrapper'>
        <div className='wp_content'>
    {
        data?.map((item)=> <div key={item.id} className='wp_item'>
        <img className='wp_img' src={item.url} width={100} alt="" />
        <div className="wp_text">
        <div className="wp_display">
        <h3>{item.title}</h3>
        <button onClick={()=> dispatch(removeFromCart(item))}>Ochirish</button>
        </div>
        <h2>{item.quantity * item.price} som</h2>
        <div className="flex">
        <button disabled={item.quantity <= 1} onClick={()=> dispatch(decrementCart(item))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={()=> dispatch(addToCart(item))}>+</button>
        </div>
        <p>{item.price}so'm</p>
        <del>
          
        </del>

        </div>
        <br />
        <br />
        <br />
        <br />
        </div>
        )}
    </div>
    <div className="wp_form">
        <h3>Buyurtmangiz</h3>
        <main>

        <form id="form"  onSubmit={handleSubmit}>
          <input type="text" id="text1" placeholder="Ismingiz" />
          <input type="text" id="text2" placeholder="Raqamingiz" />
          <input type="text" id="text3"  placeholder="Manzil" />
        <h3>Jami: {data?.reduce((a,b)=> a+ (b.price * b.quantity) ,0)} som</h3>
        <button className='btn' type="submit" >Rasmiylashtirish</button>  </form> <br />
        </main>
    </div>
    </div>
  )
}

export default CartWrapper