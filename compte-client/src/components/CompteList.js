import React from 'react';

function CompteList({ comptes = [] }) {
    return (
        <div className="container mt-4">
            <h2>Liste des Comptes</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Solde</th>
                    <th>Date de Création</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {comptes && comptes.length > 0 ? (
                    comptes.map((compte) => (
                        <tr key={compte.id}>
                            <td>{compte.id}</td>
                            <td>{compte.solde}</td>
                            <td>{compte.dateCreation}</td>
                            <td>{compte.type}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className="text-center">
                            Aucun compte trouvé
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default CompteList;
