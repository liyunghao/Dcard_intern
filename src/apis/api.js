import axios from 'axios'
import jsSHA from 'jssha'

const getHeader = () => {
	var id = "0145088950144894aab7504fd10d3974";
	var key = "pPYKP0QpIeYT94S7DNGuxdvX22U";
	var sha = new jsSHA('SHA-1', 'TEXT');
	var time = new Date.toGMTString();
	sha.setHMACKey(key, 'TEXT');
	sha.update('x-date: ' + time);
	var Hmac = sha.getHMAC('B64');
	var auth = 'hmac username=\"' + id + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + Hmac + '\"';
	
	return { 'Authorization': auth, 'X-Date': time };
} 

const Request = axios.create({
	baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/',
	headers : getHeader(),
});

export const fetchAll = params => { Request.get('/ScenicSpot', params)}
export const fetchCity = (city, params) => { Request.get(`/ScenicSpot/${city}`, params) }

//use jssha to create hmac auth333