import * as express from 'express';
import { Todo } from './Todo';

const PORT = 3000;
const app = express();

const todos: Array<Todo> = [
  {
    id: 0,
    title: 'test todo',
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

app.get('/todos/', (req, res) => res.json(todos));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
