import React from "react";
import globally from "../assets/images/doodles/globally.png";
import bills from "../assets/images/doodles/bills.png";
import save from "../assets/images/doodles/save.png";

export default function InfoCards() {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-4 mb-10">
      {/* card1 */}
      <div className="bg-white rounded-md shadow-md overflow-hidden p-4 max-w-sm items-center justify-center ">
        <img className="w-[200px] " src={globally} alt="Info card image" />
        <div className="px-6 ">
          <h2 className="text-2xl leading-tight text-gray-900 text-center">
            Send & recieve money from anywhere in the world!
          </h2>
          <p className="mt-2 text-gray-600">
            🌍 Whether across town or across continents, your funds reach you
            securely — anytime, anywhere.
          </p>
        </div>
      </div>

      {/* card2 */}
      <div className="bg-white rounded-md shadow-md overflow-hidden p-4 max-w-sm items-center justify-center ">
        <img className="w-[200px] mb-8" src={bills} alt="Info card image " />
        <div className="px-6 ">
          <h2 className="text-2xl leading-tight text-gray-900 text-center">
            Pay Bills Effortlessly
          </h2>
          <p className="mt-2 text-gray-600">
            ⚡ Settle utilities, subscriptions, and everyday expenses in
            seconds. Fast, reliable, and always at your fingertips
          </p>
        </div>
      </div>

      {/* card3 */}
      <div className="bg-white rounded-md shadow-md overflow-hidden p-4 max-w-sm items-center justify-center ">
        <img className="w-[200px] mb-8" src={save} alt="Info card image " />
        <div className="px-6 ">
          <h2 className="text-2xl leading-tight text-gray-900 text-center">
            Save Your Earnings
          </h2>
          <p className="mt-2 text-gray-600">
            💸 Keep more of what you earn with low fiat rates and transparent
            charges. No hidden fees, just smarter savings.
          </p>
        </div>
      </div>
    </div>
  );
}
