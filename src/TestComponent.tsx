'use client'
import React from 'react';
import styles from './TestStyles.module.less'
import Title from "antd/es/typography/Title";

const TestComponent = () => {
    return (
        <div className={styles.someClass}>
            <Title className={styles.title} level={1}>Test Component</Title>
        </div>
    );
};

export default TestComponent;