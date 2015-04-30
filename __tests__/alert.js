jest.dontMock('../react_components/Alert.js');

var React = require('react/addons'),
    Alert = require('../react_components/Alert.js'),
    TestUtils = React.addons.TestUtils;

describe('Alert', function() {

  var AlertElement = TestUtils.renderIntoDocument(
    <Alert text={'Somebody deleted their bio!'} />
  );

  var item = TestUtils.findRenderedDOMComponentWithClass(AlertElement, 'alert-info');

  it('renders the alert', function () {
    expect(item.getDOMNode().textContent).toEqual('×Somebody deleted their bio!');
  });
});