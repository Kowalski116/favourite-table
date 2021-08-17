import React from 'react'
import { Table } from 'antd';
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { unsetName } from '../actions/dataActions'
import { Button } from 'antd'

const { Title } = Typography;
function DetailTable() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.data.name)
    const data = useSelector(state => state.data.data)
    const loading = useSelector(state => state.data.loading)
    const tableType = useSelector(state => state.data.tableType)
    const columnsFilm = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Episode id',
            dataIndex: 'episode_id',
        },
        {
            title: 'Director',
            dataIndex: 'director',
        },
        {
            title: 'Producer',
            dataIndex: 'producer',
        },
        {
            title: 'Release_date',
            dataIndex: 'release_date',
        },
    ]
    const columnsHomeTown = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Rotation period',
            dataIndex: 'rotation_period',
        },
        {
            title: 'Orbital period',
            dataIndex: 'orbital_period',
        },
        {
            title: 'Diameter',
            dataIndex: 'diameter',
        },
        {
            title: 'Climate',
            dataIndex: 'climate',
        },
        {
            title: 'Gravity',
            dataIndex: 'gravity',
        },
        {
            title: 'Terrain',
            dataIndex: 'terrain',
        },
        {
            title: 'Surface water',
            dataIndex: 'surface_water',
        },
        {
            title: 'Population',
            dataIndex: 'population',
        },
    ]

    const columnsSpecies = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Classification',
            dataIndex: 'classification',
        },
        {
            title: 'Designation',
            dataIndex: 'designation',
        },
        {
            title: 'Average height',
            dataIndex: 'average_height',
        },
        {
            title: 'Skin colors',
            dataIndex: 'skin_colors',
        },
        {
            title: 'Hair colors',
            dataIndex: 'hair_colors',
        },
        {
            title: 'Eye colors',
            dataIndex: 'eye_colors',
        },
        {
            title: 'Average lifespan',
            dataIndex: 'average_lifespan',
        },
        {
            title: 'Language',
            dataIndex: 'language',
        },
    ]

    const columnsVehicles = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Model',
            dataIndex: 'model',
        },
        {
            title: 'Manufacturer',
            dataIndex: 'manufacturer',
        },
        {
            title: 'Cost in credits',
            dataIndex: 'cost_in_credits',
        },
        {
            title: 'Length',
            dataIndex: 'length',
        },
        {
            title: 'Max atmosphering speed',
            dataIndex: 'max_atmosphering_speed',
        },
        {
            title: 'Crew',
            dataIndex: 'crew',
        },
        {
            title: 'Passengers',
            dataIndex: 'passengers',
        },
        {
            title: 'Cargo capacity',
            dataIndex: 'cargo_capacity',
        },
        {
            title: 'Consumables',
            dataIndex: 'consumables',
        },
        {
            title: 'Vehicle class',
            dataIndex: 'vehicle_class',
        },
    ]

    const columnsStarships = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Model',
            dataIndex: 'model',
        },
        {
            title: 'Manufacturer',
            dataIndex: 'manufacturer',
        },
        {
            title: 'Cost in credits',
            dataIndex: 'cost_in_credits',
        },
        {
            title: 'Length',
            dataIndex: 'length',
        },
        {
            title: 'Max atmosphering speed',
            dataIndex: 'max_atmosphering_speed',
        },
        {
            title: 'Crew',
            dataIndex: 'crew',
        },
        {
            title: 'Passengers',
            dataIndex: 'passengers',
        },
        {
            title: 'Cargo capacity',
            dataIndex: 'cargo_capacity',
        },
        {
            title: 'Consumables',
            dataIndex: 'consumables',
        },
        {
            title: 'Hyperdriv rating',
            dataIndex: 'hyperdrive_rating',
        },
        {
            title: 'MGLT',
            dataIndex: 'MGLT',
        },
        {
            title: 'Starship class',
            dataIndex: 'starship_class',
        },
    ]

    let columns
    let title
    switch (tableType) {
        case 'films':
            {
                columns = columnsFilm
                title = `${ name }'s films`
                break
            }
        case 'hometown':
            {
                columns = columnsHomeTown
                title = `${ name }'s hometown`
                break
            }
        case 'species':
            {
                columns = columnsSpecies
                title = `${ name }'s species`
                break
            }
        case 'vehicles':
            {
                columns = columnsVehicles
                title = `${ name }'s vehicles`
                break
            }
        case 'starships':
            {
                columns = columnsStarships
                title = `${ name }'s startships`
                break
            }
        default:

    }
    if (!name) return null
    return (
        <div className='mtb-16'>
            <Title className='center' level={2}>{title}</Title>

            <Table
                columns={columns}
                dataSource={data}
                loading={loading}
                pagination={false}
            />

            <Button className='float-right mtb-16' danger onClick={() => dispatch(unsetName())}>Close</Button>
        </div>
    )
}

export default DetailTable
