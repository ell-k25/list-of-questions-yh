import api from "./api"

export const getQuestions = async ({
  page = 1,
  limit = 10,
  titleOrDescription,
  skills,
  complexity,
  rate,
  specializationId,
  signal,
} = {}) => {
  const response = await api.get('/questions/public-questions', {
    params: {
      page,
      limit,
      titleOrDescription,
      skills,
      complexity,
      rate,
      specializationId,
    },
    paramsSerializer: {
      indexes: null,
    },
    signal,
  })

  return response.data
}