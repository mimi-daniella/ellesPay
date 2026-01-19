import {Link} from "react-router-dom";

export default function FloatingHomeButton() {
    return (
      <Link
        to={"/"}
        title="Back to home"
        className="fixed top-4 left-4 z-50 bg-[var(--color-brown)] text-white 
                 px-4 py-2 rounded-full shadow-lg hover:translate-x-1 hover:-translate-y-1
                 transition duration-300 ease-in-out"
      >
        <button>
          <svg
            width="34px"
            height="44px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </button>
      </Link>
    );
}