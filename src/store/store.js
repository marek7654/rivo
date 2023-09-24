import { config } from "./config";

export const loadProducts = async (limit = 3) => {
  const response = await fetch(`${config.productsEndpoint}/?limit=${limit}`);
  if (!response.ok) {
    throw JSON.stringify(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const responseData = await response.json();
    return responseData;
  }
};
