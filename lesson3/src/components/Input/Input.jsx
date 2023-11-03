import { Component } from 'react';

class Input extends Component {
  state = {
    value: '',
  }

  constructor(props) {
    super(props);
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    console.log('render', this.props)
    return (
      <div>
        <label htmlFor={this.props.name}>Input</label>
        <input value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.value}</p>
      </div>
    )
  }
}

export { Input }
