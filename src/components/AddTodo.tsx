import { useRef } from "react";

//React-TypeScript-Form-Submission

// React-TypeScript-Variable-Declaration-For-Props2
const AddTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
  // We have to specify what kind of ref object
  // we want to store here.
  // Here the starting value of the useRef is null. This has to be assigned.
  // useRef will accept HTMLInputElement which can be found MDN page.
  const textInputRef = useRef<HTMLInputElement>(null);

  //React-TypeScript-Form-Submission
  // There is also React.MouseEvent
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // after current there is question mark
    // this is because ref is not set to a value yet.
    // Instead of question mark, exclamation mark can be use as well
    // only use exclamation mark if you are 100% sure that the ref will have
    // a value.
    // textInputRef.current?.value
    // textInputRef.current!.value
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
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
