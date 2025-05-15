// hooks/store.js

// Estado inicial
export const initialStore = {
  people: [],
  planets: [],
  vehicles: [],
  favourites: [],
};

// Reducer básico (puedes ampliarlo según necesites)
const storeReducer = (state, action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return { ...state, people: action.payload };
    case "SET_PLANETS":
      return { ...state, planets: action.payload };
    case "SET_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "ADD_FAVOURITE":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
};

export default storeReducer; // ✅ Exportación por defecto
