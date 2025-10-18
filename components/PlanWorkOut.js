import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlanWorkOut() {
  const navigation = useNavigation()
  const elem = [
    {
      id: 1,
      workName: 'Qantel Hərəkətləri',
      works: [
        {
          ad: 'Ayağ üstə olan hərəkət',
          tesvir: "Ayaqda dik durun və dumbbell-ləri yanlarınızda tutun (A). Minimal hərəkət istifadə edərək və yuxarı qollarınızı bədəninizə yaxın saxlayaraq, hər iki dumbbell-i yuxarıya doğru qıvırın, avuç içləriniz içəriyə baxsın, kiçik barmaqlarınız çiyinlərinizin yanında olsun (B). Bu mövqedə sıxın və hərəkəti nəzarətlə tərs istiqamətdə geri gətirin.",
          shekil: "https://hips.hearstapps.com/menshealth-uk/main/thumbs/33000/bicep-curl.jpg?resize=980:*",
        },
        {
          ad: 'Burma',
          tesvir: "Ayaqda dik durun və dumbbell-ləri yanlarınızda tutun (A). Minimal hərəkət istifadə edərək və yuxarı qollarınızı bədəninizə yaxın saxlayaraq, dumbbell-lərdən birini yuxarı qıvırın, avuç içiniz içəriyə baxsın, kiçik barmağınız çiyininizə yaxın olsun (B). Bu mövqedə sıxın və hərəkəti nəzarətlə geri gətirin. Sonra digər qol ilə təkrarlayın. Belə növbələşərək davam edin.",
          shekil: "https://hips.hearstapps.com/hmg-prod/images/dumbbell-curl-1592379736.jpg?resize=640:*",
        },
        {
          ad: 'Çekic',
          tesvir: "Ayaqda dik durun və dumbbell-ləri yanlarınızda tutun (A). Minimal hərəkət istifadə edərək və yuxarı qollarınızı bədəninizə yaxın saxlayaraq, hər iki dumbbell-i yuxarı qıvırın, avuç içləriniz bir-birinə baxsın (B). Hər iki dumbbell-i aşağı endirin və dərhal təkrarlayın.",
          shekil: "https://hips.hearstapps.com/hmg-prod/images/hammer-curl-1676641906.jpg?resize=980:*",
        },
         {
          ad: 'Növbəli Çəkic',
          tesvir: "Ayaqda dik durun və dumbbell-ləri yanlarınızda tutun (A). Minimal hərəkət istifadə edərək və yuxarı qollarınızı bədəninizə yaxın saxlayaraq, dumbbell-lərdən birini yuxarı qıvırın, avuç içiniz hər zaman içəriyə baxsın (B). Bu mövqedə sıxın və hərəkəti nəzarətlə geri gətirin. Sonra digər qol ilə təkrarlayın. Belə növbələşərək davam edin.",
          shekil: "https://hips.hearstapps.com/menshealth-uk/main/thumbs/15567/hammer-curl.jpg?resize=980:*",
        },
         {
          ad: 'Təkli Hərəkət',
          tesvir: "Ayaqda dik durun və tək dumbbell-i hər iki əlinizlə, ağırlığın xarici hissələrindən tutaraq bel səviyyəsində saxlayın (A). Minimal hərəkət istifadə edərək, dumbbell-i yuxarı qıvırın, çənənizin altına qədər gətirin (B). Burada bisepsinizi möhkəm sıxın və ağırlığı nəzarətlə aşağı endirin. Təkrarlayın.",
          shekil: "https://hips.hearstapps.com/hmg-prod/images/dumbbell-crush-curl-6511764301ec3.jpg?resize=980:*",
        }

      ]
    },

    {
      id:2,
      workName: 'Gym',
      works:[
        {
          ad:'Geniş',
          tesvir:'Wide push-up (geniş əllərlə push-up) çətin bir məşqdir və əsasən göğüs (pecs) əzələlərini işləyir, standart push-uplara nisbətən triceps-ə daha az təsir göstərir.',
          shekil:'https://gmb.io/wp-content/uploads/2017/10/wide-pushup.jpg'
        },
         {
          ad:'Barmaqlar kənar',
          tesvir:'Bu varyasiya bilək və ya çiyin zədələrini nəzərə alaraq məşq etmək üçün əla bir seçimdir. O, standart push-up-da işlədiyinizə oxşar əzələləri hədəfləyir, eyni zamanda oynaqlara düşən təzyiqi azaldır.',
          shekil:'https://gmb.io/wp-content/uploads/2017/10/fingers-out-pushup1.jpg'
        },
         {
          ad:'Superman',
          tesvir:'Gəlin etiraf edək – superman push-up-u mənimsəmək sizi əsl supermen kimi hiss etdirəcək. Bu, qarın əzələləri və lats üçün çılğın bir sınaqdır və ürəyi zəif olanlar üçün deyil.',
          shekil:'https://gmb.io/wp-content/uploads/2017/10/superman-pushup.jpg'
        },
         {
          ad:'Alqış',
          tesvir:'Bu varyasiya partlayıcı gücün inkişafı üçün əladır, çünki bədəninizi yerə basaraq sürət və güc ilə yuxarı qaldırır, əllərinizi birləşdirib yenidən yerə qoyursunuz',
          shekil:'https://gmb.io/wp-content/uploads/2017/10/clapping-pushup.jpg'
        },
         {
          ad:'Dar Çekinme',
          tesvir:'Əgər gələcəkdə tək qollu push-up öyrənmək istəyirsinizsə, işləməyə başlamanız üçün bu ilk variantı tövsiyə edirəm. O, tək qollu push-up ilə heç əlaqəsi olmayan kimi görünə bilər, amma tək qollu push-up-da qolun mövqeyini düşündükdə, dar push-up ilə olduqca oxşardır.',
          shekil:'https://gmb.io/wp-content/uploads/2017/10/narrow-pushup.jpg'
        }


      ]
    }
  ]



  const Item = ({ad, tesvir, shekil})=>{
    return(<View className='flex-row justify-between items-center px-2'>
          <View className='flex-row py-2'>
            <View>
              <Image className='w-28 h-28 rounded-xl' source={{uri:shekil}} />
            </View>
            <View className='py-2'>
              <Text className='text-xl font-bold px-3'>{ad}</Text>
            </View>
          </View>

          <TouchableOpacity  onPress={()=>navigation.navigate('etrafli',{ad,shekil,tesvir})} className='border border-slate-600 rounded-full flex-row p-1 justify-center items-center'>
              <Ionicons name='chevron-forward' size={22} color={'brown'} />
          </TouchableOpacity>

        </View>)
  }

  return (
    <View>
        {
          elem.map((item,index)=><View key={index}>
              <Text className='text-2xl px-2 text-center py-3 font-bold'>{item.workName}</Text>
              {
                item.works.map((i,index)=><View key={index}>
                  <Item ad={i.ad} tesvir={i.tesvir} shekil={i.shekil} />
                  </View>)
              }

            </View>)
        }
   
    </View>
  )
}