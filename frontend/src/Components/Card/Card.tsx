import React from "react";
import "./Card.css";

interface Props  {
    companyName: string;
    ticker: string;
    price: number;
};

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
    return (
    <div className="card">
        <img src="https://source.unsplash.com/DoumgfLtasI"
            alt='apple'
        />
        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className="info">somethings about Apple</p>
    </div>
    );
};

export default Card;
