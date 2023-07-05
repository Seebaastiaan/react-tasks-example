import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  return (
    <main className="bg-neutral-800 h-screen">
      <div className="container  mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
