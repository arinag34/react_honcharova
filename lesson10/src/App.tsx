import './App.css';

import PanelContainer from './containers/PanelContainer/PanelContainer';
import TaskContainer from './containers/TaskContainer/TaskContainer';
// import { useGetPostsQuery } from './store/jsonPlaceholder';

function App() {
  // const {data, isLoading, isError, error, refetch} = useGetPostsQuery();

  return (
    <>
      {/*<button onClick={refetch}>Re-fetch</button>*/}
      {/*{isLoading && <p>Loading</p>}*/}
      {/*{isError && <p>{error.toString()}</p>}*/}
      {/*{data?.map((post) => <p key={post.id}>{post.title}</p>)}*/}
      <PanelContainer />
      <TaskContainer />
    </>
  );
}

export default App;
