import React, { useState, useEffect } from 'react'
import { history } from 'umi';
import changeSize from '../../components/listenResizeUpdate/index'

const HomeContainer: React.FC = () => {
    let size = changeSize()
    
    useEffect(() => {
        // 监听第一次进入时设备屏幕
        if (size.width <= 750) {
            history.push('/mobile');
        } else {
            history.push('/web');
        }
    }, [])

    return (
        <div>
            sad
        </div>
    )
}

export default HomeContainer;
