import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from './config';
import CompteForm from './components/CompteForm';
import CompteList from './components/CompteList';

function App() {
    const [comptes, setComptes] = useState([]);

    const chargerComptes = () => {
        axios.get(`${API_BASE_URL}/banque/comptes`)
            .then(response => setComptes(response.data))
            .catch(error => console.error("Erreur lors du chargement :", error));
    };

    useEffect(() => {
        chargerComptes();
    }, []);

    return (
        <div className="container mt-4">
            <CompteForm onCompteCree={chargerComptes} />
            <hr />
            <CompteList comptes={comptes} />
        </div>
    );
}

export default App;
