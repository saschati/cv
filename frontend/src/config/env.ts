export interface Enviroment {
  baseUrl: string
}

const env: Enviroment = {
  baseUrl: process.env.REACT_APP_APP_URL as string,
}

export default env
