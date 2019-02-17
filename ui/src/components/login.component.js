import React from 'react';
import {
    Form, Icon, Input, Button,Row,Col
} from 'antd';
import WrappedSignUpModal from './sign-up.modal';
  

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isSignUpVisible : false
        }
        this.showSignUp = this.showSignUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showSignUp () {
        this.setState({
            isSignUpVisible: true
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            let userName = values.userName;
            let password = values.password;            
            fetch(`http://localhost:3000/user/${userName}/password/${password}`,{
                method: 'get',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json'
                }
            }).then((data)=>{
                console.log("data..:",data);
            }).catch((error)=>{
                
            })
        })        
    }

    render(){
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <div className="App-header">  
                    <Row>
                        <Col span={6}>

                        </Col>
                    </Row>
                </div>
                <div style={{padding:'5px'}}>
                    <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={5}></Col>
                        <Col span={12}>
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                        placeholder="Username" />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}></Col>
                        <Col span={12}>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                        type="password" 
                                        placeholder="Password" />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={5}></Col>
                        <Col span={12}>
                            <Row>
                                <Col span={12} style={{textAlign:'right'}}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" onClick={this.showSignUp}>
                                            Sign Up
                                        </Button>
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={{textAlign:'left',paddingLeft:'10px'}}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" onClick={this.login}>
                                            Log in
                                        </Button>
                                    </Form.Item>
                                </Col>                                
                            </Row>
                        </Col>
                    </Row>
                    { this.state.isSignUpVisible ? 
                        <WrappedSignUpModal 
                            isSignUpVisible={this.state.isSignUpVisible}>
                        </WrappedSignUpModal>
                        :''}
                </Form>
                </div>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;