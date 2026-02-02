import { useEffect } from "react";
import {Link} from "react-router-dom";
import {
  ShieldCheckIcon,
  BanknotesIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

import FloatingMenu from "../../components/FloatingMenu";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    {
      name: "Chinedu A.",
      role: "Small Business Owner",
      text: "ellesPay transformed how I accept payments. Fast, secure, and reliable!",
    },
    {
      name: "Fatima K.",
      role: "Freelancer",
      text: "I love how simple ellesPay makes international transfers. No stress at all.",
    },
  ];

  const team = [
    {
      name: "Daniella E.",
      role: "Founder & CEO",
      img: "https://i.pinimg.com/1200x/43/1b/5b/431b5b7ffdfc5de429f5cee1f50964c5.jpg",
    },
    {
      name: "Michael T.",
      role: "CTO",
      img: "https://i.pinimg.com/736x/1f/bc/d3/1fbcd333d27961caebb2912c31b36799.jpg",
    },
    {
      name: "Sarah L.",
      role: "Head of Operations",
      img: "https://i.pinimg.com/1200x/e2/eb/14/e2eb14e7bf24b154f22ff7eacf9c1558.jpg",
    },
  ];

  return (
    <>
      <div className="bg-white min-h-screen px-6 py-12" data-aos="fade-up">
        {/* Hero / About Section */}
        <section className="w-full lg:h-screen h-full flex items-center justify-center py-20 bg-white">
          <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
            <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center">
              {/* Image Cluster */}
              <div className="relative">
                <img
                  className="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full shadow-lg"
                  src="https://images.unsplash.com/photo-1496483648148-47c686dc86a8?ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Side Image"
                />
                <img
                  className="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full shadow-lg"
                  src="https://images.unsplash.com/photo-1558281033-19cead6981dc?ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Side Image 2"
                />
                <img
                  className="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full shadow-lg"
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Side Image 3"
                />
                <img
                  className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-[var(--color-brown)] shadow-xl"
                  src="https://images.unsplash.com/photo-1507290439931-a861b5a38200?ixlib=rb-4.0.3&q=80&w=1080"
                  alt="About ellesPay"
                />
              </div>

              {/* Text Content */}
              <div className="lg:w-[60%] p-6 w-full h-full shadow-xl shadow-blue-200 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl bg-white">
                <h2 className="text-4xl text-center text-blue-900 font-bold px-4 py-1 md:mt-0 mt-10">
                  About Us
                </h2>
                <p className="md:text-3xl text-2xl text-center text-[var(--color-brown)] font-bold my-5">
                  We are ellesPay
                </p>
                <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 text-gray-700">
                  At ellesPay, our mission is to simplify payments and empower
                  businesses and individuals with secure, instant financial
                  solutions. We believe financial transactions should be fast,
                  transparent, and accessible to everyone. From seamless
                  transfers to merchant solutions, ellesPay is redefining trust
                  in digital payments across Nigeria and beyond.
                </p>
                <button className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-[var(--color-blue-dark)] rounded-md lg:text-xl text-lg text-white font-semibold hover:bg-[var(--color-blue-light)] hover:y-1 transition-transform duration-300 ease-in-out cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <ShieldCheckIcon className="h-10 w-10 text-[var(--color-brown)]" />
            <p className="mt-2 text-gray-800">Secure</p>
          </div>
          <div className="flex flex-col items-center">
            <BanknotesIcon className="h-10 w-10 text-[var(--color-brown)]" />
            <p className="mt-2 text-gray-800">Fast Payments</p>
          </div>
          <div className="flex flex-col items-center">
            <StarIcon className="h-10 w-10 text-[var(--color-brown)]" />
            <p className="mt-2 text-gray-800">Trusted</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto mb-16 mt-16">
          <h3 className="text-3xl font-semibold text-center mb-8 text-blue-900">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <p className="italic text-gray-700">"{t.text}"</p>
                <div className="mt-4">
                  <p className="font-bold text-[var(--color-brown)]">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8 text-blue-900">
            Meet the ellesPay Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 shadow flex flex-col items-center hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-full h-24 w-24 object-cover border-4 border-[var(--color-brown)]"
                />
                <h4 className="mt-4 font-bold text-blue-900">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">
            Join ellesPay Today
          </h3>
          <p className="text-gray-700 mb-6">
            Experience payments made simple, secure, and fast.
          </p>
          <Link
            className="bg-[var(--color-blue-dark)] text-white px-6 py-3 rounded-lg shadow hover:bg-[var(--color-blue-light)] transition cursor-pointer"
            to="/register"
          >
            Get Started
          </Link>
        </section>
      </div>
      <FloatingMenu />
    </>
  );
}
