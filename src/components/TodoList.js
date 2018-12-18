import React from 'react';

class TodoList extends React.Component {
	constructor(props){
		super(props);
		this.passClickedItem = this.passClickedItem.bind(this);
	}
	
	passClickedItem(clickedItem){
		this.props.onClick(clickedItem);
	}
	
	render() {
		const singleTaskNames = this.props.tasks.map(singleTask => {
			return (
			<li key={singleTask.id} onClick={() => this.passClickedItem(singleTask.id)}>
				{singleTask.text}
			</li>
		)});
		return (
			<div>
				Tasks:
			<ul>
					{singleTaskNames}
				</ul>
			</div>
		)
	}
}
export default TodoList;
