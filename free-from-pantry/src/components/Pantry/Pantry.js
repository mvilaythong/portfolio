// import { Link } from "react-router-dom";
import React from "react";
import "../Pantry/Pantry"
import { Card } from "react-bootstrap";

const Pantry = ({ name, city, state, phone, email, website, description, allergen, _id }) => {
    return (
        // <Link to={`/details/${_id}`} className="pantry">
            <div className="card">
            <div className="card-body">
            <h1>{name}</h1>
                <h3>{city}, {state}</h3>
                <h3>{phone}</h3>
                <h3>{email}</h3>
                <h3>{website}</h3>
                <h3>{description}</h3>
            </div>
          </div>
        // </Link>
    );
};

export default Pantry;