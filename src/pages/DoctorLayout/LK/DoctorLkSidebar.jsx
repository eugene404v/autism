import React from 'react'
import { Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { PieChart, Pie, Cell } from 'recharts';
import {useDispatch, useSelector} from 'react-redux'

import doctorAvatar from './doctorAvatar.svg'
import './DoctorLK.scss'
import {setStatsPeriod} from 'redux/reducers/doctorLK'





const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];




function DoctorLkSidebar() {
    const dispatch = useDispatch()
    const {currentData} = useSelector(state=>state.doctorLkReducer)

    const statDropHandler = (val) => {
        dispatch(setStatsPeriod(val))
    }

    return (
        <div className="doc-cabinet__sidebar docside">
            <div className="docside__headline">
                <img src={doctorAvatar} className="docside__avatar"/>
                <div className="docside__titles">
                    <h2 className="docside__name">Кузнецов Валерий Анатольевич</h2>
                    <h3 className="docside__job">должность врача</h3>
                </div>
            </div>
            <ul className="docside__properties">
                <li className="docside__property">Стаж 16 лет</li>
                <li className="docside__property">Врач высшей категории</li>
                <li className="docside__property">Кандидат медицинских наук</li>
            </ul>
            <div className="docside__stats">
                <div className="docside__statheader">
                    <h3 className="docside__statname">Статистика пациентов за:</h3>
                    <Select className='docside__dropdown' bordered={false} style={{ width: 100 }} onSelect={statDropHandler} defaultValue='month'>
                        <Select.Option value='month'>месяц</Select.Option>
                        <Select.Option value='year'>год</Select.Option>
                    </Select>
                </div>
            </div>
            <PieChart width={260} height={260}>
                <Pie
                    data={currentData}
                    cx={130}
                    cy={130}
                    labelLine={false}
                    //label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        currentData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
            </PieChart>
            <ul className="docside__statlist">
                <li className="docside__statitem">
                    всего пациентов 
                    <span className="stat__count">{currentData[0].value}</span>
                    <span className="stat__color" style={{backgroundColor: COLORS[0]}}></span>
                </li>
                <li className="docside__statitem">
                    подтвержденные РАС 
                    <span className="stat__count">{currentData[1].value}</span>
                    <span className="stat__color" style={{backgroundColor: COLORS[1]}}></span>
                </li>
                <li className="docside__statitem">
                    неподтвержденные РАС 
                    <span className="stat__count">{currentData[2].value}</span>
                    <span className="stat__color" style={{backgroundColor: COLORS[2]}}></span>
                </li>
                <li className="docside__statitem">
                    вновь поступившие 
                    <span className="stat__count">{currentData[3].value}</span>
                    <span className="stat__color" style={{backgroundColor: COLORS[3]}}></span>
                </li>
            </ul>
        </div>
    )
}

export default DoctorLkSidebar
