export default function SectionHeader(props){
    return(
        <>
            
            <div className="flex divider-start divider divider-accent">
                <div className="text-2xl" >
                    {props.name}
                </div>
            </div>
        </>
    )
}