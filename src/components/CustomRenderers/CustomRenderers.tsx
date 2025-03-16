import React from 'react';
import { Input } from 'antd';
import { ControlProps, RendererProps } from '@jsonforms/core';

const CustomInput: React.FC<ControlProps> = (props) => {
    const { data, path, handleChange, schema, uischema } = props;

    return (
        <div style={{ marginBottom: 16 }}>
            <label>{schema.title}</label>
            <Input
                value={data || ''}
                onChange={(e) => handleChange(path, e.target.value)}
            />
        </div>
    );
};

export default CustomInput;