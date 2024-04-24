export interface Props {
  productId: number;
}

export interface ProductLiked {
  likes: number;
}

export default async function getProductLikes(
  { productId }: Props,
  _req: Request,
  _ctx: unknown,
): Promise<ProductLiked> {
  const response = await fetch(
    `https://camp-api.deco.cx/event/${productId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "teste123",
      },
      credentials: "include",
    },
  );

  if (!response.ok) return { likes: 2 };

  const data = await response.json();
  console.log("get data", data);

  return { likes: data.product };
}
