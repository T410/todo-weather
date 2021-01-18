import AppException from "../../../exceptions/AppException.js";
/**
 * Handles create todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoCreateHandler(server, req, res) {
	const { title, description, priority } = req.body;
	return server.db
		.models()
		.then((models) => models.Todo.create({ title, description, priority }))
		.then((result) => ({ data: result }))
		.catch((error) => {
			return AppException.reject(error.message);
		});
	// JSON.stringify(error.message));
	// return AppException.reject('Internal error', 'Creating todos not implemented');
}
