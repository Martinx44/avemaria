'use client'
import Image from "next/image";
import backgroundImage from "@/assets/maria.png";
import React, { useState, useEffect } from 'react'

const HymnPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 1.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }





  const hymns = [
    {
      title: "MOTHER DEAREST, MOTHER FAIREST",
      lyrics: "Mother dearest, Mother fairest, Help of all who call on thee, Virgin purest, brightest, rarest, Help us, Help, we cry to thee. Mary, help us, help, we pray, Mary, help us, help, we pray, Help us in all cares and sorrows, Mary, help us, help, we pray."
    },
    {
      title: "OUR LADY OF FATIMA",
      lyrics: "Our Lady of Fatima, We come on bended knees, To beg Your intercession, For peace and unity, Dear Lady, won't You show us, The right and shining way, We pledge our love and offer You Our rosary each day. You promised at Fatima, Each time that you appeared, To help us, if we pray to You, To banish war and fear. Dear Lady, on first Saturdays, We ask Your guiding hand, For grace and guidance here on earth, And protection for our land,"
    },
    {
      title: "IMMACULATE MOTHER",
      lyrics: "Immaculate Mother, We come at Thy call. And low at Thy altar, Before Thee we fall.Ave, Ave, Ave Maria.Ave, Ave, Ave Maria.In grief and temptation, In joy and in pain. We'll seek Thee, our Mother, Nor seek Thee, in vain. Ave, Ave, Ave Maria Ave, Ave, Ave Maria."
    },
    {
      title: "ON THIS DAY, O BEAUTIFUL MOTHER Refrain",
      lyrics: "On this day, O beautiful Mother, On this day, we give Thee our love, Near Thee Madonna, fondly we hover, Trusting Thy gentle care to prove.On this day, we ask to share, Dearest Mother Thy sweet care, Aid us 'ere our feet astray, Wander from Thy guiding way. Refrain Queen of angels, deign to hear, Lisping children's humble prayer, Young hearts gain, O Virgin pure, Sweetly to Thyself, allure. Refrain"
    },
    {
      title:"HAIL, HOLY QUEEN",
      lyrics:"Hail, Holy Queen enthroned above, O Maria! Hail, Mother of mercy and of love, O Maria! Triumph all ye cherubim! Sing with us ye seraphim! Heaven and earth resound the hymn! Salve, salve, salve, Regina! Our life, our sweetness here below, O Maria! Our hope in sorrow and in woe, O Maria! Triumph all ye cherubim! Sing with us ye seraphim! Heaven and earth resound the hymn! Salve, salve, salve, Regina! Turn, then, most gracious Advocate, O Maria! Towards us thine eyes compassionate, O Maria! Triumph all ye cherubim! Sing with us ye seraphim! Heaven and earth resound the hymn! Salve, salve, salve, Regina! O Maria"
    },
    {
      title:"ALL THAT I AM",
      lyrics:"All that I am, all that I do All that I'll ever have, I offer now to You All that I dream, all that I pray All that I'll ever make, I give to You today. Take and sanctify these gifts for Your honor, Lord. Knowing that I love and serve You is enough reward. All that I am, all that I do. All that I'll ever have, I offer now to You, Take and sanctify these gifts for Your honor, Lord. KnowinALL THAT I AM g that I love and serve You is enough reward. All that I dream, all that I pray. All that I'll ever make, I give to You today"
    },
    {
      title:"HAIL MARY, GENTLE WOMAN",
      lyrics:"Hail Mary, full of grace, the Lord is with You. Blessed are You among women, And blessed is the fruit of Your womb, Jesus. p Holy Mary, Mother of God, pray for us sinners Now and at the hour of our death. Amen. Refrain: Gentle woman, quiet light Morning star, so strong and bright, Gentle Mother, peaceful dove Teach us wisdom, teach us love. You were chosen by the Father, You were chosen for the Son, You were chosen from all women, And for woman, shining one. Refrain Blessed are You among women Blest in turn, all women, too, Blessed they, with peaceful spirits, Blessed they, with gentle hearts. Refrain."
    },
    {
      title:"O LORD, I AM NOT WORTHY O Lord, I am not worthy",
      lyrics:"That Thou shouldst come to me. But speak the words of comfort, My spirit healed shall be. And humbly I'll receive Thee The bridegroom of my soul, No more by sin to grieve Thee, Or fly Thy sweet control. O sacrament most holy, O sacrament divine, All praise and all thanksgiving, Be every moment Thine"
    },
    {
      title:"MOTHER OF CHRIST",
      lyrics:"Mother of Christ, Mother of Christ. What shall I ask of Thee? I do not sigh for the wealth of earth. For the joys that fade and flee, But, Mother of Christ, Mother of Christ. This do I long to see. The bliss untold, which Thine arms enfold, The treasure upon Thy knee. Mother of Christ, Mother of Christ. He was all in all to Thee. In Bethlehem's cave, in Nazareth's home, In the hamlets of Galilee. So, Mother of Christ, Mother of Christ. He will not say nay to Thee. When He lifts His face, to Thy sweet embrace, Speak to Him, Mother of me. Mother of Christ, Mother of Christ. I toss on a stormy sea. Oh, lift Thy Child as a beacon light, To the port where I feign would be. And, Mother of Christ, Mother of Christ, This do I ask of Thee, When the voyage is o'er, oh I stand on the shore, And show Him at last to me."
    },
    {
      title:"IMMACULATE MARY",
      lyrics:"Immaculate Mary, Your praises we sing. You reign now in splendor, With Jesus, our King. Ave, Ave, Ave Maria! (2x) In heaven the Blessed, Your glory proclaim. On earth we your children, Invoke your sweet name. Ave, Ave, Ave Maria! (2x) We ask You to pray, For our children on earth. And bless and watch over, The land of our birth. Ave, Ave, Ave Maria! (2x)"
    },
    {
      title:"AMAZING GRACE",
      lyrics:"Amazing grace, how sweet the sound, That saved a wretch like me. vIonce was lost, but now l'm found, Was blind, but now I see. v'twas Grace that taught, my heart to fear. vAnd grace, my fears relieved. vHow precious did that grace appear, the hour I first believed. vThrough many dangers, toils and snares, thave already come, v'Tis grace hath brought me safe thus far vAnd grace will lead me home. vWhen we've been there, ten thousand years, vBright shining as the sun, vWe've no less days to sing God's praise vThan when we first begun."
    },
    {
      title:"MOTHER DEAR, O PRAY FOR ME",
      lyrics:"Mother dear, O pray for me, Whilst far from heaven and Thee, I wander in a fragile bark, O'er life's tempestuous sea. O Virgin Mother, from Thy throne, So bright in bliss above, Protect your child and cheer my path, With Thy sweet smile of love. Mother dear, O pray for me, And never cease Thy care. 'Till in heaven eternally, Your love and bliss I share"
    },
    {
      title:"SING OF MARY, PURE & HOLY",
      lyrics:"Sing of Mary, pure and lowly, Virgin mother undefiled, Sing of God's own Son most holy, Who became her little child. Fairest child of fairest mother, God the Lord who came to earth, Word made flesh, our very brother, Takes our nature by his birth. Sing of Jesus, son of Mary, In the home at Nazareth. Toil and labour cannot weary Love enduring unto death. Constant was the love he gave her, Though he went forth from her side, Forth to preach, and heal, and suffer, Till on Calvary he died. Glory be to God the Father; Glory be to God the Son; Glory be to God the Spirit; Glory to the Three in One. From the heart of blessed Mary, From all saints the song ascends, And the Church the strain reechoes Unto earth's remotest ends"
    },
    {
      title:"DAILY DAILY SING TO MARY",
      lyrics:"Daily, daily sing to Mary, sing my song Her praises due; All Her glorious actions cherish, with the hearts devotion true. Lost in wondering contemplation, be Her majesty confessed; Call Her Mother, call Her Virgin, happy Mother, Virgin Blessed. She is mighty to deliver, call Her, trust her lovingly; When the tempest rages 'round you, She wil calm the troubled sea. Gifts of heaven, She has given, noble Lady to our race; She, the Queen who decks her subjects, with > the light of God's own grace. Araw-araw kay Maria, kami ay nagdarasal Si Maria aming reyna, ibig naming marangal. Kanyang tulong laging-lagi, kamkay humihingi; Pupurihin namin Siya, tuwing araw at gabi. Kung kami'y nasa panganib, kay maria tatakbo; Tatawagin namin Siya, kung lalapit ang tukso. Oh Maria lyong tulungan, kaming nangabubuhay; Kami ay ipanalangin, kung kami'y mamamatay. "
    },
    {
      title:"COME HOLY SPIRIT",
      lyrics:"Come, Holy Spirit I need You. Come, Holy Spirit I pray. Come, with Your strength and Your power. Come, in Your own special way. Come, like a spring in the desert. Come, to the weary of souls. Oh! Let Your sweet healing power, Touch me and make me whole. Come, Holy Spirit we need You. Come, Sweet Spirit we pray. Come, with Your light and Your guidance. Come, in Your own gentle way. Alleluia, Alleluia..... Jesus is passing, is passing this way. Alleluia, Alleluia..... Jesus is passing this way."
    },
    {
      title:"HEART OF JESUS, Refrain",
      lyrics:"Heart of Jesus, meek and mild. Hear, oh hear, Thy feeble child. When the tempest, most severe, Oh Heart of Jesus, hear. Sweetly, we'll rest on Thy Sacred Heart. Never from Thee, oh let us part. Hear then, Thy loving children's prayer"
    },
    {
      title:"O SACRED HEART, O LOVE DIVINE",
      lyrics:"• Sacred Heart, O love divine, Do keep us near to Thee. And make our hearts, so like to Thine, That we may holy be. Refrain: Heart of Jesus hear, • heart of love divine Listen to our prayer Make us always Thine. • temple pure! O house of gold! Our heaven here below! What sweet delight, what wealth untold, From Thee do ever flow. Refrain Ungrateful hearts, forgetful hearts, The hearts of men have been. To wound Thy side, with cruel darts, Which they have made by sin. Refrain !LOVE YOU, LORD I love You, Lord and I lift my voice To worship You Oh, my soul rejoice! Take joy, my King, in what You hear Let it be a sweet, sweet sound in Your ear"
    },
    {
      title:"SURELY THE PRESENCE OF THE LORD IS IN THIS PLACE",
      lyrics:"Surely the presence of the Lord is in this place, I can feel His mighty power and His grace I can hear the brush of angels wings I see glory on each face Surely the presence of the Lord is in this place"
    },
    {
      title:"COME, HOLY GHOST",
      lyrics:"Come, Holy Ghost, Creator blest, And in our hearts, take up Thy rest; Come with Thy grace and heav'nly aid, To fill the hearts which Thou has made, To fill the hearts which Thou has made. O Comfort Blest to Thee we cry, Thou heavn'ly Gift of God Most High, Thou fount of life and fire of love, And sweet anointing from above, And sweet anointing from above. Praise be to Thee, Father and Son. And Holy Spirit Three in One, And may the Son on us bestow, The gifts that from the Spirit flow, The gifts that from the Spirit flow."
    },
    {
      title:"HOLY, HOLY, HOLY, LORD GOD ALMIGHTY",
      lyrics:"Holy, holy, holy! Lord God Almighty! Early in the morning our song shall rise to Thee; Holy, holy, holy, merciful and mighty! Go  in three Persons, blessed Trinity! Holy, holy, holy! All the saints adore Thee, Casting down their golden crowns around the glassy sea; Cherubim and seraphim falling down before Thee, Who was, and is, and evermore shall be. Holy, holy, holy! though the darkness hide Thee, Though the eye of sinful man Thy glory may not see; Only Thou art holy; there is none beside Thee, Perfect in power, in love, and purity. Holy, holy, holy! Lord God Almighty! All Thy works shall praise Thy Name, in ear and sky, and sea; Holy, holy, holy; merciful and mighty! God in three Persons, blessed Trinity!"
    },
    // ... Add more hymns here
  ]

  return (
    <div className=''>
      <div className="absolute inset-0 z-[-2]">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h1 className='text-center text-2xl font-bold font-serif my-4'>Hymns</h1>
      <div className='grid grid-cols-2 bg-slate-100/75 shadow-md p-4 gap-4 text-center text-[#858585]'>
        {hymns.map((hymn, index) => (
          <div key={index} className='bg-white/90 shadow-md p-3 rounded-md'>
            <h2 className='font-bold pb-2'>{hymn.title}</h2>
            <p className=''>{hymn.lyrics}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-end my-4'>
        {showBackToTop && (
          <button className="bg-blue-400 p-2 ring-white ring-[1px] rounded md " onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        )}
      </div>
      
    </div>
  )
}

export default HymnPage