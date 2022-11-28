import './styles/styles.scss'
import Biseccion from './components/Biseccion'
import { Container, Tab, Tabs } from 'react-bootstrap'
import Newton from './components/Newton';

function App() {
  return (
    <div className="App">
      <h1>Métodos Numéricos</h1>
      <Container>
        <Tabs
          defaultActiveKey=""
          id="uncontrolled-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="biseccion" title="Bisección">
            <Biseccion />
          </Tab>
          <Tab eventKey="newton" title="Newton">
            <Newton />
          </Tab>
        </Tabs>


      </Container>
    </div>
  )
}

export default App;
