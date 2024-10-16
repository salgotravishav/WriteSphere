import PropTypes from "prop-types";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function Postcard({ post }) {
    if(!post) return null
  const { $id, title, featuredImage } = post; // Destructure post here
  console.log(appwriteService.getFilePreview(featuredImage));


  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {featuredImage ? (
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 rounded-xl" />
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

Postcard.propTypes = {
  post: PropTypes.shape({
    $id: PropTypes.string.isRequired, // Add $id as required in propTypes
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    featuredImage: PropTypes.string, // This can be optional
  }).isRequired,
};

export default Postcard;
