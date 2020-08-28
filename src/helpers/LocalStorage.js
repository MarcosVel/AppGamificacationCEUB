import React from 'react';

// Essa classe não será usada apenas para oa passaporte.
// Poderá ser usada para armazenar dados diversos que poderão ser requisitados pela aplicação, como:
// Avatar, endereço de email, nome do usuário, etc.
// Tudo o que é comum a mais de uma página poderá ser armazenado.
export default class LocalStorage {

    // key - Nome que será usado para recuperar os valores salvos;
    // Ex.: passaporte, usuario, email, avatar.. etc.
    setData = async (key, valor) => {
        try {
          await AsyncStorage.setItem(
            key,
            valor
          );
        } catch (error) {
            console.log(error);
        }
    };

    // Lembre-se que podem existir vários itens armazenados no storage,
    // Portanto, é importante informar qual deles você quer recuperar.
    retrieveData = async (key) => {
        var value = "";        
        try {
            value = await AsyncStorage.getItem(key);
        } catch (error) {
            console.log(error);
        }
        return value;
    };
}
