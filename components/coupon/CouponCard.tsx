import { useState } from "preact/hooks";

interface Coupon {
  key?: number;
  title?: string;
  text?: string;
  code?: string;
}

const copyToClipboard = (code: string) => {
  const el = document.createElement("textarea");
  el.value = code;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

function CouponCard({ key, title, text, code = "" }: Coupon) {
  const [copied, setCopied] = useState(false);

  return (
    <div class="relative max-w-md block overflow-hidden">
      <div class="relative flex flex-col justify-center items-center w-full bg-gradient-to-r from-green-500 from-80% to-green-600 rounded-xl p-10 gap-y-4">
        <span class="absolute top-1/2 -translate-y-1/2 -left-4 my-auto w-8 h-8 bg-white rounded-full">
        </span>
        <span class="absolute top-1/2 -translate-y-1/2 -right-4 my-auto w-8 h-8 bg-white rounded-full">
        </span>
        <div>
          <p class="max-w-fit text-xl font-medium text-green-500 bg-white rounded-md p-2 mb-2">
            <strong class="block text-4xl">{title}</strong>
          </p>
          <p class="text-xl font-medium text-white lg:h-14 overflow-hidden">
            {text}
          </p>
        </div>
        <div class="flex">
          <p class="border border-dashed px-4 py-2 rounded-s-md text-white font-black">
            {code}
          </p>
          <button
            onClick={() => {
              copyToClipboard(code);
              setTimeout(() => {
                setCopied(true);
              }, 1000);
            }}
            class="bg-white text-sm uppercase font-bold text-green-600 hover:bg-green-800 hover:text-white px-4 py-2 rounded-e-md transition"
          >
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CouponCard;
