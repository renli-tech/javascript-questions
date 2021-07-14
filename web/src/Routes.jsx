import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Routes = () => {
    return ( 
        <Router>
            <Route exact path="/" component={Welcome}/>
        </Router>
     );
}
 
export default Routes;