export default function Comment({state}){
    let displayContent = state? "block" : "hidden"
    
    return(
        <>
        <div style={{display:displayContent}} className="w-full ">
            <textarea className=" w-full p-2 rounded" ></textarea>
            <button>reply</button>
        </div>
        </>
    )
}