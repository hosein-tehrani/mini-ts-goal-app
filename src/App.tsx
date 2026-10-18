import Header from "./components/Header"
import goalsImg from "./assets/goals.png"
import NewGoal from "./components/NewGoal";
import GoalsList, { type goal } from "./components/GoalsList";
import { useState } from "react";

function App() {
  const [goals, setGoals] = useState<goal[]>([
    { id: 1, title: "ts", description: "90min ts training" },
    { id: 2, title: "docker", description: "90min docker training" },
  ]);
  const deletehandler = (id: number) => {
    setGoals(prev=> prev.filter(goal => goal.id != id))
  }
  const addHandler = (goal: goal) => {
    setGoals((prev) => prev.concat(goal));
  };
  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: "goals image" }}>
          <h1>my precius goals</h1>
        </Header>
        <NewGoal addGoal={addHandler}/>
        <br />
        <GoalsList goals={goals} ondelete={deletehandler} />
      </main>
    </>
  );
}

export default App
