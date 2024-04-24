export interface TotalLiked {
  value: number;
}

const loader = async (_req: Request): Promise<TotalLiked> => {
  const response = await fetch("https://camp-api.deco.cx/events/", {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "teste123",
    },
  });

  if (!response.ok) {
    return { value: 0 };
  }

  const data = await response.json();

  return { value: data.total };
};

export default loader;
