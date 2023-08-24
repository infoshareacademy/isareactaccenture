import { Component } from 'react';

export class GameClass extends Component {
    state = {
        points: 0
    }

    increase = () => {
        this.setState({
            points: this.state.points + 5
        })
    }

    decrease = () => {
        this.setState({
            points: this.state.points - 5
        })
    }

    componentDidUpdate() {
        if (this.state.points >= 50) {
            alert(`Gratulacje wygrałeś w grę ${this.props.name}!`)
        }
    }

    render() {
        return <>
            <h1>Witaj w grzę {this.props.name}!</h1>
            <h2>
                Twoja liczba punktów to:
                <span style={{ color: this.state.points > 0 ? 'blue' : 'black' }}>{this.state.points}</span>!
            </h2>
            <div>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        </>
    }
}