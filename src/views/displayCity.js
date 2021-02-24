import React from 'react'
import {fetchCity} from '../apis/api'
const cityList = [ 'None', 'Taipei', 'NewTaipei', 'Taoyuan', 'Taichung', 'Tainan', 'Kaohsiung', 'Keelung', 
                        'Hsinchu', 'HsinchuCounty', 'MiaoliCounty', 'ChanghuaCounty', 'NantouCounty', 'YunlinCounty',
                        'ChiayiCounty', 'Chiayi', 'PingtungCounty', 'YilanCounty', 'HualienCounty', 'TaitungCounty', 
                        'KinmenCounty', 'PenghuCounty', 'LienchiangCounty'
]
class DisplayCity extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			top: 0,
		}
	}
	// componentDidMount() {
	// 	var city = this.props.match.params.city;
	// 	fetchCity(city, { params: {
	// 		$top:30,
	// 		$format: 'JSON',
	// 	}})  .then (res => {
	// 		console.log(res.data)
	// 	})
	// }

	render() {
		console.log(this.props.match)
		console.log(this.props.match.params.city)
		var city = this.props.match.params.city;
		fetchCity(city, { params: {
			$top:30,
			$format: 'JSON',
		}})  .then (res => {
			console.log(res.data)
		})
		return (
			<div className='container'>
				this is {this.props.match.params.city}
			</div>
		);
	}
}

export default DisplayCity