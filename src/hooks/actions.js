// hooks/actions.js

export const createActions = (dispatch, getStore) => ({
  showCharacters: async () => {
    const res = await fetch("https://www.swapi.tech/api/people");
    const data = await res.json();
    const detailed = await Promise.all(
      data.results.map(async (item) => {
        const res = await fetch(item.url);
        return await res.json();
      })
    );
    dispatch({ type: "SET_PEOPLE", payload: detailed });
  },

  showPlanets: async () => {
    const res = await fetch("https://www.swapi.tech/api/planets");
    const data = await res.json();
    const detailed = await Promise.all(
      data.results.map(async (item) => {
        const res = await fetch(item.url);
        return await res.json();
      })
    );
    dispatch({ type: "SET_PLANETS", payload: detailed });
  },

  showVehicles: async () => {
    const res = await fetch("https://www.swapi.tech/api/vehicles");
    const data = await res.json();
    const detailed = await Promise.all(
      data.results.map(async (item) => {
        const res = await fetch(item.url);
        return await res.json();
      })
    );
    dispatch({ type: "SET_VEHICLES", payload: detailed });
  },
});
