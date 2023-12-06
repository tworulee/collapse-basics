import Card from "./components/Card";
import  Collapse  from "./components/Collapse";

function App() {
  return (
    <div className="App">
      <Collapse href="collapseExample1">
        <Card
          cardTitle="Baslik 1"
          cardText="text 1"
          image="https://picsum.photos/id/1/200/300"
        />
      </Collapse>
      <Collapse href="collapseExample2">
        <Card
          cardTitle="Baslik 2"
          cardText="text 2"
          image="https://picsum.photos/id/10/200/300"
        />
      </Collapse>
      <Collapse href="collapseExample3">
        <Card
          cardTitle="Baslik 3"
          cardText="text 3"
          image="https://picsum.photos/id/100/200/300"
        />
      </Collapse>
    </div>
  );
}

export default App;
