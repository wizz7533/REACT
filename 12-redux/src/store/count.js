/**
 * Les reducer sont de simple de fonction qui permettent d'initialiser l'etat du store
 * et de mettre a jour cet etat
 * Cette fonction prend 2 paramètres:
 *  - State: donné automatiquement par redux
 *  - action: un obj javascript simple, qui contient le type d'action (string) et la nouvelle valeur (payload)
 *      const action = {type: 'incrementer', payload: ''}
 */

// Etat initial du store:
const initialState = {
    count: 0
}


function countReducer(state=initialState, action) {
    switch (action.type) {
        case 'incrementer':
            break;
        case 'decrementer':
            break;
        default:
            break;
    }
}