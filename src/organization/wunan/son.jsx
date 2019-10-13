import React from "react";
import './index.css'
export default props => {
  return (
  
    <div className="biankuang">
      <img
        src={props.src || require("./img/default.jpg")}
        width={props.width || "200"}
        height={props.height || "200"}
        className="tupian"
        alt="产品-手机"
      />
      <p className="p1"><span className="qian">￥</span>{props.$ || "0.00"}.00</p>
      <p className="p2">{props.name || "--"}</p>
      <p className="p3">{props.diss || "--"}</p>
      <p className="p4">{props.count || "0"}</p>
    </div>
    
  );
};
