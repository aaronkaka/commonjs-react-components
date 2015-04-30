jest.dontMock('../react_components/Avatar.js');

var React = require('react/addons'),
    Avatar = require('../react_components/Avatar.js'),
    TestUtils = React.addons.TestUtils;

describe('Avatar', function() {

  var AvatarElement = TestUtils.renderIntoDocument(
    <Avatar imgSrc={'http://placehold.it/150x150'} />
  );

  var item = TestUtils.findRenderedDOMComponentWithTag(AvatarElement, 'img');

  it('sets the image source', function () {
    expect(item.props.src).toEqual('http://placehold.it/150x150');
  });
});