import { AppContext } from "deco-sites/rafaelbspcamp/apps/site.ts";

export interface Country {
  name: string;
  media: {
    flag: string;
  };
  id: number;
}

export interface Props {
  limit?: number;
}

const loader = async (
  props: Props,
  _req: Request,
  _ctx: AppContext,
): Promise<Country[]> => {
  const limit = props.limit ?? 10;

  const countriesResponse = await fetch(
    "https://api.sampleapis.com/countries/countries",
  );

  if (!countriesResponse.ok) {
    _ctx.response.status = 404;
    return [];
  }

  const allCountries = await countriesResponse.json() as Country[];

  const countries = allCountries.slice(0, limit);

  return countries;
};

export default loader;
