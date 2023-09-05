import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import SkillsList from "./components/SkillsList/SkillsList";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Form from "./components/Form/Form";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <WorkExperience />
      <SkillsList />
      <ProjectsList />
      <Form />
    </div>
  );
}

export default App;
