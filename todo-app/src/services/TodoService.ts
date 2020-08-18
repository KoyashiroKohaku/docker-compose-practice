import Todo from '../interfaces/Todo';
import ITodoService from '../interfaces/ITodoSerrvice';
import ITodoRepository from '../interfaces/ITodoRepository';

export default class TodoService implements ITodoService {
  private readonly _todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this._todoRepository = todoRepository;
  }

  getAllAsync(): Promise<Array<Todo>> {
    return this._todoRepository.getAllAsync();
  }

  getOneAsync(id: number): Promise<Todo> {
    return this._todoRepository.getOneAsync(id);
  }

  registAsync(todo: Todo): Promise<void> {
    return this._todoRepository.registAsync(todo);
  }

  updateAsync(todo: Todo): Promise<void> {
    return this._todoRepository.updateAsync(todo);
  }

  deleteAsync(id: number): Promise<void> {
    return this._todoRepository.deleteAsync(id);
  }
}
