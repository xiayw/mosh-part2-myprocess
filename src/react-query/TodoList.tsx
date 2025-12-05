import { useQuery } from '@tanstack/react-query';

import { Spinner } from "@chakra-ui/react";
import useTodo from '../routing/hooks/useTodo';



const TodoList = () => {


  const {data: todos, error, isLoading} =useTodo();

  if (isLoading) return <p>loading</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
    {isLoading && <Spinner>myloading</Spinner>}
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
    </>
  );
};

export default TodoList;
