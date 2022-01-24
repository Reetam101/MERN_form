import axios from 'axios'

export const addAppointment = async (appointment) => {
    const config = {
        headers: {'Content-Type': 'application/json'}
    }

    try {
        const res = await axios.post('/api/appointment',appointment, config)
        console.log(res)
    } catch(err) {
        console.log(err)
    }
}