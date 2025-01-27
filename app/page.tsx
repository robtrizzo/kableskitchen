import Image from "next/image";
import { Edu_VIC_WA_NT_Beginner } from "next/font/google";
import { AutoplayCarousel } from "@/components/ui/autoplay-carousel";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const edu_vic_wa_nt_beginner = Edu_VIC_WA_NT_Beginner({ subsets: ["latin"] });

const images = [
  "/IMG_1581.JPEG",
  "/IMG_1589.JPEG",
  "/IMG_3417.JPEG",
  "/lasagna.jpeg",
  "/IMG_3441.JPEG",
  "/IMG_3442.JPEG",
  "/IMG_3443.JPEG",
  "/IMG_3460.JPEG",
  "/IMG_3494.JPEG",
  "/IMG_3499.JPEG",
  "/IMG_3507.JPEG",
  "/IMG_3514.JPEG",
  "/IMG_3536.JPEG",
];

export default function Home() {
  return (
    <main>
      <div className="p-24 py-16">
        <div className="flex items-center justify-center lg:justify-between flex-wrap">
          <Image
            src="/logo.png"
            alt="kableskitchen logo"
            width={300}
            height={300}
          />
          <div className="flex flex-col items-center lg:items-end justify-center gap-4 mt-6 lg:mt-0">
            <p
              className={`text-3xl ${edu_vic_wa_nt_beginner.className} text-lime-800 mt-2 text-center font-semibold italic`}
            >
              Serving delicious takeout in Staunton, Virginia
            </p>
            <p
              className={`text-xl ${edu_vic_wa_nt_beginner.className} mt-2 text-center font-semibold italic`}
            >
              Entrees: $15, Meat Side Dishes: $8, Cakes: $5
            </p>
            <p
              className={`text-xl text-red-500 mt-2 text-center font-semibold italic`}
            >
              To place an order: text, call, or email me at{" "}
            </p>
            <p
              className={`text-xl text-red-500 text-center font-semibold italic`}
            >
              <Link href="tel:5404163450">
                <span className="underline">(540)-416-3450</span>
              </Link>{" "}
              /{" "}
              <Link href="mailto://kablerizzo@hotmail.com">
                <span className="underline">kablerizzo@hotmail.com</span>
              </Link>
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Link href="/menu">
                <Button
                  variant="outline"
                  className="text-red-900 font-bold border-2 border-red-900 px-8"
                >
                  Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="p-24 bg-lime-800 text-white font-bold flex items-center justify-center lg:rounded-tr-[160px]">
          <AutoplayCarousel images={images} />
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 pt-12 bg-white lg:rounded-bl-[160px]">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Welcome to Kable’s Kitchen!
            </h2>
            <p className="mt-4">
              Kable&#39;s Kitchen started as a hobby. Always cooking and cooking
              for others. I love to re-create flavors from meals I’ve eaten from
              military travels, from international friends&#39; kitchens, and
              from family recipes handed down.
            </p>
            <p className="mt-4">
              Italy was a favorite location to live and eat every single day!
              And Bob Rizzo&#39;s Italian grandmother taught me some of her
              culinary tricks over the years. Asia was another place where I
              spent some time in the army, and I discovered umami- yum! We lived
              in Europe a few times, so a Mediterranean fusion-style of cooking
              (throw in a little USA southern) is part of the style I enjoy
              sharing with others through food.
            </p>
            <p className="mt-4">
              I plan on keeping this small, so it is{" "}
              <span className="font-bold underline">quality</span>. Not
              quantity. Everything I cook is what we put on our table with fresh
              ingredients and always locally sourced meats. There are non-meat
              entrees, meat meals, and plant-based dishes. Cooking is my art
              form and one of life’s greatest pleasures (aside from eating of
              course).
            </p>
            <p className="mt-4">
              I look forward to sharing my passion for food/cooking from scratch
              with you! If there&#39;s a shortcut, I don&#39;t take it! Cooking
              the old-fashioned way is my method.
            </p>
            <p className="mt-4">
              The recipes are crafted by Signora Rizzo (that’s me). Signora
              Rizzo was also Grandma Helen Rizzo who shared her Italian family’s
              secret recipes with me!
            </p>
            <p className="mt-4">
              My goal is to provide affordable meals from scratch to busy people
              who might not otherwise have the time. Grab and go a nutritious,
              delicious entrée for your family!
            </p>
            <p
              className={`mt-4 text-lg text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Kable Rizzo (Signora Rizzo)
            </p>
            <p className="mt-4 flex items-end gap-1">
              You can text me at{" "}
              <Link href="tel:5404163450">
                <p className="font-semibold text-lg">(540)-416-3450</p>
              </Link>
            </p>
            <p className="flex items-end gap-1">
              Or email me at{" "}
              <div className="underline text-blue-600 active:text-purple-600">
                <Link href="mailto:kablerizzo@hotmail.com">
                  kablerizzo@hotmail.com
                </Link>
              </div>
            </p>
            <p className="mt-4">
              <span className="text-2xl text-red-900">*</span>Come pick up your
              meals at 1031 Ridgemont Drive, Staunton, VA 24401 (by
              appointment).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
