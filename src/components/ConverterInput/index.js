import './index.css';

function ConverterInput({ hex, handleInput }) {
    return (
        <div className="before-input">
            <input
                name="hex"
                className="input"
                type="text"
                value={hex}
                onChange={handleInput}
                placeholder="34495e"
            />
        </div>
    );
}

export default ConverterInput;
