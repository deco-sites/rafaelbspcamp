import { signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { invoke } from "deco-sites/rafaelbspcamp/runtime.ts";

export const totalLiked = signal(0);
interface Props {
  pid: number;
}
function SocialLike({ pid }: Props) {
  const [hasLiked, setHasLiked] = useState(false);
  const [qtyLiked, setQtyLiked] = useState(0);

  useEffect(() => {
    const getLike = async () => {
      const total = await invoke["deco-sites/rafaelbspcamp"].loaders
        .ProductLiked({
          productId: pid,
        });
      console.log("teste 2", pid, total);
      setQtyLiked(total.likes);
    };

    getLike();
  }, []);

  const handleClick = async () => {
    if (!hasLiked) {
      totalLiked.value++;
      const sendLike = await invoke["deco-sites/rafaelbspcamp"].actions
        .SubmitProductLike({ productId: pid });

      console.log("sendLike", sendLike);
    } else {
      totalLiked.value--;
    }

    setHasLiked((prev) => !prev);
  };

  return (
    <div>
      <button
        class="flex gap-2 mt-2 min-w-52 max-w-80 btn btn-block"
        onClick={handleClick}
      >
        {!hasLiked
          ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-mood-smile"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M9 10l.01 0" />
              <path d="M15 10l.01 0" />
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
            </svg>
          )
          : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-mood-check"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18" />
              <path d="M9 10h.01" />
              <path d="M15 10h.01" />
              <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
              <path d="M15 19l2 2l4 -4" />
            </svg>
          )}
        <span>Curtir produto!</span>
      </button>
    </div>
  );
}

export default SocialLike;
