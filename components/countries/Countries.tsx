import { Country } from "../../loaders/Countries.tsx";

export interface Props {
  countries: Country[];
}
function Countries({ countries }: Props) {
  return (
    <div class="flex flex-wrap container gap-4">
      {countries.map((country) => (
        <div class="flex gap-4 justify-center items-center bg-gray-200 p-4 rounded-md">
          <div>
            <img
              class="w-20 h-auto"
              src={country.media.flag}
              alt={country.name}
            />
          </div>
          <div>
            <p class="uppercase text-xs">
              <strong>Country</strong>
            </p>
            <p>{country.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countries;
