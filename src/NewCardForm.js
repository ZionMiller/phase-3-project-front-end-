import { useState } from "rect";

const NewCardForm = () => {
    const [form, setForm] = useState({

    })

    const handleChange = (e) => {
        console.log(e.target.value)
        setForm({...form, [e.target]: e.target.value})
    }

    return (
        <div>
            <form>
                <label>placeholder</label>
                <input
                    type="text"
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default NewCardForm