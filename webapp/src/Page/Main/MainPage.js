import React from "react";
import axios from 'axios';

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "연어 덮밥",
        };
    }

    changeText = () => {
        this.setState({
            text: "고등어구이",
        });
    };

    hitFood = () => {
        axios.get('http://localhost:8080/api/food/KOR002')
            .then(res => {
                if(res.data === 1) {
                    this.setState({
                        text: "김치맛잇어요"
                    });
                }
            }).catch(err => {
            throw err;
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.changeText}>시작!</button>
                <button onClick={this.hitFood}>선택!</button>
            </div>
        );
    }
}

export default MainPage;