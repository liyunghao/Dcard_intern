import React from 'react'
import { fetchAll, fetchCity} from '../apis/api'
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
	componentDidMount

	render() {
		console.log(this.props.match)
		console.log(this.props.match.params.city)
		return (
			<div className='container'>
				this is displaycity
			</div>
		);
	}
}

export default DisplayCity