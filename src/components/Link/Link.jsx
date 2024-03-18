import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="ml-8 hover:bg-blue-800 px-4">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};


Link.propTypes = {
  route : PropTypes.object
}

export default Link;