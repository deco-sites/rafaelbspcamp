export interface Props {
  productId: number;
}

export interface Status {
  status: boolean;
}

export default async function SubmitProductLike(
  { productId }: Props,
  _req: Request,
  _ctx: unknown,
) {
  const response = await fetch(`https://camp-api.deco.cx/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "teste123",
    },
    body: JSON.stringify({
      productId: productId,
    }),
  });

  if (!response.ok) {
    return {
      status: false,
    };
  }

  return {
    status: true,
  };
}
