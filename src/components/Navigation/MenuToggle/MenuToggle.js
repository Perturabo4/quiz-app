import React from 'react';
import './MenuToggle.css';
const MenuToggle = props => {
    let cls = [
        'MenuToggle',
        'fa'
    ];
    
    props.isOpen ? cls = cls.concat(['fa-times','open']) : cls.push('fa-bars')
  
    return (
        <i 
        className={cls.join(' ')}
        onClick={props.onToggle}></i>
    )
}

export default MenuToggle;