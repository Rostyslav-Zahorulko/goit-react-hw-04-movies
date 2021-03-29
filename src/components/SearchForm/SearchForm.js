import React, { Component } from 'react';
import './SearchForm.scss';

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
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <input
          className="SearchForm__input"
          type="text"
          value={query}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
