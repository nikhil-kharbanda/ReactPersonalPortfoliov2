import RC_Car from '../../assets/images/RC_Car.png'
import SmartMirror from '../../assets/images/SmartMirror.jpeg'

export const EngProjData = [
  {
    id: 1,
    name: 'MirrAI',
    description: ['For my final year engineering Capstone project, my group and I decided to create a smart home Magic Mirror with an AI component. This AI was designed to recognize what the user is currently wearing, then generates similar outfits based on that. The goal of this mirror was to help inspire users with similar outfits, giving them a variation on their everyday apparel. This project also allows users an ease of getting ready for the day, whether it being meetings, social gatherings or just going for a walk.'],
    imgSrc: SmartMirror,
    link: 'https://www.youtube.com/watch?v=oUI2s6KUGG4&ab_channel=NikhilKharbanda'
  },

  {
    id: 2,
    name: 'RC Cars with proximity sensing ',
    description: ['I had build a RC car using an old Roomba that had proximity sensing capabilities running on a RPi and ultrasonic sensors. The car would autonomously drive down a "road", where another RC car would be coming head on. In this scenario, the car running the RPi would sense the car coming closer, and would swerve to avoid it. Our next goal to take this further was to create an autonomous arm for which the car would automatically drive to an available "parking recharge spot" once a low battery was detected and the arm would recharge the on-board battery.'],
    imgSrc: RC_Car,
    link: 'https://youtu.be/VQaq__QIThw'
  },
]
