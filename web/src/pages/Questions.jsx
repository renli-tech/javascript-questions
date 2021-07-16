import Header   from "../components/Header";
import Question from "../components/Question";
import Options  from "../components/Options";
import Answer   from "../components/Answer";
const Questions = () => {
    return (
        <div className="h-screen p-2">
            <div className="grid md:grid-rows-6 grid-cols-4 gap-3 h-full w-full bg-opacity-5 rounded-md p-2">
                <Header/> 
                <Question/>
                <Options/>
                <Answer/>
            </div>
        </div> 
     );
};
export default Questions;