import { HTMLWidget as HTML } from "apps/admin/widgets.ts";
import CouponCard from "deco-sites/rafaelbspcamp/islands/Coupon/CouponCard.tsx";
const DEFAULT_PROPS = {
  title: "CUPOM",
  text:
    "Mussum Ipsum, cacilds vidis litro abertis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Viva Forevis aptent taciti sociosqu ad litora torquent. Detraxit consequat et quo num tendi nada. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. ",
  coupon: [
    {
      title: "50FF%",
      text: "flat off on all rides within the city using HDFC Credit Card",
      code: "MEGA50OFF",
    },
  ],
};
export interface Props {
  title?: string;
  text?: HTML;
  coupon?: Coupon[];
}
interface Coupon {
  title?: string;
  text?: string;
  code?: string;
}

function Coupon({ title, text, coupon }: Props) {
  const listCoupons = coupon?.length ? coupon : DEFAULT_PROPS.coupon;
  console.log(listCoupons);
  return (
    <div class="flex flex-col w-full xl:container px-4 lg:px-0 py-20 z-10 gap-4 lg:gap-8">
      <h3 class="text-4xl lg:text-7xl font-medium">
        <strong>{title || DEFAULT_PROPS.title}</strong>
      </h3>

      <div
        class="text-base lg:text-xl"
        dangerouslySetInnerHTML={{ __html: text || DEFAULT_PROPS.text }}
      />

      <div class="flex justify-center items-center flex-col lg:flex-row flex-wrap gap-4">
        {listCoupons?.map((item, index) => (
          <CouponCard
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Coupon;
