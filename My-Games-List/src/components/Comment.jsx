export default function Comment(props){
    let display = (props.state) ? "block" : "hidden"
    
    return(
        <>
        <div className="w-full ">
            <textarea className=" w-full p-2 rounded" ></textarea>
            <button>reply</button>
        </div>
        </>
    )
}