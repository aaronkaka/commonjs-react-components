jest.dontMock('../react_components/Bio.js');

var React = require('react/addons'),
    Bio = require('../react_components/Bio.js'),
    TestUtils = React.addons.TestUtils;

describe('Bio', function() {

  var BioElement = TestUtils.renderIntoDocument(
    <Bio text={'This is a bio.'} />
  );

  var item = TestUtils.findRenderedDOMComponentWithTag(BioElement, 'p');

  it('renders the bio paragraph', function () {
    expect(item.getDOMNode().textContent).toEqual('This is a bio.');
  });
});