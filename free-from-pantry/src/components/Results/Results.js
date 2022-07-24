import Pantry from "../Pantry/Pantry";
import React from "react";
import '../Results/Results'

const Results = ({ pantries }) => {
    return (
        <div className="results">
            {
                !pantries.length ? (
                    <div></div>
                ) : (
                    pantries.map((pantry) => (
                        <Pantry 
                            name={pantry.name}
                            city={pantry.city}
                            state={pantry.state}
                            phone={pantry.phone}
                            email={pantry.email}
                            website={pantry.website}
                            description={pantry.description}
                            allergen={pantry.allergen}
                            _id={pantry._id}
                        />
                    ))
                )
            }
        </div>
    )
}

export default Results;