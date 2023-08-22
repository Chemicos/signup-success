import { useState } from "react"
export default function SuccessFb({ onDismissMessage }) {
    const [showSuccess, setShowSuccess] = useState(true)

    const dismissMessage = () => {
        setShowSuccess(false)
        onDismissMessage()
    }

    return (
        <div className={`newsletter-2 newsletter-info-2 ${showSuccess ? '' : 'hide'}`}>
            <img src='' alt="" className="icon-card" />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span>ash@loremcompany.com</span>. 
                Please open it and click the button inside to confirm your subscription.</p>
            <button className="submit-btn-2" onClick={dismissMessage}>Dismiss message</button>
        </div>
    )
}