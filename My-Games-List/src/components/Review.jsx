//get reviews
import { useState } from "react";
import Comment from "./Comment";
import reviews from "../reviews";
import CreateReview from "./CreateReview";
export default function Review(){
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [comment, setComment] = useState(false);
    
    //Questions
    // images not working
    // how to add comment
    // how to create new html pages?
    // add to github/submit
    // like/dislike buttons r connected for multiple reviews

    // add createReview component
    
    //exercise
    /*
    create a toggle function that takes a function and parameter and flips its parameter
    */
    // const [sport, setSport] = useState(false);
    // sport = false
    // console.log(!sport)
    // setSport(!sport)

    const toggle = (toggleFunction, variable) =>{
      toggleFunction(!variable) 
    }

    return(
        <>
        
          {reviews.map((review,index) => (
                  <article key={review.id} className="bg-white p-10 border-gray-200 flex max-w-xl flex-col items-start justify-between">   
                    <div className=" flex items-center gap-x-4 text-xs">
                    {/* profile ui */}
                    <div className=" relative mt-8 flex items-center gap-x-4">
                      <img src={review.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={review.author.href}>
                            <span className="absolute inset-0" />
                            {review.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{review.author.role}</p>
                      </div>
                    </div>
                    {/* end of profile */}
                    <time dateTime={review.datetime} className="text-gray-500">
                        {review.date}
                      </time>
                      <a
                        href={review.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {review.category.title}
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={review.href}>
                          <span className="absolute inset-0" />
                          {review.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{review.description}</p>
                    </div>
                    {/* review stats */}
                    <div className="flex justify-between  w-full" >
                      <div className="flex p-4">
                        <div >
                          {review.likes + liked} <button onClick={()=>{
                              toggle(setLiked,liked)
                              //setLiked(liked=>!liked)//on click toggle is like
                              if(disliked)toggle(setDisliked,disliked)//if was disliked, toggle dislike
                            }
                          }
                          >👍</button>
                        </div>
                        <div>
                          {review.dislikes + disliked} <button onClick={()=>{
                              toggle(setDisliked,disliked)//on click toggle is dislike
                              if (liked) toggle(setLiked,liked)//if was liked, toggle like
                              }
                            }
                          >👎</button>
                        </div>
                        <div  className="indicator text-2xl">
                            <span className="indicator-item indicator-top indicator-right badge badge-primary">
                              {review.comments}
                            </span>
                            <button>💬</button>
                        </div>
                      </div>
                    
                      <div className="flex align-center">
                        <button onClick={()=>{
                            toggle(setComment,comment)
                            if(comment){}
                          }
                        }
                          >Add Comment +</button>
                        </div>
                    </div>
                    {/* add comment section*/ }
                    <Comment state = {comment}/>
                  </article>
                ))}
              
        </>
    )
}