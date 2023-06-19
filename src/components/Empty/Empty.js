import React from "react";
import "./Empty.css";
import { Link } from "react-router-dom";

function Empty({ title }) {
  return (
    <div className="empty__container">
      <img src="https://uzum.uz/static/img/hearts.cf414be.png" width={150} alt="" />
      <h3>{title}da hozircha mahsulot yo'q</h3>
      <p>
        Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv
        orqali toping
      </p>
      <Link to={"/"}>Bosh sahifa</Link>
    </div>
  );
}

export default Empty;
