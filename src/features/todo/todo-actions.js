import { list, create, remove, update, sort } from "./todo-slice.js";
import store from "../../app/store";
export function listTodos(store) {
	fetch("/api/todo/list")
		.then((response) => response.json())
		.then(({ data }) => {
			store.dispatch(list(data));
		});
}

export function createTodo(data) {
	fetch("/api/todo/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			// if (!response.ok) {
			// 	console.log(response);
			// 	throw new Error(response.message);
			// }
			return response.json();
		})
		.then((res) => {
			if (res.code >= 200 && res.code < 300) {
				store.dispatch(create(res.data));
			}
		})
		.catch((error) => {
			console.log(error);
		});
}

export function updateTodo(data) {
	fetch("/api/todo/update", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			// if (!response.ok) {
			// 	console.log(response);
			// 	throw new Error(response.message);
			// }
			return response.json();
		})
		.then((res) => {
			if (res.code >= 200 && res.code < 300) {
				store.dispatch(update(data));
				sortTodo(store.getState().todo.sortingType);
			}
		})
		.catch((error) => {
			console.log(error);
		});
}

export function deleteTodo(id) {
	fetch("/api/todo/delete", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id: id }),
	})
		.then((response) => {
			return response.json();
		})
		.then(() => {
			store.dispatch(remove(id));
		})
		.catch((error) => {
			console.log(error);
		});
}

export function sortTodo(sortingFunction) {
	store.dispatch(sort(sortingFunction));
}
