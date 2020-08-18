import Todo from '../interfaces/Todo';
import ITodoRepository from '../interfaces/ITodoRepository';
import DbConfig from './DbConfig';
import * as mysql from 'mysql2/promise';

export default class TodoRepository implements ITodoRepository {
  private readonly _dbConfig: DbConfig;

  constructor(dbConfig: DbConfig) {
    this._dbConfig = dbConfig;
  }

  async getAllAsync(): Promise<Array<Todo>> {
    const pool = mysql.createPool(this._dbConfig);

    const [rows] = await pool.execute('select * from tododb.todos;');
    pool.end();

    return rows as any;
  }

  async getOneAsync(id: number): Promise<Todo> {
    return {
      id: 0,
      title: 'todo',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async registAsync(todo: Todo): Promise<void> {
    return;
  }

  async updateAsync(todo: Todo): Promise<void> {
    return;
  }

  async deleteAsync(id: number): Promise<void> {
    return;
  }
}
