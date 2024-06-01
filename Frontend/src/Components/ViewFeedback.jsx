import React from "react";
import useFeedbacks from "../hooks/useFeedbacks";

const ViewFeedback = () => {
  const { feedback, loadingFeedbacks } = useFeedbacks();

  if (loadingFeedbacks) return null;

  return (
    <div className="py-20 md:px-6 px-8 h-screen rounded-lg w-full bg-[#6c4869] overflow-scroll overflow-x-hidden   shadow-2xl shadow-black border border-[#ff9634]">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#f5b041]">
        Feedbacks
      </h2>{" "}
      {feedback.map((student, index) => (
        <div
          key={index}
          className="w-full px-4 py-10 shadow-lg shadow-black rounded-lg mb-4"
        >
          <h1 className="uppercase ">{student.name}</h1>
          <p className="mt-4 text-lg">{student.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewFeedback;
