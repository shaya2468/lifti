var React = require('react');
var {connect} = require('react-redux');
import * as actions from 'actions';
import SearchForm from 'SearchForm';
export class Dummy extends React.Component{

  render() {

    return (
      <div id="dummy">
        <h1 id="dummy_title">dummy page</h1>
        <SearchForm/>
      </div>
    )
  }
}
export default connect()(Dummy);
