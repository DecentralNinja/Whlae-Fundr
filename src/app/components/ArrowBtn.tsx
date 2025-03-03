import React from "react";


const ArrowBtn = ({ title, class1, icon}: {title: string, class1: string, icon: string}) => {
  return (
    <button id="btn1" className={`${class1}`}>
      {title} <i className={icon}></i>
    </button>
  );
};

export default ArrowBtn;
