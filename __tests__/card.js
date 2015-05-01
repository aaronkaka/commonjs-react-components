jest.dontMock('../react_components/Card.js');

var React = require('react/addons'),
    Card = require('../react_components/Card.js'),
    TestUtils = React.addons.TestUtils;

describe('Card', function() {

  var targetData = {};

  var CardElement = TestUtils.renderIntoDocument(
    <Card data={targetData} />
  );

  var item = TestUtils.findRenderedDOMComponentWithClass(CardElement, 'panel');

  it('creates the card component', function () {
    expect(item).toBeDefined();
  });
});