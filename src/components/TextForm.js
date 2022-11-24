import React, {useState} from 'react'

export default function TextForm(props) {
  
    const handleUpClick = ()=> {
        console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    
    const handleLoClick = ()=> {
        console.log("LowerCase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState("");
    //setText = "New " this is to update text

    return (
    <>
        <div className='container' style={{color: props.mode === 'light' ? '#3b3e41' : 'white'}}>
            <h4 className='my-3'>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange = { (e)=> setText(e.target.value)} id="myBox" style={{color: props.mode === 'light' ? '#296768' : 'white', backgroundColor: props.mode === 'dark' ? 'rgb(22 40 59)' : 'white'}} rows="6"></textarea>
            </div>

            <button className='btn btn-primary mr-2' onClick={handleUpClick} >Convert to Uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>

        <div className='container' style={{color: props.mode === 'light' ? '#3b3e41' : 'white'}}  >
            <h4 className='my-3'>Your text summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters & {0.008 * text.split(" ").length} minutes Readtime</p>
            
        </div>
    </>    
  )
}
