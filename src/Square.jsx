/**
 * Created by jon on 2018/2/28.
 */

import React from 'react'

class Square extends React.Component {

    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

export default Square