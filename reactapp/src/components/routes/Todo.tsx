import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Form, Table } from 'react-bootstrap';

interface ValuesType {
  title: string;
  content: string;
}

let todos: any[] = [];

const Todo: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ValuesType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const onSubmit: SubmitHandler<ValuesType> = data => {
    console.log(data);
    let input = <tr><td>{data.title}</td><td>{data.content}</td></tr>;
    todos.push(input);
    console.log(todos);
  };

  return (
    <div>
      <h2>Form</h2>
      <ul>
        <li>
          <div className="btn">
            <Link to="/">home</Link>
          </div>
        </li>
      </ul>
      <Form noValidate onSubmit={handleSubmit(onSubmit)} >
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            {...register('title', {
              required: '必須入力です',
              maxLength: { value: 50, message: '50文字以内で入力してください' },
            })}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Content"
            {...register('content', {
              required: '必須入力です',
              maxLength: { value: 255, message: '255文字以内で入力してください' },
            })}
            isInvalid={!!errors.content}
          />
          <Form.Control.Feedback type="invalid">
            {errors.content?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {todos}
        </tbody>
      </Table>
    </div>
  );
};

export default Todo;
