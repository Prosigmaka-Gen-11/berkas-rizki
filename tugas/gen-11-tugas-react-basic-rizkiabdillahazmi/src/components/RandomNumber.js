import { Component } from "react";

// Menggunkan Class Component (Cara Lama)
export default class RandomNumber extends Component {
    constructor() {
        super();
        this.state = {
            data: "Generate Number"
        };
    }

    updateData() {
        this.setState({ data: Math.floor(Math.random() * 1000000) });
    }

    render() {
        return (
            <div className="container my-2 mx-auto p-4 rounded-lg bg-teal-700 text-center">
                <h1 className="text-white font-bold text-3xl mb-2">{this.state.data}</h1>
                <button className="p-2 bg-teal-500 hover:opacity-80 rounded-lg font-bold" onClick={() => this.updateData()}>Generate</button>

            </div>
        );
    }
}