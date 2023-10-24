
const InputBox = ({ label, value,type, onChange, className ,placeholder, }) => {
    return (
        <div>
            <div className='input-box'>
                <label>{label}</label>
                <input type={type} placeholder={placeholder} className={className} value={value} onChange={onChange} />
            </div>
        </div>
    )
}

export default InputBox;