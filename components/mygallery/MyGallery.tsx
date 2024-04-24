import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { HTMLWidget as HTML } from "apps/admin/widgets.ts";

export interface Props {
  title: HTML;
  description: HTML;
  images: ImageList[];
  quantity: number;
}

interface ImageList {
  url: ImageWidget;
  alt: string;
}

function MyGallery({ title, description, images, quantity }: Props) {
  const getImages = images.length ? images?.slice(0, quantity) : [];

  return (
    <div class="w-full container mx-auto flex flex-col">
      {title && (
        <div
          class="text-5xl uppercase pb-8 p-4"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </div>
      )}
      {description && (
        <div
          class="text-base mb-8 p-4"
          dangerouslySetInnerHTML={{ __html: description }}
        >
        </div>
      )}
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-center">
        {getImages.map((image, index) => (
          <li class="relative w-full h-96 overflow-hidden">
            <Image
              key={`image-${index}`}
              src={image?.url}
              alt={image?.alt}
              class="w-full h-96 mb-1 object-cover transition-all hover:scale-125 duration-1000 ease-in-out"
              width={800}
            />
          </li>
        ))}
      </ul>
      {quantity < images.length && (
        <button
          className="btn btn-primary block w-28 mt-8 mx-auto"
          {...usePartialSection({ props: { quantity: quantity + 3 } })}
        >
          Ver mais
        </button>
      )}
    </div>
  );
}

export default MyGallery;
