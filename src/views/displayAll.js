import React from 'react'
import {fetchAll} from '../apis/api'
class DisplayAll extends React.Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		fetchAll( { params: {
			$top:30,
			$format:'JSON'
		}}) .then( res => {
			console.log(res.data)
		})
		return (
			<div className='container'>
				this is displayAll
			</div>
		);
	}

}
export default DisplayAll