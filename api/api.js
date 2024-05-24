import axios from "axios";

export const fetchProduct = async () => {
  const { data } = await axios.get(
    `https://604a71b981154c169bccfb1faf444a91.api.mockbin.io/`
  );

  return data;
};
