import React from 'react'

const cityList = [ 'None', 'Taipei', 'NewTaipei', 'Taoyuan', 'Taichung', 'Tainan', 'Kaohsiung', 'Keelung', 
                        'Hsinchu', 'HsinchuCounty', 'MiaoliCounty', 'ChanghuaCounty', 'NantouCounty', 'YunlinCounty',
                        'ChiayiCounty', 'Chiayi', 'PingtungCounty', 'YilanCounty', 'HualienCounty', 'TaitungCounty', 
                        'KinmenCounty', 'PenghuCounty', 'LienchiangCounty'
]
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'taichung',
        }
    }
    render() {
        return (
            <div className='container'>
                Main
                <form>
					<select>
						{ cityList.map( list => (
							<option value={list}> {list} </option>
						))}
					</select>
				</form>
            </div>
        );
    }
}

export default Main