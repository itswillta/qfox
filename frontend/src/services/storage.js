const saveItemToStorage = (key, value) => {
  localStorage.setItem(key, value);
};

const getItemFromStorage = key => {
  localStorage.getItem(key);
};

const removeItemFromStorage = key => {
  localStorage.removeItem(key);
};

export { saveItemToStorage, getItemFromStorage, removeItemFromStorage };
