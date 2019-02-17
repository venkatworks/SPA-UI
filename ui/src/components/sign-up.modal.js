import React from 'react';
import {
    Form, Input, Radio ,Modal,notification 
} from 'antd';

class SignUpModal extends React.Component{

    constructor(props){
        super(props);
        this.state={
            visible : false
        }
        this.onCancelHandler = this.onCancelHandler.bind(this);
        this.onSignUpHandler = this.onSignUpHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openNotificationWithIcon = this.openNotificationWithIcon.bind(this);
    }

    openNotificationWithIcon(type){
        let description = type === 'success' ? 'Sign up success fully !' : 'Sorry , Please try again';
        notification[type]({
          message: type,
          description: description
        });
      };

    componentDidMount(){
        this.setState({
            visible : this.props.isSignUpVisible
        })
    }

    onCancelHandler (){
        this.setState({
            visible : false
        })
    }

    onSignUpHandler(){
        this.props.form.validateFields((err, values)=>{
            if (err) {
                return;
            }

            // REST API Call to save the data.
            fetch("http://localhost:3000/user",{
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: JSON.stringify(values)
            }).then((response)=>{
                this.openNotificationWithIcon('success');
            }).catch((error)=>{
                this.openNotificationWithIcon('failed');
            })
        })  
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.form.validateFields((err, values)=>{
            if (err) {
                return;
            }
            console.log("values...:",values);
        })
    }
    

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Modal visible={this.state.visible}
                    title="Sign Up Form"
                    okText="Sign Up"
                    maskClosable={true}
                    onCancel={this.onCancelHandler}
                    closable={true}
                    onOk={this.onSignUpHandler} >
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item label="User Name">
                                {getFieldDecorator('userName', {
                                    rules: [{
                                     message: 'The input is not valid E-mail!',
                                    }, {
                                    required: true, message: 'Please input your User Name!',
                                    }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                            <Form.Item label="Password">
                                {getFieldDecorator('password', {
                                    rules: [{
                                    required: true, message: 'Please input your password!',
                                    }, {
                                    validator: this.validateToNextPassword,
                                    }],
                                })(
                                    <Input type="password" />
                                )}
                            </Form.Item>                        
                            <Form.Item label="Email">
                                {getFieldDecorator('email', {
                                    rules: [{
                                    required: true, message: 'Please input your E-Mail!',
                                    }, {
                                    validator: this.validateToNextPassword,
                                    }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                            <Form.Item label="First Name">
                                {getFieldDecorator('firstName', {
                                    rules: [{
                                    required: true, message: 'Please input your First Name!',
                                    }, {
                                    validator: this.validateToNextPassword,
                                    }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                            <Form.Item label="Last Name">
                                {getFieldDecorator('lastName', {
                                    rules: [{
                                    required: true, message: 'Please input your Last Name!',
                                    }, {
                                    validator: this.validateToNextPassword,
                                    }],
                                })(
                                    <Input />
                                )}
                            </Form.Item>
                            <Form.Item label="Gender">
                                {getFieldDecorator('gender')(
                                    <Radio.Group>
                                        <Radio value="male">Male</Radio>
                                        <Radio value="female">Female</Radio>
                                    </Radio.Group>
                                )}
                            </Form.Item>
                            <Form.Item label="Country">
                            {getFieldDecorator('country', {
                                rules: [{
                                required: false
                                }],
                            })(
                                <Input/>
                            )}
                        </Form.Item>
                        </Form>
                    </Modal>
            </div>
        )
    }
}



const WrappedSignUpModal = Form.create()(SignUpModal);

export default WrappedSignUpModal;