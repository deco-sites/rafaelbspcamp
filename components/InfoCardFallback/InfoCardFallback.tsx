import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  image: ImageWidget;
  alt: string;
  title: string;
  description: HTMLWidget;
  link: string;
}

const width = 800;
const height = 800;

export default function InfoCardFallback({ image, title, description }: Props) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        class="rounded object-cover"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <h2>{title}</h2>
      <div
        class="text-base lg:text-xl"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div>
      <h2>Oops! Algo deu errado.</h2>
      {/* {error && <p>{error.message}</p>} */}
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div
      style={{ height: "400px" }}
      class="w-full flex justify-center items-center"
    >
      <span class="loading loading-spinner" />
    </div>
  );
}