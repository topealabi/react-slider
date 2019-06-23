import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props){
        super(props)

        this.state={
            searchItem: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchItem: event.target.value});
      }
    
    handleSubmit(event) {
        this.props.newImages(this.state.searchItem)
        this.setState({searchItem: ""})
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="keyword" autoComplete="on" value={this.state.searchItem} onChange={this.handleChange}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }

}

