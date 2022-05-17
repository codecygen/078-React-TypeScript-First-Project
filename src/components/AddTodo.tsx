import { useRef } from "react";

//React-TypeScript-Form-Submission

const AddTodo = () => {
    // We have to specify what kind of ref object
    // we want to store here.
    // Here the starting value of the useRef is null. This has to be assigned.
    // useRef will accept HTMLInputElement which can be found MDN page.
    const textInputRef = useRef<HTMLInputElement>(null);

    //React-TypeScript-Form-Submission
    // There is also React.MouseEvent
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current?.value;
    };


    return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Item</button>
    </form>
  );
};

export default AddTodo;
