import { useEffect, useState } from "react";
import { getSkills, getSpecializations } from "../api/questionService";

export function useFiltersData() {
  const [specializations, setSpecializations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFilters() {
      try {
        setLoading(true);
        setError(null);

        const [specializationsResponse, skillsResponse] = await Promise.all([
          getSpecializations({ page: 1, limit: 100 }),
          getSkills({ page: 1, limit: 100 }),
        ]);

        setSpecializations(specializationsResponse.data);
        setSkills(skillsResponse.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    loadFilters();
  }, []);

  return {
    specializations,
    skills,
    loading,
    error,
    setError,
  };
}
