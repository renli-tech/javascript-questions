const Questions = () => {
    return (
        <div className="h-screen p-2">
            <div class="grid grid-rows-6 grid-flow-col gap-3 h-full w-full bg-opacity-5 rounded-md p-2">
                <div class="row-span-1 h-full bg-indigo-50 col-span-4 bg-opacity-5 rounded-md p-2">1</div>
                <div class="row-span-5 h-full bg-indigo-50 col-span-2 bg-opacity-5 rounded-md p-2">1</div>
                <div class="row-span-3 col-span-2 h-full bg-red-700 bg-opacity-5 rounded-md p-2">2</div>
                <div class="row-span-2 col-span-2 h-full bg-yellow-600 bg-opacity-5 rounded-md p-2">3</div>
            </div>
        </div> 
     );
}
 
export default Questions;