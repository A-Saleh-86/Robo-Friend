import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots'; 
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
	constructor(){
		super()
		this.state ={
			robots:robots,
			searchfield:''
		}
	}
	onSearchChange = (event)=>{
		this.setState({searchfield : event.target.value})
		
		
		
	}
	render (){
		const filterRobots =this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
		<div className = 'tc'>
			<h1>Robo Friend</h1>
			<SearchBox onSearchChange={this.onSearchChange} />
			<Scroll>
				<CardList robots={filterRobots} />
			</Scroll>
		</div>	
	)	
	}
	
}
export default App;