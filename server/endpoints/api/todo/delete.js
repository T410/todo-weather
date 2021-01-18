import AppException from "../../../exceptions/AppException.js";
/**
 * Handles delete todo request
 * @property {Server} server Server instance
 * @property {Request} req request object
 * @property {Response} res response object
 * @returns {Promise<Object|String>}
 */
export default function todoDeleteHandler(server, req, res) {
	const { id } = req.body;
	return server.db
		.models()
		.then((models) => models.Todo.destroy({ where: { id } }))
		.then((result) => ({ data: result }))
		.catch((error) => {
			return AppException.reject(error.message);
		});
	// JSON.stringify(error.message));
	// return AppException.reject('Internal error', 'Creating todos not implemented');
}
