import "../App.css";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const exercises = [
    { id: 1, title: "TodoApp", path: "/ex1" },
    { id: 2, title: "TodoAppLocalStorage", path: "/ex2" },
    { id: 3, title: "TodoAppContador", path: "/ex3" },
  ];

  return (
    <div className="home-container">
      <h1>Bem-vindo!</h1>
      <p>Escolhe uma das opções.</p>
      
      <div className="button-grid">
        {exercises.map((exercise) => (
          <button 
            key={exercise.id} 
            className="exercise-button" 
            onClick={() => navigate(exercise.path)}
          >
            {exercise.title}
          </button>
        ))}
      </div>
    </div>
  );
}
