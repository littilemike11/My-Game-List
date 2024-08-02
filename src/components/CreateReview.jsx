export default function CreateReview() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method, can be closed using ID.close() method */}
      <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>+ Create Review</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Review Score</span>
            </div>
            <div className="rating rating-lg rating-half">
              <input type="radio" name="rating-10" className="rating-hidden" />
              <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
              <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
              <input
                type="radio"
                name="rating-10"
                className="mask mask-star-2 mask-half-1 bg-green-500"
                defaultChecked />
              <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
              <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
              <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
              <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
              <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
              <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
              <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
            </div>
            <div className="label">
              <span className="label-text">Title of Review</span>
            </div>

            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <div className="label">
              <span className="label-text">What's on your mind?</span>
            </div>
            <textarea className="input input-bordered w-full max-w-xs" ></textarea>
          </label>
          <div className="flex justify-end">
            <button onClick={() => document.getElementById('my_modal_3').close()}>Create Review</button>
          </div>
        </div>
      </dialog>
    </>
  )
}

