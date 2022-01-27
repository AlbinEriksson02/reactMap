import React from "react";

export class CountryCall extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://restcountries.com/v2/all?fields=name,latlng")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div>
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.name } >
                    { item.name }
                    { item.latlng }
                    </ol>
                ))
            }
        </div>
    );
}
}
