import { notFound } from 'next/navigation';

import { TTodo } from '../../../../typings';
import { TTodoPageProps } from './types';

// SSR
export const dynamicParams = true;

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  const todos: TTodo = await res.json();

  return todos;
};

const TodoPage = async ({ params: { todoId } }: TTodoPageProps) => {
  const todo = await fetchTodo(todoId);

  if (!todo.id) {
    return notFound();
  }

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>

      <p>Completed: {todo.completed ? 'yes' : 'no'}</p>

      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;

export const generateStaticParams = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/', {});
  const todos: TTodo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map(({ id }: TTodo) => ({ todoId: id.toString() }));
};
