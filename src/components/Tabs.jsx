import Review from "./Review"
import Discussion from "./Discussion"
import CreateReview from "./CreateReview"
import { useEffect, useState } from "react"
import { getReviews, createReview, deleteReview } from "../services/api"

export default function Tabs() {
    const [reviews, setReviews] = useState([])
    const [newReview, setNewReview] = useState({
        userID: "66b175a3628fc91408892e6a", //firefly42
        score: 3.5,
        content: "funniest game ever",
        title: "I love HellDivers 2",
        gameID: "Helldivers 2",
    })
    //get reviews
    const fetchReviews = async () => {
        const response = await getReviews()
        setReviews(response.data)
        console.log(response.data[0])
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleCreateReview = async () => {
        await createReview(newReview);
        console.log(newReview)
        fetchReviews();
        setNewReview({
            userID: "66b175a3628fc91408892e6a", //firefly42
            score: 3.5,
            content: "funniest game ever",
            title: "I love HellDivers 2",
            gameID: "Helldivers 2",
        });
    };
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
                            <CreateReview
                                fetchReviews={fetchReviews}
                                handleCreateReview={handleCreateReview}
                            />
                        </div>
                        <ul>
                            {
                                reviews.map((review, index) => (
                                    <Review
                                        key={index}
                                        content={review.content}
                                        username={review.userID.username}
                                        title={review.title}
                                    />
                                ))
                            }
                        </ul>

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