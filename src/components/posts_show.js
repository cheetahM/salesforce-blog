import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';
import Moment from 'moment';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  onDeleteClick() {
    this.props.deletePost(this.props.params.id).then(() => {
      this.context.router.push('/');
    });
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{post.title}</h3>
        <h6>{Moment(post.timestamp).format('LL')}</h6>
        <p>{post.text}</p>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger pull-xs-right"
        >
          Delete
        </button>
      </div>
    );
  }
}

function mapsStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(mapsStateToProps, { fetchPost, deletePost })(PostsShow);
