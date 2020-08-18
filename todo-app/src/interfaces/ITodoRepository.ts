import Todo from './Todo';

export default interface ITodoRepository {
  getAllAsync(): Promise<Array<Todo>>;
  getOneAsync(id: number): Promise<Todo>;
  registAsync(todo: Todo): Promise<void>;
  updateAsync(todo: Todo): Promise<void>;
  deleteAsync(id: number): Promise<void>;
}
