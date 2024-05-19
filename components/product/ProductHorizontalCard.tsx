import type { Product } from "apps/commerce/types.ts";
import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { formatPrice } from "../../sdk/format.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { relative } from "../../sdk/url.ts";
import SocialLike from "$store/components/social/SocialLike.tsx";

export interface Props {
  maxWidth?:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
  infoCard: InfoCard;
  animateImage: boolean;
  product: Product[] | null;
}
interface InfoCard {
  image: ImageWidget;
  alt: string;
  title: string;
  description: HTMLWidget;
  link: string;
}

const WIDTH = 200;
const HEIGHT = 200;

export default function ProductHorizontalCard({ maxWidth, infoCard, animateImage, product }: Props) {
  return (
    <div class={`flex flex-col w-full ${ maxWidth ? maxWidth : "max-w-2xl"} mx-auto lg:flex-row gap-4 py-6 lg:py-10 px-4 xl:px-0 items-center`}>
      <div class="max-w-[400px]">
        <Image
          src={infoCard?.image}
          alt={infoCard?.title}
          width={400}
          class="rounded-lg mb-5"
          // style={{ width: `${width}px`, height: `${height}px` }}
        />
        <h2 class="line-clamp-2 text-base md:text-xl mb-2 md:mb-4">{infoCard?.title}</h2>
        <div
          class="text-xs md:text-sm mb-2"
          dangerouslySetInnerHTML={{ __html: infoCard?.description }}
        />
        <a href={infoCard?.link} class="flex gap-2 lg:min-w-52 max-w-80 btn btn-block mx-auto mt-5">
          Saber mais
        </a>
      </div>
      <div class="grow">
        {product && product.map((item) => {
          const { url, productID, name, image, offers } = item;
          const [front, back] = image ?? [];
          const { listPrice, price } = useOffer(offers);

          return (
            <>
              <div
                id={`productHzCard-${productID}`}
                key={`productHzCard-${productID}`}
                class="flex w-full gap-2 items-stretch justify-center p-4"
              >
                <div class="relative flex justify-center">
                  <a
                    class="relative overflow-hidden"
                    href={relative(url)}
                  >
                    <Image
                      src={front?.url!}
                      alt={name}
                      width={WIDTH}
                      height={HEIGHT}
                      sizes="(max-width: 640px) 50vw, 20vw"
                      loading="lazy"
                      class={`w-24 sm:w-auto max-w-48 ${
                        animateImage ? "hover:scale-125" : ""
                      } transition-all duration-1000 ease-in-out`}
                    />
                  </a>
                </div>

                <div class="flex flex-col items-center justify-center flex-grow">
                  <p class="line-clamp-2 text-base md:text-xl mb-2 md:mb-4">{item.name}</p>
                  <p class="line-clamp-2 text-xs md:text-sm mb-2">{item.description}</p>
                </div>

                <div class="flex flex-col justify-center items-center md:border-l md:border-base-400 md:pl-6 md:ml-6">
                  <div class="flex gap-2">
                    {price
                      ? (
                        <p class="text-xs md:text-base mb-2">
                          {formatPrice(listPrice)}
                        </p>
                      )
                      : ""}
                    <p class="text-xs  md:text-base font-bold mb-2">
                      {formatPrice(price)}
                    </p>
                  </div>
                  <a
                    href={url && relative(url)}
                    aria-label="view product"
                    class="btn btn-primary mt-2 lg:min-w-52 max-w-80"
                  >
                    COMPRAR
                  </a>
                  <SocialLike pid={Number(productID)} />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div>
      <h2>Oops! Algo deu errado.</h2>
      {error && <p>{error.message}</p>}
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div
      class="flex flex-col w-full max-w-7xl mx-auto lg:flex-row gap-4 py-6 lg:py-10 items-center"
    >
      <div role="status" class="space-y-8 animate-pulse">
        <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
          </svg>
        </div>
        <div class="w-full">
          <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        </div>
      </div>
      <div class="flex justify-center grow">
        <span class="loading loading-spinner" />
      </div>
    </div>
  );
}
