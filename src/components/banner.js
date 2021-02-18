import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {Navbar, Dropdown, DropdownButton} from 'react-bootstrap';
import '../css/banner.css'

const cityList = [ "Taipei", "NewTaipei", "Taoyuan", "Taichung", "Tainan", "Kaohsiung", "Keelung", 
                        "Hsinchu", "HsinchuCounty", "MiaoliCounty", "ChanghuaCounty", "NantouCounty", "YunlinCounty",
                        "ChiayiCounty", "Chiayi", "PingtungCounty", "YilanCounty", "HualienCounty", "TaitungCounty", 
                        "KinmenCounty", "PenghuCounty", "LienchiangCounty"
]

class banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }
    handleChange = (e) => {
        this.setState({ search: e.target.value})
    }
    clearText = () => {
        this.setState({search: ''})
    }
    filterlist() {
        var self = this
        var updateList = cityList.filter(  function (name) {
                return name.toLowerCase().startsWith(self.state.search.toLowerCase()) == true
            })
        var data = updateList.map(list => (
            <Dropdown.Item> <Link to={`/scenicSpot/${list}`} onClick={this.clearText}> {list}</Link></Dropdown.Item>
            ))
        return data
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand  className='col-2 link'> Transport </Navbar.Brand>
                <Link to="/" params='' className='col-3 link'> Main </Link>
                <Link to='/scenicSpot' className='col-3 link'> scenicSpot </Link>
                {/* <DropdownButton title="choose city" className='drop' >
                    <input value={this.state.search} onChange={this.handleChange}/>
                    {this.filterlist()}
                </DropdownButton> */}
                <a className='dropdown col-3 link'>
                    <a className='dropbtn'>Choose City</a>
                    <div className='dropcontent'>
                        <input value={this.state.search} onChange={this.handleChange}/>
                        {this.filterlist()}
                    </div>
                </a>
            </Navbar>
        );
    }
}

export default banner;
