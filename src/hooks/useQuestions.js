import { useEffect, useState } from "react";
import { getQuestions } from "../api/questionService";

export function useQuestions(filters, page) {
  const [questions, setQuestions] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getQuestions({
          ...filters,
          page,
          limit: 10,
          signal: controller.signal,
        });

        if (!controller.signal.aborted) {
          setQuestions(data.data);
          setTotal(data.total);
          setLimit(data.limit);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchQuestions();

    return () => controller.abort();
  }, [filters, page]);

  return {
    questions,
    total,
    limit,
    loading,
    error,
  };
}
