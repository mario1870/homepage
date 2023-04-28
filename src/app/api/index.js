const usersRouter = require('../../api/users');

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET requests to /api
  } else if (req.method === 'POST') {
    // Handle POST requests to /api
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export { usersRouter };
