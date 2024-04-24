import { FnContext, SectionProps } from "deco/mod.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  /** @title Temperatura do local */
  temperature: Temperature | null;
}

// interface

function CardWeather({ temperature }: SectionProps<ReturnType<typeof loader>>) {
  console.log("-Weather: ", temperature);

  return (
    <div class="w-full p-4 lg:p-0">
      <div class="flex flex-col w-full xl:container px-8 lg:px-14 py-20 z-10 gap-4 lg:gap-10 bg-gray-100 rounded-lg">
        <div class="flex flex-col md:flex-row w-full justify-between items-center">
          <h2 class="w-full md:w-4/5 text-2xl font-bold">
            Para cada lugar temos um clima diferente. Por temos produtos
            adequados para cada clima.
          </h2>
          {temperature?.celsius && (
            <div class="flex w-full md:w-1/5 justify-end items-center">
              <img src="/image/thermometer.svg" width={28} height={28} />
              <h2 class="text-3xl font-bold">
                {temperature.celsius}°C
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardWeather;

export const loader = (props: Props, _req: Request, ctx: FnContext) => {
  return {
    ...props,
    device: ctx.device || "desktop",
  };
};
