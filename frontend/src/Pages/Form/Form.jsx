import React from 'react';
import "./Form.css"

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      impression: '',
      comments: '',
      image: null // File state
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFileChange = (event) => {
    this.setState({ image: event.target.files[0] }); // Store the file object in state
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, lastName, impression, comments, image } = this.state;

    const formData = new FormData();
    formData.append('userName', name);
    formData.append('userEmail', lastName);
    formData.append('state', impression === 'Very Satisfied'); // Convert radio value to boolean
    formData.append('description', comments);
    if (image) {
      formData.append('image', image); // Append the file
    }

    fetch('http://localhost:3000/users/plates', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => { throw new Error(err.message); });
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        // Handle success, e.g., show a success message or redirect
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message
      });
  }

  render() {
    return (
      <>
        <div className='empty'></div>
        <div className="testbox">
          <form onSubmit={this.handleSubmit} encType="multipart/form-data" className='form'>
            <p id="h1">Form</p>

            <div className='inputs'>
              <div className='right'>
                <label id="h4">Name</label>
                <input
                  placeholder="Enter your first name"
                  type="text"
                  className="input"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange} />
              </div>
              <div className='left'>
                <label id="h4">Email</label>
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="input"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange} />
              </div>
            </div>

            <p id="h4">What service do you want?</p>
            <table >
              <tbody className='table'>
                <tr>
                  <th>Edit/Design</th>
                  <th>Donation</th>
                </tr>
                <tr>
                  <td><input 
                    name="impression" 
                    value="Very Satisfied" 
                    type="radio" 
                    checked={this.state.impression === 'Very Satisfied'}
                    onChange={this.handleChange} 
                  /></td>
                  <td><input 
                    name="impression" 
                    value="Satisfied" 
                    type="radio" 
                    checked={this.state.impression === 'Satisfied'}
                    onChange={this.handleChange} 
                  /></td>
                </tr>
              </tbody>
            </table>

            <div className="file-upload-container">
              <label className='file-upload-button' htmlFor="file-upload">Add photo</label>
              <input 
                id="file-upload"
                className="file-upload-input"
                type="file"
                name="image"
                onChange={this.handleFileChange}
              />
            </div>

            <label id="h4" className='lab'>Description:</label>
            <textarea
              rows="5"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
              className='description-input'
            ></textarea>

            <div className="btn-block">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
