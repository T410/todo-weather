import listHandler from "./list.js";
import createHandler from "./create.js";
import deleteHandler from "./delete.js";
import updateHandler from "./update.js";

/**
 * Registers TODO request handlers
 * @param {String} path current url path
 * @param {Server} server server instance
 */
export default function registerTodo(path, server) {
	server.registerHandler("get", `${path}/list`, listHandler);
	server.registerHandler("post", `${path}/create`, createHandler);
	server.registerHandler("post", `${path}/delete`, deleteHandler);
	server.registerHandler("post", `${path}/update`, updateHandler);
}
