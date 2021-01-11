// import react from 'react';
import { useEffect, useState } from 'react';

export const Locataire = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/api/locataire/getAllLocataire/').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(jsonResponse => {
            setInitialState(jsonResponse.result)
            // initialState.forEach(element => {
            //     console.log(element);
            // });

            console.log(initialState);
        })
    }, []);

    return (
        <div>Les locataire

            {initialState.length > 0 && initialState.map(e =>
            
                <li>{e.prenom}</li>
            )}

        </div>
    )
}