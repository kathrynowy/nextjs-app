/* eslint-disable @typescript-eslint/ban-ts-comment */
import Link from 'next/link';

import { TTodo } from '../../../typings';

const fetchTodos = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;

  await new Promise(resolve => setTimeout(resolve, timeout));

  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: TTodo[] = await res.json();

  return todos;
};

const TodosList = async () => {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo: TTodo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}> Todo: {todo.id} </Link>
        </p>
      ))}
    </>
  );
};

export default TodosList;
