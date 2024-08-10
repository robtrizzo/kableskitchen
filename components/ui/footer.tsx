import { Phone } from 'lucide-react';
import Facebook from '@/components/ui/facebook';
import Link from 'next/link';

export default async function Footer() {
  return (
    <div className="grow w-full bg-red-600 p-24 text-white flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <Phone className="w-8 h-8" />
        <Link href="tel:5404163450">
          <p className="font-semibold text-lg">(540)-416-3450</p>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="w-8 h-8">
          <Facebook />
        </div>
        <Link href="https://www.facebook.com/kable.s.kitchen" target="_blank">
          <p className="font-semibold text-lg">kableskitchen</p>
        </Link>
      </div>
    </div>
  );
}
