import PropTypes from 'prop-types';
import createMockComponent from './createMockComponent';
import createReactClass from 'create-react-class';

const TabBarIOS = createReactClass({
  propTypes: {
    children: PropTypes.node
  },
  statics: {
    Item: createMockComponent('TabBarIOS.Item')
  },
  render() {
    return null;
  }
});

module.exports = TabBarIOS;
