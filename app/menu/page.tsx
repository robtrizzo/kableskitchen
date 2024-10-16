import type { Metadata } from 'next';
import Image from 'next/image';
import { Edu_VIC_WA_NT_Beginner } from 'next/font/google';
import Link from 'next/link';
import { AutoplayCarousel } from '@/components/ui/autoplay-carousel';

const edu_vic_wa_nt_beginner = Edu_VIC_WA_NT_Beginner({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Menu - Kable's Kitchen",
  description: 'Home-cooked meals made with love and quality ingredients',
};

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Link href="/" className="p-24 pb-16">
        <div className="flex items-center gap-4">
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
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="bg-lime-800 p-24 flex items-center justify-center lg:rounded-tr-[160px]">
          <div className="max-w-[450px]">
            <Image
              src="/IMG_3420.JPEG"
              alt="lasagna"
              width={450}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-bl-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo&apos;s Lasagna
            </h2>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              Authentic Roman Lasagna recipe handed down from Grandma Rizzo and
              shared with you! Serves 1-2 people per individual order!
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Mouthwatering hand-made noodles, homemade bechamel cream sauce,
              mozzarella cheese, and San Marzano tomatoes from Italy.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Add a generous sized side order of homemade meatballs to
              complement!
            </p>
            <p className="mt-4">
              <b>Lasagna Directions:</b> Thaw. Bake uncovered at 375 degrees for
              35 minutes.
            </p>
            <p>
              <b>Meatballs:</b> Thaw. Bake covered for about 25-30 minutes.
            </p>
            <p>Let rest for a few minutes before eating.</p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p className="mt-2">
              <b>Lasagna:</b> 00 flour, extra virgin olive oil, eggs, milk,
              vegetable rennet, citric acid, lemons, onions, garlic, San Marzano
              tomatoes, tomato paste, balsamic vinegar, mozzarella cheese, salt,
              pepper, sugar.
            </p>
            <p>
              <b>Meatballs:</b> Local farm beef and pork, eggs, bread, parmesan
              cheese, salt, pepper, garlic, onion powder, salt, pepper,
              tomatoes, tomato paste, olive oil, sugar.
            </p>
          </div>
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-r-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Meatballs Bathed in Roman Red Sauce
            </h2>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              Authentic Roman Meatball recipe handed down from Grandma Rizzo and
              shared with you!
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Hand-made meatballs packed full of savory flavor and swimming in
              Grandma’s authentic Roman red sauce.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              You will be transported to Italy with every bite!
            </p>
            <p className="mt-4">
              <b>Directions:</b> Thaw. Bake covered at 375 degrees for about
              25-30 minutes. Or put in microwave safe container and heat.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p>
              Local beef and pork, eggs, bread, parmesan cheese, salt, pepper,
              garlic, onion powder, salt, pepper, tomatoes, tomato paste, olive
              oil, sugar.
            </p>
          </div>
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center lg:rounded-r-[160px]">
          <div className="max-w-[450px]">
            <Image
              src="/meatballs.png"
              alt="lasagna"
              width={450}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center">
          <div className="max-w-[450px]">
            <Image
              src="/potpie.png"
              alt="lasagna"
              width={450}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-l-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Chicken Pot Pie
            </h2>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              Flaky homemade pie crust, local chicken, and wholesome vegetables,
              baked in a sherry cream sauce.
            </p>
            <p className="mt-4">
              <b>Directions:</b> Thaw. Bake uncovered at 400 degrees for 25
              minutes. Let sit for a few min. before eating.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p>
              Chicken, onions, celery, carrots, peas, milk, sherry, butter,
              flour, salt, eggs, pepper, thyme, parsley.
            </p>
          </div>
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-r-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Cottage Pie
            </h2>
            <p className="text-lg mt-4 font-bold">
              Comforting, hearty cottage pie.
            </p>
            <p className="mt-4 font-bold">
              A friend from the UK reminded me that what I was naming
              “shepherds’ pie” is actually “cottage pie”. Shepherds’ pie is made
              with lamb, cottage pie with beef.
            </p>
            <p className="text-lg mt-4 font-bold">Two options. Choose one:</p>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              Traditional: Seasoned beef & healthy vegetables topped with cheesy
              whipped potatoes
            </p>
            <p className="text-lg text-lime-800 font-bold">or</p>
            <p className="text-lg text-lime-800 font-bold">
              Vegetable: Seasoned lentils & healthy vegetables topped with
              whipped potatoes
            </p>
            <p className="mt-4">
              <b>Directions:</b>
              Thaw. Bake uncovered at 400 degrees for about 25min. or until
              warm. Let rest for a few min. before eating.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p className="mt-2">
              <b>Traditional version:</b>
              Grass fed organic beef, onions, garlic, carrots, celery, peas,
              garlic, flour, worcestershire sauce, tomato paste, parsley, thyme,
              bay leaf, chicken broth, potatoes, milk, butter, sharp cheese,
              salt, pepper.
            </p>
            <p>
              <b>Vegetable version:</b>
              Lentils, carrots, celery, peas, onions, potatoes, garlic, thyme,
              rosemary, tomato paste, red wine, tahini, soy sauce, paprika,
              olive oil, coconut milk, nutritional yeast, balsamic vinegar,
              Worcestershire sauce, salt, pepper.
            </p>
          </div>
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center lg:rounded-r-[160px]">
          <AutoplayCarousel
            images={['/cottagepie.png', '/veggiecottagepie.png']}
          />
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center">
          <Image
            src="/biscuit.png"
            alt="lasagna"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-l-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Fluffy Homemade Biscuits
            </h2>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              Fluffy, buttery biscuits that melt in your mouth. Hand rolled and
              cut the old fashioned way.
            </p>
            <p className="mt-4">
              <b>Directions:</b>
              Store in freezer. Thaw and eat!
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p className="mt-2">
              Flour, butter, yogurt, salt, eggs, baking powder, baking soda.
            </p>
          </div>
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-r-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Garlic Bratwurst cooked with Caramelized Onions
            </h2>
            <p className="text-lg mt-4 font-bold">
              Flavorful garlic bratwurst from the farm, cooked with golden
              caramelized onions. A perfect meat side dish.
            </p>
            <p className="mt-4">
              <b>Directions:</b>
              Thaw. Bake uncovered at 350 degrees for about 25-30 minutes. Or
              put in microwave safe container and heat.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p className="mt-2">
              <b>Pure and simple:</b>
              Local pork, garlic, salt, spices, extra virgin olive oil, sweet
              onions.
            </p>
          </div>
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center lg:rounded-r-[160px]">
          <Image
            src="/bratwurst.png"
            alt="lasagna"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center">
          <AutoplayCarousel
            images={['/meatloaf.png', '/mash.png', '/greenbeans.png']}
          />
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-l-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Virginia Meatloaf Meal
            </h2>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              *Moist, traditional meatloaf, buttery hand smashed potatoes topped
              with mushroom herbed gravy, accompanied by mom&apos;s southern
              green beans.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Every bite will comfort you just like mom&apos;s cooking did!
            </p>
            <p className="mt-4">
              <b>Directions:</b>
              Thaw. Bake covered at 350 degrees until warm about 25 minutes or
              until warm.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p className="mt-2">
              Local beef, hand smashed wholesome chunky potatoes, rich green
              beans made from fresh produce (not canned), creamy gravy made from
              scratch (no packets or additives). All hand made using the
              &quot;long cuts&quot; not the short cuts.
            </p>
          </div>
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-r-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Spanakopita
            </h2>
            <p className="text-lg mt-4 font-bold">
              Layers of crispy phyllo filled with a creamy, gooey, herby spinach
              and feta center. If you love Greek and Italian food, dive right
              in!
            </p>
            <p className="mt-4">
              <b>Directions:</b>
              Thaw. Bake uncovered at 375 degrees for 45 minutes. Let sit for a
              few min. before eating.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p className="mt-2">
              Phyllo pastry, spinach, onion, feta cheese, extra virgin olive
              oil, cottage cheese, garlic, oregano, all-purpose flour, salt,
              pepper.
            </p>
          </div>
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center lg:rounded-r-[160px]">
          <Image
            src="/spanakopita.png"
            alt="lasagna"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center">
          <AutoplayCarousel
            images={['/kbbq.png', '/cabbage.png', '/rice.png']}
          />
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-l-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Korean BBQ Meal
            </h2>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              I spent time in Korea when I was in the army, then met Asian
              friends when living abroad. I always loved going to their homes
              for dinner, so hoping to re-create some of those flavors for you!
              Umami= yum!
            </p>
            <p className="text-lg mt-4 font-bold">Two options. Choose one:</p>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              Traditional: Savory Asian style pork, sauteed cabbage & steamed
              jasmine rice topped with peanuts & pickled onions.
            </p>
            <p className="text-lg text-lime-800 font-bold">or</p>
            <p className="text-lg text-lime-800 font-bold">
              Plant-Based: Savory Asian style tofu, sauteed cabbage & steamed
              jasmine rice topped with peanuts & pickled onions.
            </p>
            <p className="mt-4">
              <b>Directions:</b>
              Thaw. Bake covered at 350 degrees until warm about 30 minutes. If
              desired, top with some soy sauce or any spicy Asian sauce.
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p className="mt-2">
              <b>Traditional:</b>
              Pork, onions, garlic, ginger root, gochujang paste, soy sauce,
              maple syrup, sesame oil, olive oil, green onions, cabbage, rice,
              chili flakes, sriracha, salt, pepper, coriander, peanuts.
            </p>
            <p>
              <b>Plant-based:</b>
              Pork, onions, garlic, ginger root, gochujang paste, soy sauce,
              maple syrup, sesame oil, olive oil, green onions, cabbage, rice,
              chili flakes, sriracha, salt, pepper, coriander, peanuts.
            </p>
          </div>
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-r-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Devil’s Food Cake
            </h2>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              Moist devil’s food cake topped with a smooth, chocolatey icing!
              Which to complement- milk or ice cream?
            </p>
            <p className="mt-4">
              <b>Directions:</b> Store in freezer. Thaw and eat!
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p>
              Sugar, flour, cocoa, baking powder, baking soda, salt, eggs, milk,
              vegetable oil, vanilla, butter, powdered sugar.
            </p>
          </div>
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center lg:rounded-r-[160px]">
          <div className="max-w-[450px]">
            <Image
              src="/cake.png"
              alt="lasagna"
              width={450}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center">
          <Image
            src="/lemonricotta.png"
            alt="lasagna"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-l-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Traditional Lemon Ricotta Cake
            </h2>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              Light, fluffy lemon ricotta cake is full of flavor. Every bite of
              this old timey, traditional dessert will transport you to the
              &quot;old country&quot; of Italy!
            </p>
            <p className="mt-4">
              <b>Directions:</b>
              Store in freezer. Thaw and eat!
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p className="mt-2">
              Ricotta, lemon, flour, eggs, butter, sugar, natural flavors and
              spices.
            </p>
          </div>
        </div>
        <div className="bg-white lg:bg-lime-800">
          <div className="p-24 bg-white lg:rounded-r-[160px] lg:h-full">
            <h2
              className={`text-3xl text-red-900 font-semibold ${edu_vic_wa_nt_beginner.className}`}
            >
              Signora Rizzo’s Carrot Cake
            </h2>
            <p className="text-lg text-lime-800 mt-4 font-bold">
              Enjoy a family favorite any season of the year. Moist carrot cake
              lovingly baked with just the right amount of cinnamon and spices
              and topped with plenty of homemade cream cheese frosting.
            </p>
            <p className="mt-4">
              <b>Directions:</b> Store in freezer. Thaw and eat!
            </p>
            <p className="text-lg text-red-600 mt-4 font-bold">
              Only quality ingredients!!!!
            </p>
            <p>
              Sugar, flour, carrots, eggs, milk, vegetable oil, vanilla, butter,
              cream cheese, cinnamon, nutmet, salt.
            </p>
          </div>
        </div>
        <div className="bg-lime-800 p-24 flex items-center justify-center">
          <div className="max-w-[450px]">
            <Image
              src="/carrotcake.png"
              alt="lasagna"
              width={450}
              height={450}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
