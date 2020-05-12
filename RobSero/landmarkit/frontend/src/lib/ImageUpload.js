import React from 'react'
import axios from 'axios'

class ImageUpload extends React.Component {
  state = {
    image: null
  }

  uploadURL = 'https://api.cloudinary.com/v1_1/dy7eycl8m/image/upload' // get this info from cloudinary
  uploadPreset = 'uke1baj3' // get this info from cloudinary. Presets of what to do with image like cropping

  handleUpload = async (event) => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', this.uploadPreset)

    const res = await axios.post(this.uploadURL, data)

    this.setState({
      image: res.data.url
    }, 
    () => {
      this.props.onChange({target: {name: 'image', value: this.state.image }})
    })
  }

  render(){
    return(
      <>
    {this.state.image ? <img src={this.state.image} alt='picture upload' />  :
      <div className="field">
      <label className="label">Upload a Snap</label>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-danger" type="file" placeholder="Image Upload" name='city' onChange={this.handleUpload} />
      </div>
      <p className="help is-danger">This email is invalid</p>
    </div>
    }
</>
    )
  }
}

export default ImageUpload