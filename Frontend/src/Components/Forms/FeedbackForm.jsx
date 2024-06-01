import React, { useState } from "react";
import useSubmitFeedback from "../../hooks/useSubmitFeedback";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const { submitFeedback, isSubmitting } = useSubmitFeedback();

  function handleSubmit(e) {
    e.preventDefault();
    submitFeedback({ feedback });
  }
  return (
    <div className=" h-screen p-4 md:px-6 px-8 rounded-lg w-full bg-[#6c4869] shadow-2xl shadow-black border border-[#ff9634]">
      <form
        action=""
        className="shadow-lg shadow-black border border-[#ff9634] px-8 py-10 rounded-lg "
      >
        <h1 className="text-4xl mb-10 font-semibold text-center uppercase">
          Feedback Form
        </h1>
        <div className="flex gap-4 items-center flex-col">
          <label htmlFor="feedback" className=" font-serif font-bold">
            {" "}
            Feedback
          </label>
          <textarea
            type="text"
            className="px-6  h-44 w-2/3 py-4 rounded-lg  placeholder:text-white placeholder:text-center placeholder:text-lg bg-[#ffffff84]"
            placeholder="Give your Feedback here"
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button
            className="px-8 py-2 shadow-lg shadow-black rounded-lg border-[#ff9634] border hover:scale-105 duration-1000"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
