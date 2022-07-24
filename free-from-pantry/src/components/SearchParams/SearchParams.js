import { useState, useEffect } from "react";
import React from "react";
import useCitiesList from "../../useCitiesList";
import Results from "../Results/Results";


const ALLERGENS = [ "gluten", "soy", "dairy"];
const STATES = [ "AK", "AZ", "CA", "CO", "CT", "FL", "ID", "IL", "IN", "KS", "MA", "MD", "ME", "MI", "MO", "NH", "NM", "NY", "OH", "OR", "PA", "RI", "SC", "SD", "TX", "VA"];


const SearchParams = () => {
    const [allergen, updateAllergen] = useState("");
    const [state, updateState] = useState("");
    const [city, updateCity] = useState("");
    const [pantries, setPantries] = useState([]);
    const [cities] = useCitiesList(city) // might be city_state
    
    useEffect(() => {
        requestPantries();
    }, []); 
    
    async function requestPantries() {
        const res = await fetch(
            `https://freefrompantryapi.herokuapp.com/pantries/search?allergen=${allergen}&state=${state}&city=${city}`
        );
        const json = await res.json();

        setPantries(json.pantries)
    }

    return (
        <div className="search-params">
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPantries();
                }}
            >
                <label htmlFor="allergen">
                Allergen
                <select 
                    id="allergen"
                    value={allergen}
                    onChange={(e) => {
                        updateAllergen(e.target.value);
                        updateState("");
                    }}
                    onBlur={(e) => {
                        updateAllergen(e.target.value);
                        updateState("");
                    }}
                >
                    <option />
                    {ALLERGENS.map((allergen) => (
                        <option key={allergen} value={allergen}>
                            {allergen}
                        </option>
                    ))}
                </select>
                </label>
                <label htmlFor="state">
                State
                <select 
                    id="state"
                    value={state}
                    onChange={(e) => {
                        updateState(e.target.value);
                        updateCity("");
                    }}
                    onBlur={(e) => {
                        updateState(e.target.value);
                        updateCity("");
                    }}
                >
                    <option />
                    {STATES.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
                </label>
                <label htmlFor="city">
                    City
                    <select 
                        // disabled={!cities.length}
                        id="city"
                        value={city}
                        onChange={(e) => updateCity(e.target.value)}
                        onBlur={(e) => updateCity(e.target.value)}
                    >
                        <option />
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pantries={pantries} />
        </div>
    );
};

export default SearchParams;