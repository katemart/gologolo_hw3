import React, { Component } from 'react';
import LogoDisplay from './LogoDisplay';

class EditSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.logo;
    }

    handleChange = (event) => {
        //console.log("BOO");
        this.setState({[event.target.name]: event.target.value});
    }
    
    render() {
        return (
            <div className="container row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label htmlFor="text">Text:</label>
                        <input type="text" className="form-control" name="text" onChange={this.handleChange} placeholder="Text" value={this.state.text}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Color:</label>
                        <input type="color" className="form-control" name="color" onChange={this.handleChange} placeholder="Color" value={this.state.color}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fontSize">Font Size:</label>
                        <input type="number" className="form-control" name="fontSize" onChange={this.handleChange} placeholder="Font Size" value={this.state.fontSize}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="backgroundColor"> Background Color:</label>
                        <input type="color" className="form-control" name="backgroundColor" onChange={this.handleChange} placeholder="Background Color" value={this.state.backgroundColor}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderColor"> Border Color:</label>
                        <input type="color" className="form-control" name="borderColor" onChange={this.handleChange} placeholder="Border Color" value={this.state.borderColor}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderRadius">Border Radius:</label>
                        <input type="number" className="form-control" name="borderRadius" onChange={this.handleChange} placeholder="Border Radius" value={this.state.borderRadius}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="borderWidth">Border Width:</label>
                        <input type="number" className="form-control" name="borderWidth" onChange={this.handleChange} placeholder="Border Width" value={this.state.borderWidth}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="padding">Padding:</label>
                        <input type="number" className="form-control" name="padding" onChange={this.handleChange} placeholder="Padding" value={this.state.padding}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="margin">Margin:</label>
                        <input type="number" className="form-control" name="margin" onChange={this.handleChange} placeholder="Margin" value={this.state.margin}/>
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