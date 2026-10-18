export type goal = {
  title: string;
  id: number;
  description: string;
};
interface GoalsProps {
  goals: goal[];
  ondelete: (id: number) => void;
}
export default function GoalsList({ goals, ondelete }: GoalsProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <article>
            <div>
              <h2>{goal.title}</h2>
              <p>{goal.description}</p>
            </div>
            <button
              onClick={() => {
                ondelete(goal.id);
              }}
            >
              Delete
            </button>
          </article>
        </li>
      ))}
    </ul>
  );
}
