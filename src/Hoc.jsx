import React from 'react';

export function HocComponent(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: ''
            }
            this.onClickHandler = this.onClickHandler.bind(this);
        }

        onClickHandler() {
            alert("Hello from Hoc, we changed the name for you");
            this.setState({username: "Pernille"});
        }

        render() {
            const newProps = {
                value: this.state.name,
                onClick: this.onClickHandler
            }

            return (
                <WrappedComponent
                    username={this.state.username}
                    style={{backgroundColor: "lightblue"}}
                    {...this.props}
                    {...this.state}
                    {...newProps}
                />
            )
        }
    }
}

