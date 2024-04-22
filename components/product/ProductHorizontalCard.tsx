import type { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { relative } from "../../sdk/url.ts";

export interface Props {
  animateImage: boolean
  product: Product[] | null;
}

const WIDTH = 200;
const HEIGHT = 200;

function ProductHorizontalCard({ animateImage, product }: Props) {
  console.log("-Product: ", product);

  return (
    <div class="flex flex-col items-center gap-4">
      {product && product.map((item) => {
        const { url, productID, name, image, offers } = item;
        const [front, back] = image ?? [];
        const { listPrice, price } = useOffer(offers);

        return (
        <>
          <div 
            id={`productHzCard-${productID}`} 
            key={`productHzCard-${productID}`} 
            class="flex flex-col md:flex-row max-w-2xl gap-2 items-stretch justify-center p-4"
          >
            <div class="relative flex justify-center">
              <a class="relative overflow-hidden" href={relative(url)} style={{ width: WIDTH, height: HEIGHT }}>
                <Image
                  src={front?.url!}
                  alt={name}
                  width={WIDTH}
                  height={HEIGHT}
                  sizes="(max-width: 640px) 50vw, 20vw"
                  loading="lazy"
                  class={`max-w-fit ${animateImage? "hover:scale-125" : ""} transition-all duration-1000 ease-in-out`}
                />
              </a>
            </div>
            
            <div class="flex flex-col items-center justify-center flex-grow">
              <p class="text-base md:text-xl mb-2 md:mb-4">{item.name}</p>
              <p class="text-xs md:text-sm mb-2">{item.description}</p>       
            </div>

            <div class="flex flex-col justify-center items-center md:border-l md:border-base-400 md:pl-6 md:ml-6">
              <div class="flex gap-2">
                {price ? <p class="text-xs md:text-base mb-2">{formatPrice(listPrice)}</p> : ""}
                <p class="text-xs  md:text-base font-bold mb-2">{formatPrice(price)}</p>
              </div>
              <a
                href={url && relative(url)}
                aria-label="view product"
                class="btn btn-block mt-2 max-w-60"
              >
                Ver produto
              </a>
            </div>
          </div>
        </>
      )})}
    </div>
  );
}

export default ProductHorizontalCard;