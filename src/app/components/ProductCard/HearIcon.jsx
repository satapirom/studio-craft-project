const HeartIcon = ({ isFavorited }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 48 48"
        fill="currentColor"
        className={`transition-all duration-300 ${isFavorited ? 'text-red-500' : 'text-[#B5A89E]'}`}
    >
        <path d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12" />
    </svg>
);

export default HeartIcon;