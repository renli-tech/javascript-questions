import  SyntaxHighlighter  from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({ children, lang }) => {
    return (
        <div className="rounded-md shadow-md bg-githubTheme-black bg-opacity-75 p-4 my-6 h-80 md:h-5/6">
            <p className="m-3 flex flex-row-reverse text-sm">
                <span className="rounded-full cursor-pointer bg-githubTheme-yellow bg-opacity-90 text-gray-900 font-semibold px-2 py-1">{lang || "Javascript"}</span>
            </p>
            <div className="overflow-x-hidden overflow-y-scroll h-5/6  bg-opacity-10" id="code">
            <SyntaxHighlighter language="javascript" style={atomOneDarkReasonable} customStyle={{
                backgroundColor : "#1E2227"
            }}>
                {children}
            </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Code ;