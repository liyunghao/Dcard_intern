import React from 'react'

const cityList = [ 'None', 'Taipei', 'NewTaipei', 'Taoyuan', 'Taichung', 'Tainan', 'Kaohsiung', 'Keelung', 
                        'Hsinchu', 'HsinchuCounty', 'MiaoliCounty', 'ChanghuaCounty', 'NantouCounty', 'YunlinCounty',
                        'ChiayiCounty', 'Chiayi', 'PingtungCounty', 'YilanCounty', 'HualienCounty', 'TaitungCounty', 
                        'KinmenCounty', 'PenghuCounty', 'LienchiangCounty'
]
class displayCity extends React.Component {
	render() {
		return (
			<div className='container'>
				<form>
					<select>
						{ cityList.map((list, index) => (
							<option value={list}> {list} </option>
						))}
					</select>
				</form>
			</div>
		);
	}
}

export default displayCity