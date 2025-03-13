import { createSlice } from "@reduxjs/toolkit";

//что такое slice? - в нем мы описываем полноценные редьюсеры  имя слайса, дефолтные состояния, а на выходе он нам отдаёт готовые редьюсеры\экшены которые мы помещяем в store.
//создаем начальное состояние
const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  //reducers - это? это чистые функции, которые определяют, как изменяется состояние приложения в ответ на действия (actions).
  // Они принимают текущее состояние и действие в качестве входных параметров и возвращают новое состояние.
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const isExists = state.some((r) => r.id === recipe.id);
      if (isExists) {
        return state.filter((item) => item.id !== recipe.id);
      } else {
        state.push(recipe);}
    },
  },
});

export const { actions, reducer } = favoritesSlice;
