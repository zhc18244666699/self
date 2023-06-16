import React,{useCallback,useState,useEffect} from 'react';
function ChangeSize(){
    const [size,setSize] = useState<any>({
            width: document.documentElement.clientWidth,
            hieght: document.documentElement.clientHeight
    })
    const onResize = useCallback(()=>{
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    },[])
    useEffect(()=>{
        window.addEventListener('resize',onResize);
        return (()=>{
            window.removeEventListener('resize',onResize)
        })
    },[])
    return size;
}

export default ChangeSize;
