import { useState, useEffect } from "react";

const localCache = {};

export default function useCitiesList(city_state) {
    const [citiesList, setCitiesList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!city_state) {
            setCitiesList([]);
        } else if (localCache[city_state]) {
            setCitiesList(localCache[city_state])
        } else {
            requestCitiesList();
        }

        async function requestCitiesList() {
            setCitiesList([]);
            setStatus("loading");

            const res = await fetch (
                `https://freefromcitiesapi.herokuapp.com/cities/search?city_state=${city_state}`
            )
            const json = await res.json();
            localCache[city_state] = json.cities || [];
            setCitiesList(localCache[city_state]);
            setStatus("loaded");
        }
    }, [city_state]);

    return [citiesList, status]
}

console.log(JSON.cities)