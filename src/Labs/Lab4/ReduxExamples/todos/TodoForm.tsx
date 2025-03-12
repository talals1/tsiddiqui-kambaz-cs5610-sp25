import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
    //     { todo, setTodo, addTodo, updateTodo }: {
    //     todo: { id: string; title: string };
    //     setTodo: (todo: { id: string; title: string }) => void;
    //     addTodo: (todo: { id: string; title: string }) => void;
    //     updateTodo: (todo: { id: string; title: string }) => void;// }) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <ListGroup.Item>
            {/* <Button onClick={() => addTodo(todo)} */}
            <Button onClick={() => dispatch(addTodo(todo))}
                variant="success"
                id="wd-add-todo-click"> Add </Button>
            {/* <Button onClick={() => updateTodo(todo)} */}
            <Button onClick={() => dispatch(updateTodo(todo))}
                variant="warning"
                id="wd-update-todo-click"> Update </Button>
            <FormControl value={todo.title}
                // onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
        </ListGroup.Item>
    );
}
