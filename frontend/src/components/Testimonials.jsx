import { StarIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {
  const testimonials = [
    { 
      name: "Chinedu A.",
      text: "ellesPay transformed how I accept payments.",
      email: "chinedu********@gmail.com",
      rating: 5,
    },
    {
      name: "Fatima K.",
      text: "International transfers are so simple now.",
      email: "fatima********@yahoo.com",
      rating: 4,
    },
    {
      name: "David O.",
      text: "Secure transactions build customer trust.",
      email: "david********@outlook.com",
      rating: 5,
    },
    {
      name: "Ngozi M.",
      text: "Fast payments keep my business running smoothly.",
      email: "ngozi********@gmail.com",
      rating: 4,
    },
    {
      name: "Tunde B.",
      text: "ellesPay is reliable and easy to use.",
      email: "tunde********@gmail.com",
      rating: 5,
    },
  ];

  const renderStars = (count) =>
    [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`h-5 w-5 ${i < count ? "text-[var(--color-brown)]" : "text-gray-400"}`}
      />
    ));

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="w-full flex items-center flex-col gap-1 justify-center mb-16 px-4">
        <p className="text-sm sm:text-lg font-semibold text-rose-600">
          Words That Matter
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
          See Why Clients Keep Coming Back
        </h3>
      </div>

      {/* Top Line - sliding right */}
      <div className="overflow-hidden whitespace-nowrap mb-6 w-full">
        <div className="animate-marquee-right inline-flex">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="mx-4 px-6 py-4 w-full rounded-xl bg-gradient-to-r from-black to-gray-900 text-white shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              <p className="italic">"{t.text}"</p>
              <p className="mt-2 text-[var(--color-brown)] font-semibold">{t.name}</p>
              <p className="text-sm text-gray-300">{t.email}</p>
              <div className="flex mt-2">{renderStars(t.rating)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Line - sliding left */}
      <div className="overflow-hidden whitespace-normal break-words">
        <div className="animate-marquee-left inline-flex">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="mx-4 px-6 py-4 w-72 rounded-xl bg-gradient-to-r from-black to-gray-900 text-white shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              <p className="italic">"{t.text}"</p>
              <p className="mt-2 text-[var(--color-brown)] font-semibold">{t.name}</p>
              <p className="text-sm text-gray-300">{t.email}</p>
              <div className="flex mt-2">{renderStars(t.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
