import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import Moment from 'moment';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log(JSON.stringify(this.props.posts, null, 2));
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={'posts/' + post.id}>
            <span className="pull-xs-right">
              {Moment(post.timestamp).format('LL')}
            </span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>SalesForce blog posts</h1>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
