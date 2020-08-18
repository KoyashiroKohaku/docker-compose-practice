import * as express from 'express';
import Todo from './interfaces/Todo';
import ITodoRepository from './interfaces/ITodoRepository';
import ITodoService from './interfaces/ITodoSerrvice';
import TodoRepository from './repositories/TodoRepository';
import DbConfig from './repositories/DbConfig';
import TodoService from './services/TodoService';

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

app.get('/todos/', async (req, res) => {
  const dbConfig: DbConfig = {
    host: '192.168.1.50',
    database: 'tododb',
    user: 'root',
    password: 'root',
  };
  const todoRepository: ITodoRepository = new TodoRepository(dbConfig);
  const todoService: ITodoService = new TodoService(todoRepository);
  const todos = await todoService.getAllAsync();
  res.json(todos);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
