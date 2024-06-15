import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PostCard.scss';

const PostCard = ({ post }) => {
  const photoUrl = post?.photo?.url || 'default-image.png';
  const title = post?.title || 'No Title';
  const body = post?.body || 'No Description';

  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`}>
        <div className="image" style={{ backgroundImage: `url(${photoUrl})` }}></div>
        <div className="copy">
          <div className="title">{title}</div>
          <div className="author">{body}</div>
        </div>
      </Link>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    photo: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default PostCard;
