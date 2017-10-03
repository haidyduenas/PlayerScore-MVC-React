   

const porcentaje = 20;

class Model {
      constructor() {
         this.players = [{name: "Jim Hoskins",score: 31,id: 1,},{name: "Andree Hoskins",score: 35,id: 2,},{name: "Alena Hoskins",score: 42,id: 3,}];
         this.inputValue = null;
         this.render = undefined;
         this.addPoints = 0;
         this.removePoints = 0;
      }
   
      subscribe(render) {
         this.render = render;
      }
      inform() {
         console.log(this.todos.map(e => e.text));
         this.render();
      }
      addTodo(name) {
         this.players.push({
            id: Utils.uuid(),
            name: name,
            score: 0,
         });
         this.inform();
      }
      updateTodo(index, todo) {
         this.todos[index] = todo;
         this.inform();
      }
      removeTodo(todo) {
         this.todos = this.todos.filter(item => item !== todo);
         this.inform();
      }
   

   pointsSet(players){
      return players.map(player => player.score).reduce((playerA, playerB) => playerA + playerB);
    }
}

    const Header = ({players}) => {
      return (
        <div>
          <header className='header'>
            <table className='stats'>
            <tbody>
              <tr>
                <td>PLAYERS:</td>
                <td>{model.players.length}</td>
              </tr>
              <tr>
                <td>TOTAL POINTS:</td>
                <td></td>
              </tr>
              </tbody>
            </table>
            <div className='stopwatch'>
              <h2>STOPWATCH</h2>
              <h1 className='stopwatch-time'>0</h1>
              <button>Start</button>
              <button>Reset</button>
            </div>
          </header>
        </div>
      );
    }
    const PlayerList = ({players}) => {
      return (
        <div>
          {
            model.players.map((item) => {
              return <div className='player' key={item.name}>
                <div className='player-name'>{item.name}</div>
                <div className='player-score counter'>
                  <button className='counter-action decrement'>-</button>
                  <span className='counter-score'>{item.score}</span>
                  <button className='counter-action increment'>+</button>
                </div>
              </div>
            })
          }
        </div>
      );
    }
    const PlayerForm = () => {
      return (
        <div className='add-player-form'>
          <form>
            <input type="text" placeholder='ENTER A NAME' />
            <input type="submit" value='add player' />
          </form>
        </div>
      );
    }
    const Application = ({ title, players }) => {
      return (
        <div className='scoreboard'>
          <Header players={players} />
          <PlayerList players={players}/>
          <PlayerForm />    
        </div>
      );
    }
let model = new Model();
let counter = 1;

let render = () => {
   console.log('render times: ', counter++);
   ReactDOM.render(
      <Application title="TodoApp" model={model} />,
      document.getElementById('container')
   );
};

model.subscribe(render); 

render(); 