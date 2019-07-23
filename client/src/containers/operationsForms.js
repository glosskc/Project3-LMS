import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

import { addClient } from '../actions/actions';

class InputForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  onSubmit(props) {
    console.log('on submit props: ', props)
    this.props.addContact(props)
  }

  render() {
    const { fields: { clientName, task, email, phone, location, notes}, handleSubmit } = this.props;

    const styles = {
      submitButton : {
        marginTop : 15
      }
    }

    return (
      <form className="form-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* <div>
          <label>First Name</label>
          <div>
            <input className="form-control" type="text" placeholder="First Name" {...firstName}/>
          </div>
        </div> */}
        <div>
          <label>Client Name</label>
          <div>
            <input className="form-control" type="text" placeholder="Client Name" {...clientName}/>
          </div>
        </div>
        <div>
          <label>Task</label>
          <div>
            <input className="form-control" type="text" placeholder="Task" {...task}/>
          </div>
        </div>
        {/* <div>
          <label>Organization</label>
          <div>
            <input className="form-control" type="text" placeholder="Organization" {...organization}/>
          </div>
        </div> */}
        <div>
          <label>Email</label>
          <div>
            <input className="form-control" type="email" placeholder="Email" {...email}/>
          </div>
        </div>
        <div>
          <label>Phone</label>
          <div>
            <input className="form-control" type="text" placeholder="Phone" {...phone}/>
          </div>
        </div>
        {/* <div>
          <label>Website</label>
          <div>
            <input className="form-control" type="text" placeholder="Website" {...website}/>
          </div>
        </div> */}
        <div>
          <label>Location</label>
          <div>
            <input className="form-control" type="text" placeholder="Location" {...location}/>
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea className="form-control" {...notes} />
          </div>
        </div>
        <div>
          <button className="btn btn-default" type="submit" style={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'clientForm',
  fields: ['clientName', 'task', 'email', 'phone', 'location', 'notes']
}, null, { addClient })(InputForm);