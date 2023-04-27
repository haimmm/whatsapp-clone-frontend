import axios, { AxiosError } from "axios";

export enum httpTypes {
  GET,
  POST,
  DELETE,
  PUT,
  PATCH,
}

export async function fetchWrapper(
  type: httpTypes,
  address: string,
  payload: object
): Promise<unknown> {
  try {
    switch (type) {
      case httpTypes.GET:
        return await axios.get(address, payload);
      case httpTypes.POST:
        return await axios.post(address, payload);
      case httpTypes.DELETE:
        return await axios.delete(address, payload);
      case httpTypes.PUT:
        return await axios.put(address, payload);
      case httpTypes.PATCH:
        return await axios.patch(address, payload);
      default:
        throw new Error("unsupported http type");
    }
  } catch (e: unknown) {
    if (e instanceof AxiosError)
      throw new Error(e.response?.data?.error || e.message);
    else throw new Error("unexpected error");
  }
}

//Promise<AxiosResponse | void>
