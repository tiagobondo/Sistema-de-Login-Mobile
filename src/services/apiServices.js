import { apiManager } from "./api";

export const cadAccount = async (data) => {
  const { username, password, recpassword } = data;

  try {
    const result = await apiManager.post('/create', ({ username, password, recpassword }));
    return result;
  } catch (error) {
    console.log(error);
  }

}

export const loginAccount = async (data) => {
  const { username, password } = data;

  try {
    const result = await apiManager.post('/login', ({ username, password }));
    return result;
  } catch (error) {
    console.log(error);
  }

}