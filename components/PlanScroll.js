import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function PlanScroll() {
    const elem = [
        {
            id: 1,
            desc: 'Qantel',
            imageItem: 'https://www.vhv.rs/dpng/d/415-4153600_hantel-png-image-dumbbell-png-transparent-png.png'
        },
        {
            id: 2,
            desc: 'Ip Atlamaq',
            imageItem: 'https://www.vinexshop.com/Product-Images/Large/7706-Vinex-Jumping-Rope-PP-Super.jpg'
        },
        {
            id: 3,
            desc: 'Gym Etmek',
            imageItem: 'https://www.thewarehouse.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-twl-master-catalog/default/dwdeb02444/images/hi-res/65/42/R2838118_30.jpg?sw=765&sh=765'
        },
        ,
        {
            id: 4,
            desc: 'Turnik',
            imageItem: 'https://www.fringesport.com/cdn/shop/files/Unlimited-Squat-Rack-with-Pull-Up-Bar-Fringe-Sport-106825397_1800x1800.jpg?v=1718670270'
        },
        {
            id: 5,
            desc: 'Teker',
            imageItem: 'https://5.imimg.com/data5/SELLER/Default/2023/5/310859860/VE/PW/DO/27136233/body-pro-roller-500x500.jpg'
        }
    ]

    let shekil = 'https://5.imimg.com/data5/SELLER/Default/2023/5/310859860/VE/PW/DO/27136233/body-pro-roller-500x500.jpg'

    const ScrollItem = ({ imageItem, text }) => {
        return (
            <View className='bg-slate-100 p-2 rounded-xl'>
                <View>
                    <Image className='w-32 h-32' source={{ uri: imageItem }} />
                </View>
                <View>
                    <Text className='text-xl'>{text}</Text>
                </View>
            </View>
        )
    }
    return (

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className='flex-row gap-4 mx-3'>
                {
                    elem.map((item, index) => <ScrollItem imageItem={item.imageItem} text={item.desc} key={item.id} />)
                }
            </View>

        </ScrollView>

    )
}