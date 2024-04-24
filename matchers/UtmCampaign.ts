import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  utmCampaign: string;
}

export default function utmCampaign({ utmCampaign }: Props, ctx: MatchContext) {
  const url = ctx.request.url;
  return url.includes(`utm_campaign=${utmCampaign}`);
}
