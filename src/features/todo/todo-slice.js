import { createSlice } from "@reduxjs/toolkit";
import { sortingFunctions } from "../../utils/helper";

export const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todos: [],
		sortingType: "new_updated_first",
	},
	reducers: {
		list: (state, action) => {
			state.todos = action.payload;
		},
		create: (state, action) => {
			state.todos = [...state.todos, action.payload];
		},
		remove: (state, action) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
		update: (state, action) => {
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						...action.payload,
						updatedAt: new Date().toISOString(),
					};
				}
				return todo;
			});
		},
		sort: (state, action) => {
			state.sortingType = action.payload;
			state.todos = state.todos
				.slice()
				.sort(sortingFunctions[action.payload]);
		},
	},
});

export const { list, create, remove, update, sort } = todoSlice.actions;

export const selectTodos = (state) => {
	return state.todo.todos;
};

export default todoSlice.reducer;
