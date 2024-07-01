import Review from "./Review"
import reviews from "../reviews"
import Discussion from "./Discussion"
import CreateReview from "./CreateReview"
export default function Tabs(){
    return(
        <>
        <div className="flex justify-center">
            <div role="tablist" className="tabs tabs-lg tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" className="tab" defaultChecked aria-label="Reviews" />
                <div role="tabpanel" className="tab-content p-10">
                <div>
                    <button></button>
                    {/* add review */}
                    <CreateReview/>
                </div>
                    <div className="bg-white">
                        <div className="bg-black mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="grid mx-auto mt-10 max-w-2xl  gap-x-8 gap-y-16 border-t border-gray-200 pt-10  ">
                              {reviews.map((review) => (
                                <Review key ={review.id}
                                props={review}
                                />
                                ))}
                            </div>
                        </div>
                    </div>
                    <Review/>
                    </div>

                <input
                    type="radio"
                    name="my_tabs_1"
                    role="tab"
                    className="tab"
                    aria-label="Discussion"
                     />
                <div role="tabpanel" className="tab-content p-10">
                    <Discussion/>
                </div>

            </div>
        </div>
        </>
    )
}