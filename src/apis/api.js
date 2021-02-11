import axios from 'axios'

const Request = axios.create({
	baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/'
});

export const fetchAll = params => { Request.get('/ScenicSpot', params)}
export const fetchCity = (city, params) => { Request.get(`/ScenicSpot/${city}`, params) }
