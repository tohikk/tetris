import React, { useState } from "react";
import "./Singlerouter.css";
import { useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function Singlerouter() {
  const baza = useLocation();
  const item = baza.state.item;

  return (
    <div className="container">
      <div className="single__route">
        <img src={item?.url} className="route__img" alt="" />
        <div className="single__left">
          <div className="top">
            <h2>{item?.title}</h2>
            <button className="wishes">
              &nbsp;
              <span>Istaklarga</span>
            </button>
          </div>
          <p className="card__rating">
            <AiFillStar />
            <span>5.0 (585 baho)</span>
          </p>
          <br />
          <p>Yetkazib berish:  1 kun, bepul</p>
          <br />
          <br />
          <div className="line"></div>
          <br />
          <h4>Miqdor: 1</h4>
          <br />
          <br />
          <br />
          <h3>Narx: {item?.price} </h3>
          <br />
          <br />
          <del>{Math.round(item.price * 1.5)} so'm</del>
          <br />
          <br />
          <span className="month">
            {Math.round((item.price * 1.44) / 12)} so'm/oyiga
          </span>
          <br />
          <br />
       
          <br />
          <br />
          <div className="buttons">
            <button className="add__cart">Savatga qo'shish</button>
            <button className="add__bag">
              Tugmani 1 bosishda xarid qilish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlerouter;
