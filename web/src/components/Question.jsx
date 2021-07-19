import Code from './Code' ;
const Question = ({ question }) => {
    return (
        <div className="row-span-5 h-full bg-githubTheme-blue300 bg-opacity-5 col-span-4 md:col-span-2 rounded-md p-4">
            <h4 className="font-bold text-2xl text-gray-50 m-4">3. What's the Output</h4>
            <Code>
                {`
String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

name.giveLydiaPizza();


                `}
            </Code>
        </div>
    )
};
export default Question


