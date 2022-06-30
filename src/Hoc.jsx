import React from 'react';

export function HocComponent(WrappedComponent) {
    const lastName = 'Henriksen';

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                userName: ''
            }
            this.onClickHandler = this.onClickHandler.bind(this);
        }

        onClickHandler() {
            alert("Hello from Hoc, we changed the name for you");
            this.setState({userName: "Pernille"});
        }

        render() {
            const newProps = {
                value: this.state.name,
                onClick: this.onClickHandler
            }

            return (
                <WrappedComponent
                    userName={this.state.userName}
                    lastName={lastName}
                    style={{backgroundColor: "lightblue"}}
                    {...this.props}
                    {...this.state}
                    {...newProps}
                />
            )
        }
    }
}

