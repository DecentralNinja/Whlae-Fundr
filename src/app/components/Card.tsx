import React from "react";

function Card({ title, subtitle, className }: { title: string; subtitle: string; className: string }) {
  return (
      <li className="card">
        <h2 className={`${className}`}>{title}</h2> 
        <p className={`${className}`}>{subtitle}</p>
      </li>
  );
}

export default Card;
