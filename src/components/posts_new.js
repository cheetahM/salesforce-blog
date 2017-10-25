import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit = props => {
    this.props.createPost(props).then(() => {
      //blog post has been created, navigate the user to the index
      // we navigate by calling this.context.router.push with the
      // new path to navigate to.
      this.context.router.push('/');
    });
  };
  render() {
    const { fields: { title, text }, handleSubmit } = this.props;
    console.log(title);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new Post</h3>
        <div
          className={`form-group ${title.touched && title.invalid
            ? 'has-danger'
            : ''}`}
        >
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className="form-control" {...title} />
          <div className="text-help">{title.touched ? title.error : ''}</div>
        </div>
        <div
          className={`form-group ${text.touched && text.invalid
            ? 'has-danger'
            : ''}`}
        >
          <label htmlFor="text">Text</label>
          <textarea id="text" type="text" className="form-control" {...text} />
          <div className="text-help">{text.touched ? text.error : ''}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.text) {
    errors.content = 'Enter text';
  }
  return errors;
}

export default reduxForm(
  {
    form: 'PostsNewForm',
    fields: ['title', 'text'],
    validate
  },
  null,
  { createPost }
)(PostsNew);
