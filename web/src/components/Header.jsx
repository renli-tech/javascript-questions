import React, {useState} from 'react';
const HeaderContainer = () => {
    const [pages ] = useState([
        1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ,31 ,32 ,33 ,34 ,35 ,36 ,37 ,38 ,39 ,40 ,41 ,42 ,43 ,44 ,45 ,46 ,47 ,48 ,49 ,50 ,
    ]);

    const [active, setActive] = useState(1);

    const changeQuestion = (e, number) => {
        setActive(number)
    }
    return(
        <div className="row-span-1 h-full bg-githubTheme-blue300 bg-opacity-10 col-span-4  rounded-md px-6 flex items-center justify-center overflow-hidden">
            <div className="flex flex-row justify-start w-full space-x-4 lg:space-x-20">
            <img className="w-14 h-14 lg:w-20 lg:h-20 mr-2 lg:mr-5 " src="https://camo.githubusercontent.com/e1a54ddebc870cb971c713b20765f1c2ed328efff836eebe3c2bafccbc12bb0a/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3334342f6a6176617363726970742e706e67" alt="Javascript" />

            <div className="self-stretch flex flex-row justify-start items-center space-x-2 lg:space-x-4  overflow-y-hidden overflow-x-scroll rounded-fulllg:px-8 w-3/4" id="pageNo">
                {pages.map(page  => (
                <div key={page} onClick={(e) => changeQuestion(e, page)} className="cursor-pointer bg-gray-50 text-githubTheme-blue300 font-bold text-center rounded-full h-10 w-10 flex items-center justify-center px-4 hover:bg-githubTheme-blue200 hover:text-gray-200 transition-all duration-300">{page}</div>
                ))}
            </div>

            <div className="flex flex-row items-center justify-center space-x-2">
                <button className="flex flex-row justify-start items-center lg:bg-githubTheme-blue200 lg:px-4 py-2 rounded-lg lg:hover:bg-githubTheme-blue300 transition-all duration-200">
                    <svg className="w-4 h-4 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    <span className="hidden lg:flex">Prev</span>
                </button>
                <button className="flex flex-row justify-start items-center lg:bg-githubTheme-blue200 lg:px-4 py-2 rounded-lg lg:hover:bg-githubTheme-blue300 transition-all duration-200">
                <span className="hidden lg:flex">Next</span>
                    <svg className="w-4 h-4 lg:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </div>
            </div>
        </div>
    )
}
export default HeaderContainer ;