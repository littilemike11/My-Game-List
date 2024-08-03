import Review from "./Review"
import Discussion from "./Discussion"
import CreateReview from "./CreateReview"
import { useEffect, useState } from "react"
import { getReviews, createReview, deleteReview } from "../services/api"

export default function Tabs() {
    const [reviews, setReviews] = useState([])
    const [newReview, setNewReview] = useState({})
    //get reviews
    const fetchReviews = async () => {
        const response = await getReviews()
        setReviews(response.data)
        console.log(response.data[0])
    }
    //fetch reviews on awake
    useEffect(() => {
        fetchReviews();
    }, [])
    return (
        <>
            <div className="flex justify-center">
                <div role="tablist" className="tabs tabs-lg tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" defaultChecked aria-label="Reviews" />
                    <div role="tabpanel" className="tab-content p-10">
                        <div>
                            <button></button>
                            {/* add review */}
                            <CreateReview />
                        </div>
                        <ul>
                            {
                                reviews.map((review, index) => (
                                    <Review
                                        key={index}
                                        content={review.content}
                                    />
                                ))
                            }
                        </ul>
                        <Review />
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Discussion"
                    />
                    <div role="tabpanel" className="tab-content p-10">
                        <Discussion />
                    </div>

                </div>
            </div>
        </>
    )
}