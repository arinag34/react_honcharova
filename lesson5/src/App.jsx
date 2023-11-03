import './App.css';

import PanelContainer from './containers/PanelContainer/PanelContainer';
import TaskContainer from './containers/TaskContainer/TaskContainer';
import TasksProvider from './contexts/tasks';
import { ThemeProvider } from './contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <PanelContainer />
      <TasksProvider>
        <TaskContainer />
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
