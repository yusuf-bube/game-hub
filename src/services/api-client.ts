import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '676e3f0aa8ad41c8a1f8a900ce001200'
    }
})