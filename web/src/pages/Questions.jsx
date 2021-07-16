import  SyntaxHighlighter  from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Disclosure } from '@headlessui/react'
import React , {useState} from 'react';
const Questions = () => {
    return (
        <div className="h-screen p-2">
            <div className="grid grid-rows-6 grid-cols-4 gap-3 h-full w-full bg-opacity-5 rounded-md p-2">
                <HeaderContainer /> 
                <QuestionContainer/>
                <OptionsContainer/>
                <AnswerContainer/>
            </div>
        </div> 
     );
};

const HeaderContainer = () => {
    const [pages ] = useState([
        1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,32 ,33 ,34 ,35 ,36 ,37 ,38 ,39 ,40 ,41 ,42 ,43 ,44 ,45 ,46 ,47 ,48 ,49 ,50 ,
    ])
    return(
        <div className="row-span-1 h-full bg-githubTheme-blue300 bg-opacity-10 col-span-4  rounded-md p-2">
            <div className="flex flex-row justify-start">
            <img className="w-20 h-20 mr-5 " src="https://camo.githubusercontent.com/e1a54ddebc870cb971c713b20765f1c2ed328efff836eebe3c2bafccbc12bb0a/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3334342f6a6176617363726970742e706e67" alt="Javascript" />

            <div className=" w-10/12 flex flex-row justify-start items-center space-x-6  overflow-y-hidden overflow-x-scroll " id="code">
                {pages.map(page  => (
                <div key={page} className="bg-gray-50 text-githubTheme-blue300 font-bold text-center rounded-full h-16 w-16 flex items-center justify-center px-8">{page}</div>
                ))}
            </div>
            
            </div>
        </div>
    )
}
const QuestionContainer = ({ question }) => {
    return (
        <div className="row-span-5 h-full bg-githubTheme-blue300 bg-opacity-5 col-span-2  rounded-md p-4">
            <h4 className="font-bold text-2xl text-gray-300 m-4">3. What's the Output</h4>
            <Code>
                {`
  String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
  };
  
  const name = 'Lydia';
  
  name.giveLydiaPizza();

  Repeating 😁

  String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
  };
  
  const name = 'Lydia';
  
  name.giveLydiaPizza();

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

const OptionsContainer = ({ options }) => {
    return (
        <div className="md:row-span-3 col-span-2 h-full bg-githubTheme-blue300 bg-opacity-5  rounded-md px-5 text-gray-300">
            <div className="flex flex-col">
            <div className="my-4 flex flex-row px-2 bg-githubTheme-blue300 bg-opacity-5 w-full">
                    <div className="border-r-4 flex justify-center border-solid border-githubTheme-blue200 w-1/10">
                        {/* <input type="radio" name="" id="" className="mx-3 my-5"/> */}
                        <span className="mx-3 my-4 font-bold text-xl text-uppercase ">A :</span>
                    </div>
                    <span className="py-4 px-4 text-lg">"Just give Lydia pizza already!"</span>
                </div>
                <div className="my-4 flex flex-row px-2 bg-githubTheme-blue300 bg-opacity-5 w-full">
                    <div className="border-r-4 flex justify-center border-solid border-githubTheme-blue200 w-1/10">
                        {/* <input type="radio" name="" id="" className="mx-3 my-5"/> */}
                        <span className="mx-3 my-4 font-bold text-xl text-uppercase ">B :</span>
                    </div>
                    <span className="py-4 px-4 text-lg">TypeError: not a function</span>
                </div>
                <div className="my-4 flex flex-row px-2 bg-githubTheme-blue300 bg-opacity-5 w-full">
                    <div className="border-r-4 flex justify-center border-solid border-githubTheme-blue200 w-1/10">
                        {/* <input type="radio" name="" id="" className="mx-3 my-5"/> */}
                        <span className="mx-3 my-4 font-bold text-xl text-uppercase ">C :</span>
                    </div>
                    <span className="py-4 px-4 text-lg">SyntaxError</span>
                </div>
                <div className="my-4 flex flex-row px-2 bg-githubTheme-blue300 bg-opacity-5 w-full">
                    <div className="border-r-4 flex justify-center border-solid border-githubTheme-blue200 w-1/10">
                        {/* <input type="radio" name="" id="" className="mx-3 my-5"/> */}
                        <span className="mx-3 my-4 font-bold text-xl text-uppercase ">D :</span>
                    </div>
                    <span className="py-4 px-4 text-lg">undefined</span>
                </div>
                {/* <p className="m-3 flex flex-row-reverse text-sm"><span className="rounded-md cursor-pointer bg-githubTheme-blue200 px-3 py-1 uppercase font-semibold italic text-xl text-gray-300">Submit</span></p> */}
            </div>
        </div>
    )
}

const AnswerContainer = ({ answer }) => {
    return (
        <div className="md:row-span-2 col-span-2 h-full bg-githubTheme-blue300 bg-opacity-5  rounded-md p-2">
            <div className="w-full px-4 pt-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-start items-center w-full text-sm font-medium text-left ">
                {/* <svg className={`${
                    open ? 'transform rotate-90' : ''
                } w-5 h-5 text-githubTheme-blue200`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> */}
                <svg className={`${
                    open ? 'transform rotate-90' : ''
                } w-5 h-5 mr-2 text-githubTheme-blue200`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`${open ? 'M9 5l7 7-7 7' : 'M13 5l7 7-7 7M5 5l7 7-7 7' }`}></path></svg>
                <span className="text-lg">Answer</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300">
              <span className="text-xl block my-2">Answer: <span className="font-bold text-xl text-githubTheme-blue300">A</span></span>
                <span className="text-base">
                    String is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!
                </span>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    </div>
        </div>
    )
}


const Code = ({ children, lang }) => {
    return (
        <div className="rounded-md shadow-md bg-githubTheme-black bg-opacity-75 p-4 my-6 h-5/6">
            <p className="m-3 flex flex-row-reverse text-sm">
                <span className="rounded-full cursor-pointer bg-githubTheme-blue200 px-2 py-1">{lang || "Javascript"}</span>
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
 
export default Questions;