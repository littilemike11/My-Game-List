export default function GameInfo(props){
    return(
        <>
        <div className="flex justify-around">
            <div className="" >
                <h1>{props.title}</h1>
                <img src={props.img} alt="" />
                <p>Developer : {props.developer}</p>
                <p>Genres : {props.genre}</p>
                <p>Platforms: {props.platforms}</p>
                <p>Summary: {props.summary}</p>

            </div>
            <div>
                <div className=" stats stats-vertical shadow">
                    <div className="stat">
                        <div className="stat-title">Rating</div>
                        <div className="stat-value">{props.rating}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">{props.downloads}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">ESRB</div>
                        <div className="stat-value">{props.ESRB}</div>
                    </div>
                
                </div>
            </div>
            
        </div>
        </>
    )
}