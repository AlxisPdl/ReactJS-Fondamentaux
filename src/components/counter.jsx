import React, { useState } from 'react';
import './counter.css'

function Counter() {
    // Utiliser useState pour initialiser la variable d'état `count` à 0
    const [count, setCount] = useState(0);
    // Fonction pour incrémenter le compteur
    const incrementCount = () => {
        // Utiliser la méthode `setCount` avec la nouvelle valeur du compteur (`count + 1`)
        // pour mettre à jour la variable d'état `count`
        setCount(count + 1);
    };
    // Fonction pour décrémenter le compteur
    const decrementCount = () => {
        // Utiliser la méthode `setCount` avec la nouvelle valeur du compteur (`count - 1`)
        // pour mettre à jour la variable d'état `count`
        setCount(count - 1);
    };
        // Ajout d'une fonction flêchée qui reinitialise le Count a zero grace au bouton 'Reset'
    const resetCount = () => {
        setCount(0)
    };

    return (
        <div className='counterStyle'>
            {/* Afficher la valeur actuelle du compteur en utilisant la variable d'état `count` */}
            <h2 className='counterTitle'>Counter: {count}</h2>
            {/* Ajouter un bouton pour incrémenter le compteur et lui assigner la fonction `incrementCount` en tant que gestionnaire d'événement onClick */}
            <button onClick={incrementCount}>+</button>
            {/* Ajouter un bouton pour décrémenter le compteur et lui assigner la fonction `decrementCount` en tant que gestionnaire d'événement onClick */}
            <button onClick={decrementCount}>-</button>
            {/* Ajouter un bouton pour reinitialisé le compteur a zero en suis assignant la fonction 'resetCount' */}
            <button className='resetButton' onClick={resetCount}>Reset</button>

        </div>
    );
}

export default Counter;
