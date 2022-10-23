import React from "react";

export default class CycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formTitle: "Form",
            name: "",
            email: "",
            phonenumber: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log('ngambil data dari database')
        this.setState({
            name: 'component',
            email: 'component@gmail.com',
            phonenumber: '082123445566'
        })
    }

    componentDidUpdate(propsBefore, stateBefore) {
        // console.log(propsBefore);
        // console.log(this.props);
        console.log(stateBefore);
        console.log(this.state);
    }

    componentWillUnmount() {
        console.log('unsubscribe ke db Contact')
        this.setState({
            name: "",
            email: "",
            phonenumber: "",
        })

        setTimeout(() => {
            this.setState({ formTitle: "Contact Form Component" })
        }, 3000)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        alert(`Nama : ${this.state.name}, Email : ${this.state.email}, Phone : ${this.state.phonenumber}`);

        event.preventDefault();

        this.setState({
            name: '',
            email: '',
            phonenumber: ''
        });

        // this.setState({ name: "" });
        // console.log(contactInfo);
    };

    render() {
        return (
            <div className="container my-2 mx-auto p-4 rounded-lg text-center border-2 border-teal-500">
                <div>
                    <h1 className="font-bold text-3xl mb-4">{this.state.formTitle}</h1>
                    <div className="my-2">{JSON.stringify(this.state)}</div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.name}
                            className="p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                        />
                    </div>
                    <div>
                        <input onChange={this.handleChange}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={this.email}
                            className="p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                        />
                    </div>
                    <div>
                        <input onChange={this.handleChange}
                            type="number"
                            name="phonenumber"
                            placeholder="Phone Number"
                            value={this.phonenumber}
                            className="p-2 rounded-md mb-2 border-2 border-slate-500 focus:outline-teal-500"
                        />
                    </div>
                    <div>
                        <button className="p-2 bg-teal-500 hover:opacity-80 rounded-lg font-bold">Submit Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}