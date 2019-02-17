import React from 'react';
import {Row,Col,Button} from 'antd';
import './login.component.css';
class DashBoardComponent extends React.Component{

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.history.push('/');
    }

    render(){
        return(
            <div className="App-header">  
                    <Row>
                        <Col span={6}>
                           <span className="header-label"> DashBoard</span>
                        </Col>
                        <Col span={12}>
                        </Col>
                        <Col span={6}>
                                <Button onClick={this.logout}>LogOut</Button>
                        </Col>
                    </Row>
                </div>
        )
    }

}

export default DashBoardComponent;