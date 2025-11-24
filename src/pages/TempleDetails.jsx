import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaOm, 
  FaCalendar, 
  FaMapMarkerAlt, 
  FaMountain, 
  FaEye, 
  FaHeart, 
  FaBookmark, 
  FaCamera, 
  FaStar,
  FaUmbrellaBeach,
  FaHotel,
  FaScroll,
  FaPrayingHands
} from 'react-icons/fa';

const TempleDetails = () => {
  const { id } = useParams();

  // Complete temple data - in real app, fetch from API
  const templesData = [
    {
      id: 1,
      name: 'Tirupati Balaji',
      location: 'Andhra Pradesh',
      deity: 'Lord Venkateswara',
      image: 'https://media.istockphoto.com/id/1007659382/photo/the-tirupati-temple.jpg?s=612x612&w=0&k=20&c=wO069kCa1jUie6a-yBEJGErQ65L_RIwuEuwMEHosZxs=',
      history: 'The Tirumala Venkateswara Temple is a landmark Vaishnavite temple situated in the hill town of Tirumala at Tirupati in the Tirupati district of Andhra Pradesh, India. The temple is built on Venkata Hill, one of the seven peaks of the Tirumala Hills.',
      rituals: [
        'Suprabhatam - Early morning awakening',
        'Tomala Seva - Garland offering',
        'Archana - Special prayers',
        'Abhishekam - Sacred bath',
        'Aarti - Evening prayers'
      ],
      significance: 'One of the richest and most visited temples in the world, attracting millions of devotees annually.',
      bestTime: 'September to March',
      gallery: [
        'https://behindeverytemple.org/wp-content/uploads/2020/11/96723054_549291549094354_3335608607235375104_n.jpg',
        'https://i0.wp.com/www.rvatemples.com/wp-content/uploads/2018/03/Tirumala-Tirupati-Balaji-Temple-night-and-lights.jpg?fit=964%2C528&ssl=1',
        'https://i0.wp.com/www.rvatemples.com/wp-content/uploads/2018/03/tiru_0.jpg?fit=620%2C376&ssl=1',
        'https://i0.wp.com/www.rvatemples.com/wp-content/uploads/2018/03/tirupati-tirumala-purattasi-masam.jpg?fit=1040%2C689&ssl=1',
        'https://i0.wp.com/www.rvatemples.com/wp-content/uploads/2018/03/58925803.jpg?fit=400%2C300&ssl=1',
        'https://curlytales.com/wp-content/uploads/2024/08/Tokenless-Devotees-Can-Register-Aadhaar-Cards-And-Get-2-Laddu-Prasadams-At-Special-Counters-Tirumala-Tirupati-Devasthanams-800x450.jpg'
      ]
    },
    {
      id: 2,
      name: 'Kashi Vishwanath',
      location: 'Varanasi, Uttar Pradesh',
      deity: 'Lord Shiva',
      image: 'https://d26dp53kz39178.cloudfront.net/media/uploads/Travel_Guide_Images/Kashi_Vishwanath_Temple_1-1750491872856.webp',
      history: 'The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Vishwanath Gali, near Varanasi, the oldest living city in the world. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples.',
      rituals: [
        'Mangala Aarti - Early morning prayers at 3:30 AM',
        'Bhog Aarti - Midday offering at 11:15 AM',
        'Sapta Rishi Aarti - Evening prayers at 7:00 PM',
        'Shringar Aarti - Night prayers at 9:00 PM',
        'Shayana Aarti - Night rest prayers at 10:30 PM'
      ],
      significance: 'One of the twelve Jyotirlingas, the holiest Shiva temples. Located on the banks of the Ganges, it is one of the most sacred pilgrimage sites.',
      bestTime: 'October to March',
      gallery: [
        'https://5.imimg.com/data5/SELLER/Default/2023/1/MS/IM/FQ/4799208/shri-kashi-vishwanath-prasadam-kit-in-wooden-box-with-angwastram-1000x1000.jpg',
        'https://ayodhyavaranasitourism.com/wp-content/uploads/elementor/thumbs/Kashi-Vishwanath-Temple-Sugam-Darshan-r46s4eiuhjmvit3ksegdzzq2smwo69f78zg62rgv48.webp',
        'https://dnu1blog.com/wp-content/uploads/2022/04/kv-shivalingam.jpeg',
        'https://c.ndtvimg.com/2024-10/do6o0v6g_kashi-vishwanath-temple-_625x300_18_October_24.jpg?im=FeatureCrop,algorithm=dnn,width=773,height=435',
        'https://www.jagranimages.com/images/newimg/14102024/14_10_2024-kashi_vishwanath_dham_3_23815278.webp',
        'https://sanatansiddhi.com/wp-content/uploads/2024/09/Screenshot-2024-11-12-132647.png'
      ]
    },
    {
      id: 3,
      name: 'Meenakshi Amman',
      location: 'Madurai, Tamil Nadu',
      deity: 'Goddess Meenakshi',
      image: 'https://www.billiontrips.com/sites/default/files/2019-07/meenakshi-temple-banner.jpg',
      history: 'The Meenakshi Amman Temple is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareshwarar, a form of Shiva. The temple was originally built by the Pandyan dynasty in the 6th century CE.',
      rituals: [
        'Thiruvanandal Pooja - Early morning worship',
        'Palliarai Pooja - Bedroom worship',
        'Thiruvanandal Pooja - Midday worship',
        'Sandhi Pooja - Evening worship',
        'Arthajama Pooja - Night worship'
      ],
      significance: 'Ancient temple dedicated to Goddess Meenakshi and Lord Sundareswarar. Known for its magnificent architecture and spiritual significance.',
      bestTime: 'October to March',
      gallery: [
        'https://vismaifood.com/storage/app/uploads/public/648/305/f9e/thumb__700_0_0_0_auto.jpg',
        'https://avathioutdoors.gumlet.io/travelGuide/dev/madurai90129.jpg',
        'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Meenakshi-Amman-Temple.jpg:cf-webp:w-848:h-551',
        'https://avathioutdoors.gumlet.io/travelGuide/dev/madurai62544.jpg',
        'https://avathioutdoors.gumlet.io/travelGuide/dev/madurai42842.jpg',
        'https://avathioutdoors.gumlet.io/travelGuide/dev/madurai24811.jpg'
      ]
    },
    {
      id: 4,
      name: 'Jagannath Puri',
      location: 'Puri, Odisha',
      deity: 'Lord Jagannath',
      image: 'https://www.templedairy.in/wp-content/uploads/2020/11/Jagannath-Temple-banner.png',
      history: 'The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu, in Puri in the state of Odisha on the eastern coast of India. The present temple was rebuilt from the 10th century onwards, on the site of an earlier temple, and begun by Anantavarman Chodaganga Deva, the first king of the Eastern Ganga dynasty.',
      rituals: [
        'Mangala Alati - Early morning prayers',
        'Mailam - Morning rituals',
        'Sahanamela - Public darshan',
        'Madhyanha Dhupa - Midday offering',
        'Sandhya Alati - Evening prayers'
      ],
      significance: 'One of the Char Dham pilgrimage sites. Famous for the annual Rath Yatra festival attracting millions of devotees.',
      bestTime: 'October to February',
      gallery: [
        'https://upload.wikimedia.org/wikipedia/commons/0/0c/PURI_JAGANATHA_TEMPLE%2C_PURI%2C_ORISSA%2C_INDIA%2C_ASIA.jpg',
        'https://media.assettype.com/outlooktraveller%2F2024-06%2F3bda1730-ebd9-4bdb-9337-c04325b0528f%2F355511240_651216697042716_4316121301872961380_n.jpg?w=768&auto=format%2Ccompress&fit=max',
        'https://media.assettype.com/outlooktraveller%2F2024-06%2Fde828084-2115-40b6-b425-0de2cd655f99%2FJagannathMahesh--dept%20of%20tourism%20wb-facebook.jpg?w=768&auto=format%2Ccompress',
        'https://odisha.plus/wp-content/uploads/2024/10/OP-Wordpress-Thumbnail-21-1024x768.jpg',
        'https://admin.stayatpurijagannatha.in/images/frontend/main-slider-1_1670308972.jpg',
        'https://admin.stayatpurijagannatha.in/images/frontend/main-slider-2_1670308972.jpg'
      ]
    },
    {
      id: 5,
      name: 'Somnath Temple',
      location: 'Gujarat',
      deity: 'Lord Shiva',
      image: 'https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/somnath-temple/somnath-temple-banner.jpg',
      history: 'The Somnath temple, also called Somanātha temple or Deo Patan, is located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites for Hindus and is believed to be first among the twelve Jyotirlinga shrines of Shiva.',
      rituals: [
        'Mangala Aarti - Early morning prayers',
        'Shringar Darshan - Morning darshan',
        'Sandhya Aarti - Evening prayers',
        'Shayana Aarti - Night prayers',
        'Special Abhishekam - Sacred bath rituals'
      ],
      significance: 'First among the twelve Jyotirlingas. Located on the western coast, it holds immense historical and spiritual importance.',
      bestTime: 'October to March',
      gallery: [
        'https://static.toiimg.com/thumb/msid-81157663,imgsize-44323,width-400,height-225,resizemode-72/81157663.jpg',
        'https://c9admin.cottage9.com/uploads/5838/somnath-jyotirlinga-temple.jpg',
        'https://pravase.co.in/admin_pravase/uploads/yatradham/Sonath%20Temple_1558702865.JPG',
        'https://images.tv9gujarati.com/wp-content/uploads/2022/06/Somnath-Mahadev-Kesar-Mango-Prasad.jpg?w=400',
        'https://c9admin.cottage9.com/uploads/5840/somaskanda-murti.jpg',
        'https://thecommunemag.com/wp-content/uploads/2022/06/somnath-temple-768x432.jpg'
      ]
    },
    {
      id: 6,
      name: 'Vaishno Devi',
      location: 'Jammu & Kashmir',
      deity: 'Goddess Vaishno Devi',
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/Grand_Decorations_during_Navra_0_1200x768.jpeg?size=690:388',
      history: 'Vaishno Devi, also known as Mata Rani, Trikuta, Ambe and Vaishnavi, is a manifestation of the Hindu Mother Goddess, Devi. The words "Maa" and "Mata" are commonly used in India for mother, and thus are often heavily used in connection with Vaishno Devi.',
      rituals: [
        'Morning Aarti - Early morning prayers',
        'Prasad Distribution - Sacred offerings',
        'Evening Aarti - Evening prayers',
        'Special Pooja - Devotional services',
        'Bhajan and Kirtan - Devotional songs'
      ],
      significance: 'Sacred cave shrine of the Mother Goddess located in the Trikuta Mountains. One of the most visited pilgrimage sites in India.',
      bestTime: 'March to October',
      gallery: [
        'https://www.shutterstock.com/shutterstock/photos/2347965415/display_1500/stock-photo-october-at-vaishno-devi-jammu-india-crowd-of-devotees-at-ardhkuwari-2347965415.jpg',
        'https://images.unsplash.com/photo-1719377678428-d9bcec6976f3?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202110/Grand_Decorations_during_Navra_1-1200x798.jpeg?DMMJPnVdWiXh5m1rpSfGSRGU1bw.X2Yd?size=750:*',
        'https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202110/Grand_Decorations_during_Navra-1200x694.jpeg?GLFwopPBJaBfxrN9a4R2DVwn2SGvyX4i?size=750:*',
        'https://wallpapers.com/images/high/vaishno-devi-over-the-shrine-siwnz9qnilp3hwg4.webp',
        'https://images.unsplash.com/photo-1664362657309-7dd53ca62b7e?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ]
    },
    {
      id: 7,
      name: 'Rameshwaram',
      location: 'Tamil Nadu',
      deity: 'Lord Shiva',
      image: 'https://rameshwaramtourism.co.in/images/headers/sri-ramanathaswamy-temple-rameshwaram-tourism-header.jpg',
      history: 'Ramanathaswamy Temple is a Hindu temple dedicated to the god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is also one of the twelve Jyotirlinga temples. It is one of the 275 Paadal Petra Sthalams, where the three of the most revered Nayanars, Appar, Sundarar and Tirugnana Sambandar, have glorified the temple with their songs.',
      rituals: [
        'Palliarai Pooja - Early morning worship',
        'Spadigalinga Pooja - Special Shiva worship',
        'Uchikala Pooja - Midday worship',
        'Sayaratchai Pooja - Evening worship',
        'Arthajama Pooja - Night worship'
      ],
      significance: 'One of the twelve Jyotirlingas and one of the Char Dham. Famous for its sacred water tanks and architectural beauty.',
      bestTime: 'October to April',
      gallery: [
        'https://www.avis.co.in/blog/wp-content/uploads/2024/03/image1-6-746x475.jpg',
        'https://scontent.fhyd10-1.fna.fbcdn.net/v/t1.6435-9/133833111_706982056658635_8860902396547677819_n.jpg?stp=dst-jpg_s565x565_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OPW4Jd3J2r8Q7kNvwFvyVTs&_nc_oc=AdkJMT3tzza48Bf8i47zrq8oot690CQBhfyBs3JGeAHm-LNDP4SFycgvFhR5BgG06Ys&_nc_zt=23&_nc_ht=scontent.fhyd10-1.fna&_nc_gid=RSe9zQa1KcvZMmtYoVpZaA&oh=00_Afhs-tBXhbsRRTnBKSgySg9pHJ2sgOUIj3cT-7-OTd8xog&oe=694B6E12',
        'https://www.chardham-pilgrimage-tour.com/assets/images/rameshwaram-chardham-01.webp',
        'https://sanatansiddhi.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-05-22-at-13.09.41.jpeg',
        'https://www.chardham-pilgrimage-tour.com/assets/images/rameshwaram-chardham-temple-03.webp',
        'https://www.chardham-pilgrimage-tour.com/assets/images/rameshwaram-island-06.webp'
      ]
    },
    {
      id: 8,
      name: 'Kedarnath',
      location: 'Uttarakhand',
      deity: 'Lord Shiva',
      image: 'https://thekailashresidency.com/images/kedarnath-temple-banner.jpg',
      history: 'Kedarnath Temple is a Hindu temple dedicated to Lord Shiva. Located on the Garhwal Himalayan range near the Mandakini river, Kedarnath is the most remote of the four Chota Char Dham pilgrimage sites. The temple is not directly accessible by road and has to be reached by a 22 kilometres uphill trek from Gaurikund.',
      rituals: [
        'Maha Abhishekam - Sacred bath ritual',
        'Shringar Darshan - Morning darshan',
        'Sandhya Aarti - Evening prayers',
        'Shayana Aarti - Night prayers',
        'Special Pooja - Devotional services'
      ],
      significance: 'One of the twelve Jyotirlingas located in the Himalayas. Part of the Char Dham Yatra, accessible through a challenging trek.',
      bestTime: 'May to October',
      gallery: [
        'https://www.yatrabyhelicopter.in/blog/wp-content/uploads/2024/05/Kedarnath-Temple.jpg',
        'https://www.yatrabyhelicopter.in/blog/wp-content/uploads/2024/05/Bhairav-Temple-Kedarnath-730x450.jpg',
        'https://www.yatrabyhelicopter.in/blog/wp-content/uploads/2024/05/Triyuginarayan-Temple-768x478.jpg',
        'https://cdn.shopify.com/s/files/1/0276/3951/files/shri_kedarnath_prasad_complete_photo_480x480.jpg?v=1595000001',
        'https://www.yatrabyhelicopter.in/blog/wp-content/uploads/2024/05/Kalimath-Temple-768x512.jpg',
        'https://thekailashresidency.com/images/kedarnath-temple-2.jpg'
      ]
    },
    {
      id: 9,
      name: 'Srisailam',
      location: 'Andhra Pradesh',
      deity: 'Lord Shiva',
      image: 'https://www.srisailadevasthanam.org/static/media/sd-banner-3.2d2249a6.jpg',
      history: 'Srisailam is a census town in Nandyal district of the Indian state of Andhra Pradesh. It is the mandal headquarters of Srisailam mandal in Atmakur revenue division. It is located about 160 km from Kurnool and about 212 km from Hyderabad. The town is famous for the Mallikarjuna Jyotirlinga Temple and is one of the greatest Shaivite shrines in India.',
      rituals: [
        'Suprabhatam - Early morning awakening',
        'Abhishekam - Sacred bath',
        'Archana - Special prayers',
        'Aarti - Evening prayers',
        'Prasad Distribution - Sacred offerings'
      ],
      significance: 'One of the twelve Jyotirlingas and also a Shakti Peetha. Located in the Nallamala Hills, it is a significant pilgrimage destination.',
      bestTime: 'October to March',
      gallery: [
        'https://www.srisailadevasthanam.org/static/media/SD-gallery-02.1bf90b63.png',
        'https://www.srisailadevasthanam.org/static/media/SD-gallery-01.99bade47.png',
        'https://www.srisailadevasthanam.org/static/media/SD-gallery-04.63cfb6ad.png',
        'https://www.srisailadevasthanam.org/static/media/SD-gallery-08.6ca65e76.png',
        'https://www.srisailadevasthanam.org/static/media/SD-gallery-07.e7a6d323.png',
        'https://www.srisailadevasthanam.org/static/media/SD-gallery-03.478a0f1b.png'
      ]
    }
  ];

  // Find the temple by ID
  const templeId = parseInt(id);
  const temple = templesData.find(t => t.id === templeId) || templesData[0];

  // If temple not found, show error message
  if (!templesData.find(t => t.id === templeId)) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/temples"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Temples
          </Link>
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Temple Not Found</h2>
            <p className="text-gray-600 mb-6">The temple you are looking for does not exist.</p>
            <Link
              to="/temples"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Browse All Temples
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/temples"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Temples
        </Link>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-xl"
        >
          <img
            src={temple.image}
            alt={temple.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
              {temple.name}
            </h1>
            <p className="text-lg md:text-xl">{temple.location}</p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-5 rounded-xl shadow-lg text-center border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <FaOm className="text-3xl text-blue-600" />
              </div>
              <div className="text-sm text-gray-500 mb-1 font-medium">Deity</div>
              <div className="font-bold text-gray-800 text-lg">{temple.deity}</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg text-center border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-xl">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <FaCalendar className="text-3xl text-orange-600" />
              </div>
              <div className="text-sm text-gray-500 mb-1 font-medium">Best Time</div>
              <div className="font-bold text-gray-800 text-lg">{temple.bestTime}</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg text-center border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl">
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <FaMapMarkerAlt className="text-3xl text-green-600" />
              </div>
              <div className="text-sm text-gray-500 mb-1 font-medium">Location</div>
              <div className="font-bold text-gray-800 text-lg">{temple.location}</div>
            </div>
          </div>

          {/* History */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8 border-2 border-blue-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600"></div>
            <div className="pl-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mr-3">
                  <FaScroll className="text-xl" />
                </span>
                History & Significance
              </h2>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed font-medium">{temple.history}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-gray-700 leading-relaxed font-medium">{temple.significance}</p>
              </div>
            </div>
          </motion.section>

          {/* Rituals */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8 border-2 border-orange-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"></div>
            <div className="pl-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg mr-3">
                  <FaPrayingHands className="text-xl" />
                </span>
                Daily Rituals
              </h2>
              <ul className="space-y-3">
                {temple.rituals.map((ritual, index) => (
                  <li key={index} className="flex items-start bg-gradient-to-r from-orange-50 to-yellow-50 p-3 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all">
                    <span className="text-orange-600 mr-3 mt-1 font-bold text-xl">•</span>
                    <span className="text-gray-700 font-medium flex-1">{ritual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Attractions & Features Cards */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-6 text-center">
              Attractions & Features
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Scenic Views Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaEye className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Scenic Views</h3>
                <p className="text-xs md:text-sm text-blue-100 mt-1">Panoramic</p>
              </motion.div>

              {/* Spiritual Vibes Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaOm className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Spiritual Vibes</h3>
                <p className="text-xs md:text-sm text-yellow-100 mt-1">Divine Energy</p>
              </motion.div>

              {/* Save Journey Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaBookmark className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Save Journey</h3>
                <p className="text-xs md:text-sm text-orange-100 mt-1">Bookmark</p>
              </motion.div>

              {/* Attractions Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaStar className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Attractions</h3>
                <p className="text-xs md:text-sm text-purple-100 mt-1">Must See</p>
              </motion.div>

              {/* Photo Gallery Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaCamera className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Gallery</h3>
                <p className="text-xs md:text-sm text-gray-100 mt-1">Photos</p>
              </motion.div>

              {/* Nearby Places Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl p-4 text-center text-white shadow-lg cursor-pointer"
              >
                <FaMapMarkerAlt className="text-3xl md:text-4xl mb-2 mx-auto" />
                <h3 className="font-semibold text-sm md:text-base">Nearby</h3>
                <p className="text-xs md:text-sm text-cyan-100 mt-1">Places</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Additional Features Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Best Experiences Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 rounded-xl p-6 text-white shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <FaStar className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Best Experiences</h3>
                    <p className="text-yellow-100 text-sm">Top-rated activities</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Morning Darshan Experience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Special Pooja Services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Guided Temple Tour</span>
                  </li>
                </ul>
              </motion.div>

              {/* Accommodation & Services Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 rounded-xl p-6 text-white shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <FaHotel className="text-4xl mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Accommodation</h3>
                    <p className="text-blue-100 text-sm">Nearby stays</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Devotional Theme Rooms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Pilgrimage Packages</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>24/7 Support</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8 border-2 border-purple-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-600"></div>
            <div className="pl-4">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg mr-3">
                  <FaCamera className="text-xl" />
                </span>
                Photo Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {temple.gallery.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={img}
                      alt={`${temple.name} ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 rounded-xl shadow-xl text-white"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Experience This Sacred Journey
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Join our curated pilgrimage tour to {temple.name}
            </p>
            <Link
              to="/book"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
            >
              Book Your Pilgrimage
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TempleDetails;