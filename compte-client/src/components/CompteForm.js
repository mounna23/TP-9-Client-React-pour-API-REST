import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config';

function CompteForm({ onCompteCree }) {
    const [compte, setCompte] = useState({
        solde: '',
        dateCreation: '',
        type: ''
    });

    const handleChange = (e) => {
        setCompte({
            ...compte,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const compteToSend = {
                ...compte,
                solde: parseFloat(compte.solde),
                dateCreation: `${compte.dateCreation}T00:00:00`
            };

            const response = await axios.post(`${API_BASE_URL}/banque/comptes`, compteToSend);
            console.log(' Compte créé :', response.data);

            alert("Compte créé avec succès !");
            setCompte({ solde: '', dateCreation: '', type: '' });

            if (onCompteCree) onCompteCree(); // 🔁 recharge la liste automatiquement
        } catch (error) {
            console.error(" Erreur lors de la création :", error);
            alert("Erreur lors de la création du compte !");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Créer un Compte</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Solde</label>
                    <input
                        type="number"
                        className="form-control"
                        name="solde"
                        value={compte.solde}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date de Création</label>
                    <input
                        type="date"
                        className="form-control"
                        name="dateCreation"
                        value={compte.dateCreation}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select
                        className="form-control"
                        name="type"
                        value={compte.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Sélectionnez un type</option>
                        <option value="COURANT">Courant</option>
                        <option value="EPARGNE">Épargne</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Créer</button>
            </form>
        </div>
    );
}

export default CompteForm;
