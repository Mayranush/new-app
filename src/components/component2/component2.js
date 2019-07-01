import React from 'react'
class Component2 extends React.Component {
    render() {
        const { params } = this.props.match;
        return <h1>Component2 { params.id }</h1>
    }
}
export default Component2
