import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to UpperCase', 'success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to LowerCase', 'success')
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert('Text Cleared', 'success')
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select('')
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied To Clipboard', 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Extra Spaces Removed', 'success')

    }


    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Type something' value={text} style={{ backgroundColor: props.mode === 'dark' ? '#95b9d1' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-2 " onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2 " onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-2 " onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary m-2 " onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary m-2 " onClick={handleExtraSpaces}>Remove Extra Space</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} Words, {text.length} characters </p>
                <p>{0.008 * text.split(' ').length} minutes read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter in the textbox above to preview it here'}</p>
            </div>
        </>
    )
}
