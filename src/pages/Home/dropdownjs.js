
import React from 'react';
import MainLayout from '../../Layouts/MainLayout';
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';


 
 class dropdownjs extends React.Component {
    render() {
  return(
    <>
    <Input
      placeholder="Enter your username"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
    
  </>
  ) ;
}
 }

export default dropdownjs;
