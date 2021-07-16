const { Link } = require("react-router-dom")

const Welcome = () => {
    return ( 
        <div className="w-screen flex flex-col justify-center items-center">

            <div className="flex flex-col justify-center items-center">
                <img className="w-40 h-40" src="https://camo.githubusercontent.com/e1a54ddebc870cb971c713b20765f1c2ed328efff836eebe3c2bafccbc12bb0a/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3334342f6a6176617363726970742e706e67" alt="Javascript" />
                <h1 className="text-2xl font-bold md:text-4xl">JavaScript Questions</h1>
                <p className="my-2 text-gray-500">Available in 18 translations</p>
            </div>

            <div className="flex flex-row items-center justify-center">
                <Link to="/questions" className="mt-5 px-4 py-2 mr-5 hover:scale-105 transform transition-all duration-200 bg-githubTheme-blue200 flex flex-row justify-center items-center rounded-lg">Practice Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
                <a href="https://github.com/lydiahallie/javascript-questions" className="mt-5 px-4 py-2 hover:scale-105 transform transition-all duration-200 bg-githubTheme-green flex flex-row justify-center items-center rounded-lg">
                    <svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2"><path d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z"></path></svg>
                    View on Github
                </a>
            </div>

            <div className="flex justify-center items-center my-10">
                <Card>
                    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 text-githubTheme-black">
                        <img className="w-32 h-32 rounded-full mx-auto object-cover mt-6 ring-4 ring-gray-500 ring-opacity-20" src="https://avatars.githubusercontent.com/u/29451794?v=4" alt="" width="384" height="512"/>
                        <div className="pt-6 lg:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                            <p className="md:text-lg text-md font-semibold">
                                <span className="font-extrabold text-githubTheme-black text-2xl">“ </span>
                                I post multiple choice JavaScript questions on my Instagram stories, which I'll also post here! Last updated: June 12th From basic to advanced: test how well you know JavaScript, refresh your knowledge a bit, or prepare for your coding interview! 💪 🚀 I update this repo regularly with new questions. I added the answers in the collapsed sections below the questions, simply click on them to expand it. It's just for fun, good luck! ❤️ Feel free to reach out to me! 😊Instagram || Twitter || LinkedIn || Blog
                                <span className="font-extrabold text-githubTheme-black text-2xl"> ”</span>
                            </p>
                            </blockquote>
                            <figcaption className="font-medium">
                            <div className="text-cyan-600 font-extrabold">
                                Lydia Hallie
                            </div>
                            <div className="text-gray-500">
                                Software Engineer
                            </div>
                            </figcaption>
                        </div>
                    </figure>
                </Card>
            </div>
        </div>
     );
}


const Card = ({ children }) => {
    return ( 
        <div className="bg-gray-100 shadow-lg py-2 px-6 rounded-lg w-4/6 ">
            {children}
        </div>
     );
}
 
export default Welcome;