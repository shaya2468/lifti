import React from 'react';
import $ from 'jquery';
import * as actions from 'actions';
var axios = require('axios');
var {connect} = require('react-redux');
import LiftiModal from 'LiftiModal';
import {
  Redirect
} from 'react-router-dom'

export class CreateGroup extends React.Component{

  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.state = {file: '',imagePreviewUrl: '', isLoading:false, gropuId:null};
  }

  componentDidMount(){

    $('.imgPreview').click(function(){
      $("input[type='file']").trigger('click');
    })

    $("input[type='file']").change(function(){
      $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
    })
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }


  onCreateGroup = (e) => {
    e.preventDefault();
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    this.setState({
      isLoading: true
    });
    let {file} = this.state;

    let finish = (gropuId) => {
      this.setState({
        isLoading: false,
        gropuId
      });
    }

    this.dispatch(actions.startCreateGroup(name, description, file))
    .then ((res) => {

      this.setState({
        isLoading: false,
        gropuId: res.id
      });
    }).catch((e) => {
      console.log('error?');
      console.log(e);
      finish('error');
    });
  }

  render() {

    let {imagePreviewUrl, isLoading, gropuId} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<button id='button' className="imgPreview"><img src={imagePreviewUrl} /></button>);
    } else {
       $imagePreview = (<button id='button' className="imgPreview">Group pic</button>);
    }

    if (gropuId){
      return (
        <Redirect to={{
          pathname: `/home/group/${gropuId}`,
          stam: 'stamba'
        }}/>
      );
    }

    return (
      <div id='container'>

        {
          isLoading &&

          <LiftiModal
              isModalOpen={true}
              closeModal={() => {console.log('do nothing');}}
              >

              <div id="loading_wrapper-layout">
                <div className="acc-rej">
                  <div className="loader"></div>
                </div>

                <h1 id="loading-message">Creating new Group...</h1>

              </div>
          </LiftiModal>
        }

        <div id='create-group'>
           <form id="group-form" onSubmit={this.onCreateGroup}>

             <input className="create-group-input" type='text' placeholder='Name' ref="name" pattern=".{3,}"   required title="Name must be at least 3 characters"/>
             <input className='text' className="create-group-input" placeholder='Description' ref="description" pattern=".{3,}"   required title="Name must be at least 3 characters"/>

               <div id="profile-pic">
                 <input required type='file' onChange={(e)=>this._handleImageChange(e)}/>
                 <span id='val'></span>

                 {$imagePreview}

               </div>
             <input type='submit' id="group-submit" placeholder='SUBMIT' />

           </form>
        </div>
        <div className='whysign'>
          <h1>Create Group</h1>
          <p>Start adding lifts and inviting people immediatly!</p>

        </div>
      </div>
    )
  }
}
export default connect()(CreateGroup);
