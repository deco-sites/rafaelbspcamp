import { ImageWidget } from "apps/admin/widgets.ts";
import { Section } from "deco/blocks/section.ts";
import Image from "apps/website/components/Image.tsx";

interface ListImage {
  url: ImageWidget;
  alt: string;
}

export interface Props {
  images: ListImage[];
  section: Section;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div>
      <h2>Oops! Algo deu errado.</h2>
      {error && <p>{error.message}</p>}
    </div>
  );
}

function StickyImage({ images, section }: Props) {
  return (
    <div className="w-full container mx-auto flex flex-col lg:flex-row">
      <div className="relative flex justify-stretch items-stretch flex-col lg:w-1/2 gap-1">
        <div className="flex justify-center items-center flex-col gap-2">
          {images.length
            ? images.map((image, index) => (
              image?.url &&
              (
                <Image
                  key={`image-${index}`}
                  src={image?.url}
                  alt={image?.alt}
                  width={800}
                />
              )
            ))
            : ""}
        </div>
      </div>
      <div className="relative lg:w-1/2">
        <h2 className="text-5xl  uppercase max-w-lg p-8">
          Produtos que que mudam o seu dia a dia teste
        </h2>
        <p className="text-base mb-8 px-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet
          blanditiis et consectetur neque delectus vel, eius natus cumque
          inventore suscipit odio nesciunt explicabo dolorem. Magnam asperiores
          aliquid numquam iusto.
        </p>
        <div className="lg:sticky flex flex-col w-full top-0 pt-24 pb-8 bg-white">
          {section && <section.Component {...section.props} />}
        </div>
      </div>
    </div>
  );
}

export default StickyImage;
