const Button = ({ text, onClick, className }) => {
    return (
        <div>
            <button
            type="submit"
                onClick={onClick}
                className={`bg-red-400 text-white px-4 py-1 rounded-lg hover:bg-red-400 transition w-full ${className}`}
            >
                {text}
            </button>
        </div>
    );
};

export default Button