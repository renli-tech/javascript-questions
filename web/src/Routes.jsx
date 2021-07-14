import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Questions from "./pages/Questions";

const Routes = () => {
    return ( 
        <Router>
            <Route exact path="/" component={Welcome}/>
            <Route path="/questions" component={Questions}/>
        </Router>
     );
}
 
export default Routes;