import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/userActions'
import { fetchDataArray } from '../actions/dataActions'
import { Typography } from 'antd';
import { Button } from 'antd';

const { Title } = Typography;

function FavouriteTable({ title }) {
    const loading = useSelector(state => state.users.loading)
    const current = useSelector(state => state.users.current)
    const total = useSelector(state => state.users.total)
    const users = useSelector(state => state.users.users)
    const pagination = {
        current: current,
        total,
        pageSizeOptions: [10]
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers(pagination))
    }, [dispatch])

    const handleTableChange = (pagination) => {
        console.log(pagination)
        dispatch(fetchUsers(pagination));
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '20%',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Birth year',
            dataIndex: 'birth_year',
        },
        {
            title: 'Hair color',
            dataIndex: 'hair_color',
        },
        {
            title: 'Skin color',
            dataIndex: 'skin_color',
        },
        {
            title: 'Eye color',
            dataIndex: 'eye_color',
        },
        {
            title: 'Films',
            dataIndex: 'films',
            render: (text, record) => record.films.length ? <Button onClick={() => dispatch(fetchDataArray(record.films, record.name, 'films'))}>Show</Button> : null,
        },
        {
            title: 'Home world',
            dataIndex: 'homeworld',
            render: (text, record) => <Button onClick={() => dispatch(fetchDataArray([record.homeworld], record.name, 'hometown'))}>Show</Button>,
        },
        {
            title: 'Species',
            dataIndex: 'species',
            render: (text, record) => record.species.length ? <Button onClick={() => dispatch(fetchDataArray(record.species, record.name, 'species'))}>Show</Button> : null,
        },
        {
            title: 'Vehicles',
            dataIndex: 'vehicles',
            render: (text, record) => record.vehicles.length ? <Button onClick={() => dispatch(fetchDataArray(record.vehicles, record.name, 'vehicles'))}>Show</Button> : null,
        },
        {
            title: 'Starships',
            dataIndex: 'starships',
            render: (text, record) => record.starships.length ? <Button onClick={() => dispatch(fetchDataArray(record.starships, record.name, 'starships'))}>Show</Button> : null,
        },
    ];

    return (
        <>
            <Title className='center' level={2}>{title}</Title>

            <Table
                columns={columns}
                rowKey={record => users.url}
                dataSource={users}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
            />
        </>
    )
}

export default FavouriteTable
