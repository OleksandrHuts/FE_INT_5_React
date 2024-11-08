import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(formData);
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                first name:
                <input
                    onChange={changeHandler}
                    className="form-control"
                    type="text"
                    name="firstName"
                    placeholder="John" />
            </label>
            <label>
                last name:
                <input
                    onChange={changeHandler}
                    className="form-control"
                    type="text"
                    name="lastName"
                    placeholder="Doe" />
            </label>
            <label>
                Email:
                <input
                    onChange={changeHandler}
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="mail@mail.com" />
            </label>
            <button type="submit" className="btn btn-danger">Submit</button>

            <div>Hello {formData.firstName + ' ' + formData.lastName}</div>
        </form>
    )
}