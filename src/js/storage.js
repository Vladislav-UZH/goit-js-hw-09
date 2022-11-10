
const saveDataToLocalStorage = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key,serializedState)
    } catch (error) {
        console.log('Set state error:',error.message);
    }
}

const loadLocalStorage = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.log('Get state error:',error.message);
    }
}

const removeLocalStorage = (key) => {
    try {
        localStorage.removeItem(key)
      console.log(`This key: -${key}- was removed, -${key}-: ${localStorage.getItem(key)}`);   
    } catch (error) {
        console.log('Remove state error:',error.message);
    }
}

export {
    saveDataToLocalStorage,
    loadLocalStorage,
    removeLocalStorage
}