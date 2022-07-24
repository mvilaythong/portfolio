import React, { Component } from "react";
import { useParams } from "react-router";

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true };
    }

    async componentDidMount() {
        const res = await fetch(
            `https://freefrompantryapi.herokuapp.com/pantries/${this.props.params._id}`
        );
        const json = await res.json();

        this.setState({ loading: false, ...json.pantries[0]});
    }

    render() {
        if (this.state.loading) {
            return <h2>loading ...</h2>
        }

        const { name, street, city, state, zipcode, phone, email, website, description } = this.state;

        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h3>{street}</h3>
                    <h3>{city}, {state} {zipcode}</h3>
                    <h3>{phone}</h3>
                    <h3>{email}</h3>
                    <h3>{website}</h3>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

const WrappedDetails = () => {
    const params = useParams();
    return <Details params={params} />;
};

export default WrappedDetails;