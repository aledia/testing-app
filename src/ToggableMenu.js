import React from "react";

class ToggableMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "display": "none",
            employee: {
                name: "pepe",
                surname: "locanto",
                age: 32
            }
        }
    }

    _test = () => {
        if (this.state.display === "none") {
            this.setState({
                "display": "block"
            })
        } else {
            this.setState({
                "display": "none"
            })
        }
    }

    nameFormatter(name) {
        return `xxxx ${name} xxxx`
    }

    render() {
        const PI = Math.PI
        const element = <h1 className="danger">hola desde elemento {PI  }</h1>;

        return (
            <div>
                <h3>Employee details {this.state.employee.name} {this.state.employee.surname} </h3>
                {element}
                {this.state.display}
                <span>{this.nameFormatter(this.props.nameIronhacker)}</span>
                <button onClick={this._test}>See contents</button>
                <ul style={{ display: this.state.display }}>
                    <li>Section {Math.random()}</li>
                    <li>Section 2</li>
                    <li>Section 3</li>
                </ul>
            </div>
        )
    }
}

export default ToggableMenu;