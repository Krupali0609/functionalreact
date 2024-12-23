//import ParentComp from "./components/Parentchild/ParentComp";
import Message from "./components/Props/Message";
const App=()=>{
    return (
    <div><h1> Welcome to functional react </h1>
    //<ParentComp/>
    <Message username="Meet" age={30} ismarried={true} />
    </div>)
};

export default App;
