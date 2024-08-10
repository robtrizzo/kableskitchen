import Image from 'next/image';
import { Edu_VIC_WA_NT_Beginner } from 'next/font/google';
import { AutoplayCarousel } from '@/components/ui/autoplay-carousel';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const edu_vic_wa_nt_beginner = Edu_VIC_WA_NT_Beginner({ subsets: ['latin'] });

const images = [
  '/IMG_1581.JPEG',
  '/IMG_1589.JPEG',
  '/IMG_3417.JPEG',
  '/IMG_3420.JPEG',
  '/IMG_3441.JPEG',
  '/IMG_3442.JPEG',
  '/IMG_3443.JPEG',
  '/IMG_3460.JPEG',
  '/IMG_3494.JPEG',
  '/IMG_3499.JPEG',
  '/IMG_3507.JPEG',
  '/IMG_3514.JPEG',
  '/IMG_3536.JPEG',
];

export default function Home() {
  return (
    <main>
      <div className="p-24 pb-16">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/kk.png"
            alt="kableskitchen logo"
            width={64}
            height={64}
          />
          <h1
            className={`text-5xl ${edu_vic_wa_nt_beginner.className} text-red-900 font-bold`}
          >
            Kable&apos;s Kitchen
          </h1>
        </div>
        <p className="mt-2 text-center font-semibold">
          Serving delicious takeout in Staunton, Virginia
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
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="p-24 bg-lime-800 text-white font-bold flex items-center justify-center lg:rounded-tr-[160px]">
          <AutoplayCarousel images={images} />
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 pt-12 bg-white lg:rounded-bl-[160px]">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              A message from Signora Kable Rizzo
            </h2>
            <p className="mt-4">
              Kable&#39;s Kitchen started as a hobby. Always cooking. Always
              trying recipes from places we&#39;ve been fortunate to live (all
              over the place with military). I loved the international foods /{' '}
              flavors I was able to eat in my foreign friends&#39; homes, so am
              trying to re-create some of that in addition to some family
              favorites. Italy was a favorite location to live and eat every
              day! And Bob Rizzo&#39;s Italian grandmother taught me culinary
              tricks, so Italian cuisine is my go-to.
            </p>
            <p className="mt-4">
              I plan on keeping this small, so it is quality. Not quantity. It
              is what our family puts on the table. There will be meat dishes
              and some vegetarian and vegan ones.
            </p>
            <p className="mt-4">
              I look forward to sharing my passion for food/cooking from scratch
              with you! If there&#39;s a shortcut, I don&#39;t take it! I prefer
              cooking the old-fashioned way and using quality ingredients
              sourced locally. The meat products are from Poly Face Farms.
            </p>
            <p className="mt-4">
              My goal is to provide affordable meals from scratch to busy people
              who might not otherwise have the time. Grab and go a nutritious,
              delicious entrée for your family!
            </p>
            <p
              className={`mt-4 text-lg text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Enjoy and Buon apetito!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
