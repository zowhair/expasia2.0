 import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function MainSlider(props:any)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=1380"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: "/front1.jpg"

        }
    ]

    return (
        <Carousel height={props.height} sx={{ mx: 0, my:0 }} className="">
            {
                items.map( (item, i) => <img key={i} src={item.img} width="100%" className="flex h-screen" /> )
            }
        </Carousel>
    )
}

function Item(props:any)
{
    return (
        <Paper className='bg-purple-300 '>
            <img src={props.item.img} className="bg-cover" />
        </Paper>
    )
}

export default MainSlider;