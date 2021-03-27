import React, { Component } from 'react';

class SearchForm extends Component {
  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    const { query } = this.state;
    const { onSubmit } = this.props;

    event.preventDefault();

    if (query !== '') {
      onSubmit(query);
    }

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={query} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
