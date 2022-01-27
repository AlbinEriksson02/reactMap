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
    
    componentDidMount() {
        fetch(
"https://restcountries.com/v2/all?fields=name")
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
            <h3> Loading... </h3> </div> ;
    
        return (
        <div>
            {
                items.map((item) => ( 
                <ol key = { item.name } >
                    { item.name }

                    </ol>
                ))
            }
        </div>
    );
}
}
