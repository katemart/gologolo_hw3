import React, { Component } from 'react';
import LogoDisplay from './LogoDisplay';

class EditSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.logo;
    }

    handleChange = (event) => {
        console.log("BOO");
        this.setState({[event.target.name]: event.target.value});
    }
    
    render() {
        return (
            <div className="container row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="text">Text:</label>
                        <input type="text" className="form-control" name="text" onChange={this.handleChange} placeholder="Text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Color:</label>
                        <input type="color" className="form-control" name="color" onChange={this.handleChange} placeholder="Color" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fontSize">Font Size:</label>
                        <input type="number" className="form-control" name="fontSize" onChange={this.handleChange} placeholder="Font Size" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="backgroundColor"> Background Color:</label>
                        <input type="color" className="form-control" name="backgroundColor" onChange={this.handleChange} placeholder="Background Color" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderColor"> Border Color:</label>
                        <input type="color" className="form-control" name="borderColor" onChange={this.handleChange} placeholder="Border Color" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderRadius">Border Radius:</label>
                        <input type="number" className="form-control" name="borderRadius" onChange={this.handleChange} placeholder="Border Radius" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderWidth">Border Width:</label>
                        <input type="number" className="form-control" name="borderWidth" onChange={this.handleChange} placeholder="Border Width" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="padding">Padding:</label>
                        <input type="number" className="form-control" name="padding" onChange={this.handleChange} placeholder="Padding" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="margin">Margin:</label>
                        <input type="number" className="form-control" name="margin" onChange={this.handleChange} placeholder="Margin" />
                    </div>
                </div>
                <div className="col-sm-9">
                    <LogoDisplay logo = {this.state}/>
                </div>
            </div>
        )
    }
}

export default EditSidebar