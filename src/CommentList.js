import React, {Component} from 'react'
import Comment from './Comment'

/*export default function  CommentList({comments}) {
  console.log(comments)
  const commentsElements = comments.map((comment) =>  <li key={comment.id}><Comment comment={comment} /></li> )

  return (
    <ul>
      {commentsElements}
    </ul>
  )
}*/

class CommentList extends Component {
  state = {
    isOpen: false
  }

  render() {
    const buttonText = this.state.isOpen ? 'HIDE' : 'SHOW';
    return (
      <div>
        <button onClick={this.toogleOpen}>{buttonText}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody(){
    if(!this.state.isOpen) return null;
    const {comments} = this.props;

    if(!comments || !comments.length) return (<p>no comments</p>);

    const commentsElements = comments.map((comment) => {
      return <li key={comment.id}><Comment comment={comment} /></li>
    });

    return (
      <ul>
        {commentsElements}
      </ul>
    )
  }

  toogleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
}

export default CommentList