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

export const getSpecializations = async ({
  page = 1,
  limit = 100,
  title,
} = {}) => {
  const response = await api.get('/specializations', {
    params: {
      page,
      limit,
      title,
    }
  })
  return response.data
}

export const getSkills = async ({
    page = 1,
  limit = 100,
  title,
  specializations,
} = {}) => {
  const response = await api.get('/skills', {
        params: {
      page,
      limit,
      title,
      specializations,
    }
  })

  return response.data
}