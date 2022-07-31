import { Grid } from "./components/Grid"
import { List } from "./components/List"

function App() {
  return(
    <>
      <h1>Sortable js</h1>
      <div className="container">
        <List/>
        <Grid/>
      </div>
    </>
  )
}

export default App
