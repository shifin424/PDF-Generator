const Button = ({ text, onClick, className }) => {
    return (
        <div>
            <button
            type="submit"
                onClick={onClick}
                className={` text-white px-4 py-1 rounded-lg  transition w-full ${className}`}
            >
                {text}
            </button>
        </div>
    );
};

export default Button