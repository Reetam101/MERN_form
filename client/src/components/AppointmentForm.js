import './AppointmentForm.css'
import { useState } from 'react'
import { addAppointment } from '../functions';

const AppointmentForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [date, setDate] = useState('');
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newAppointment = {
            username,
            email,
            phone,
            date
        }

        await addAppointment(newAppointment)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your appointment!</div>
        <div className="input-container ic1">
            <input id="firstname" className="input" type="text" placeholder=" " value={username} onChange={(e) => setUsername(e.target.value)} />
            <div className="cut"></div>
            <label for="username" class="placeholder">Username</label>
        </div>
        <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div class="cut cut-short"></div>
            <label for="email" className="placeholder">Email</label>
        </div>
        <div className="input-container ic2">
            <input id="phone" className="input" type="number" placeholder=" " value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <div class="cut cut-short"></div>
            <label for="phone" className="placeholder">Phone No.</label>
        </div>
        <div className="input-container ic2">
            <input id="date" className="input" type="date" placeholder=" " value={date} onChange={(e) => setDate(e.target.value)}/>
            <div class="cut cut-short"></div>
            <label for="date" className="placeholder">Date</label>
        </div>
        <button type="text" className="submit">submit</button>
        {submitted && (<p className="submit-success">Data submitted</p>)}
        </form>
    );
};

export default AppointmentForm;
