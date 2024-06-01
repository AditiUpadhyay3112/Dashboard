import { useQuery } from "@tanstack/react-query";
import { getFeedbacks } from "../services/feedback";

export default function useFeedbacks() {
  const { data: feedback, isLoading: loadingFeedbacks } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: getFeedbacks,
  });

  return { feedback, loadingFeedbacks };
}
