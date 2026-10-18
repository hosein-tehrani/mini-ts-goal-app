import { useRef, type SubmitEvent } from "react";
import type { goal } from "./GoalsList";
interface newProp {
  addGoal: (goal: goal) => void;
}
export default function NewGoal({ addGoal }: newProp) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const submitHandler = (event: SubmitEvent) => {
    event.preventDefault();
    const enteredTitle = title.current!.value;
    const enteredDescription = description.current!.value;
    addGoal({
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
    });
    title.current!.value = "";
    description.current!.value = "";
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">title</label>
        <input id="title" ref={title} type="text" />
      </p>
      <p>
        <label htmlFor="summary">summary</label>
        <input id="summary" ref={description} type="text" />
      </p>
      <button>add Goal</button>
    </form>
  );
}
