import React from 'react'

class KnGraph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bound: false,
            features: []
        }
    }

    fetchKnGraph = () => {
        fetch("http://dhruvnagarajan.com:3049/v1/kngraph")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            
            this.setState((state, props) => ({
                features: res,
                bound: true
            }))
        })
    }

    componentDidMount() {
        this.fetchKnGraph()
    }

    render() {
        return (
            <div className="kngraph">
                <div className="left">
                    <span className="text-name">KN Graph</span>
                    <br></br>
                    <span className="text-caption">
                    {
                        this.state.bound ? this.state.features.map(item => {
                            return item.value
                        }) : null
                    }
                    </span>
                </div>
            </div>
        )
    }
}

export default KnGraph