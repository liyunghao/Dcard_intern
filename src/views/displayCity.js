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
	fetchData(city) {
		var self = this
		fetchCity(city, { params: {
			$top:30,
			$format: 'JSON',
		}})  .then (res => {
			self.setState({ data: res.data })
		})
	}
	componentDidMount() {
		this.fetchData(this.props.match.params.city)
	}
	componentWillReceiveProps(nextProps){
		const id = nextProps.match.params.city
		if (id != this.props.match.params.city) {
			this.fetchData(id)
		}
	}
	tableContent(){
		var data = this.state.data.map((item, idx) => (
			<tr key={idx}>
				<td className='name'>{item.Name}</td>
				<td>{item.DescriptionDetail}</td>
			</tr>
		))
		return data
	}
	render() {
		return (
			<div className='container'>
				this is {this.props.match.params.city}
				<table className='table table-striped table-bordered'>
					<thead>
						<tr>
							<th scope='col'>Name</th>
							<th scope='col'>Description</th>
						</tr>
					</thead>
					<tbody>
						{this.tableContent()}
					</tbody>
				</table>
			</div>
		);
	}
}

export default DisplayCity