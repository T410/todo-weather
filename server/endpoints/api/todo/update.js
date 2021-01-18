import AppException from "../../../exceptions/AppException.js";
/**
 * Handles update todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoUpdateHandler(server, req, res) {
	const { title, description, priority, id } = req.body;
	return server.db
		.models()
		.then((models) =>
			models.Todo.update(
				{ title, description, priority },
				{ where: { id } }
			)
		)
		.then((result) => {
			return { data: result };
		})
		.catch((error) => {
			return AppException.reject(error.message);
		});
	// JSON.stringify(error.message));
	// return AppException.reject('Internal error', 'Creating todos not implemented');
}
