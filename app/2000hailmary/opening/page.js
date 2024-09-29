'use client'
import React from 'react'
import Link from 'next/link';

const OpeningPrayers = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-8 space-y-8 text-gray-800">
        <Link href="/2000hailmary/opening/mysteries" className="block w-full h-full text-blue-400">
            MYSTERIES & PRAYERS
             OF THE MOST HOLY ROSARY

          </Link>
      <h1 className="text-2xl font-bold text-center mb-6">OPENING PRAYERS</h1>
      
      <section className="space-y-4">
        <p>Blessed be the Holy Trinity, One God, now and forever. Amen</p>
        <p>Glory be to the Father who created me; Glory be to the Son, who redeemed me; Glory be to the Holy Spirit who sanctifies me.</p>
        <p>We pray and implore the Holy Spirit to come down and bestow upon us His Holy Gifts, so that we will be inflamed with the power and fire of His love.</p>
        <p>And, once again, we gather ourselves together before You, dearest Blessed Mother, to pray for ALL Your intentions. We know that You will bring our humble prayers, together with Yours, before the throne of God and Your Beloved Son, and that, in Your loving hands, You will dispense of them, for You know best to apply them where they are needed most.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">ACT OF CONSECRATION TO THE HOLY SPIRIT</h2>
        <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="spirit" style={{ maxHeight: '4.6em' }}>On my knees before the great multitude of heavenly witnesses, I offer myself, soul and body to You, Eternal Spirit of God. I adore the brightness of Your purity, the unerring keenness of Your justice and the might of Your love. You are the strength and Light of my soul. In You, I live and move and am. I desire never to grieve You by unfaithfulness to grace and, I pray with all my heart to be kept from the smallest sin against You. Mercifully guard my every thought and grant that I may always watch for Your light and listen to Your voice and follow Your gracious inspirations. I cling to You and give myself to You and ask You by Your compassion to watch over me in my weakness. Holding the pierced feet of Jesus and looking at His Five Wounds and trusting in His Precious Blood and adoring His opened Side and stricken Heart, I implore You, Adorable Spirit, Helper of my infirmity, so to keep me in Your grace, that I may never sin against You. Give me grace O Holy Spirit, Spirit of the Father and the Son, to say to You always and everywhere: 'Speak Lord, for Your servant heareth.' Amen
            <span className="hidden">
              
            </span>
          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('spirit');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
        
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">'Through Him, With Him and In Him' - God is my Father</h2>
        <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="him" style={{ maxHeight: '4.6em' }}>My Father in Heaven, how sweet it is to know that You are my Father and that I am Your child! Especially when the skies of my soul are cloudy and my cross weighs more heavily, I feel the need to repeat to You: Father, I believe in Your love for me. Yes, I believe that You are a Father to me at every moment of my life and that I am
Your child!
I believe that You love me with an infinite love!
I believe that You are watching over me night and day, and that not a hair falls
from my head without your permission!
I believe that, in Your infinite Wisdom, You know better than I, what is good for me.
I believe that, in Your infinite power, You can bring good even out of evil.
I believe that, in Your infinite goodness, You make everything to the advantage of
those who love You;
Even under the hands of those who strike me, I kiss Your hand which heals!
I believe.... but increase in me faith, hope and love!
Teach me always to see Your love as my guide in every event of my life. Teach me to surrender myself to You, like a baby in its mother's arms.
Father, You know everything. You see everything. You know me better than I know myself.
You can do everything and You love me!

My Father, since it is Your wish that we should always turn to You, I come with confidence to ask You, together with Jesus and Mary...
(Request the favor you desire).
For this intention and uniting myself to their Most Sacred Hearts, I offer You all my prayers, my sacrifices and mortifications, all my actions and greater faithfulness to my duties. Give me the light, the grace and the power of the Holy Spirit! Strengthen me in this Spirit, that I may never lose Him, never sadden Him and never allow Him to become weaker in me.
My Father, I ask this in the name of Jesus, Your Son. And You, Jesus, please open Your Heart and place in it my own and together with Mary's, offer it to Our Divine Father! Please obtain for me the grace that I need!
Divine Father, call all men to Yourself. Let all the world proclaim Your Fatherly goodness and Your Divine Mercy. Be a tender Father to me and protect me where I am, like the apple of Your eye. Make me always a worthy son/daughter. Have mercy on me!
Divine Father, sweet hope of our souls, may You be known, honored and loved by all men!
Divine Father, infinite goodness poured out on all people, may You be known, honored and loved by all men!
Divine Father, beneficent dew of humanity, may You be known, honored and loved by all men!
(Mother Eugenia)
Partial Indulgence
+GIRARD, Vicar Apostolic of Cairo, October 9 1935
*JEAN, Cardinal VERDIER, Archbishop of Paris, May 8, 1936
Fiat of the Eternal Father
Our beloved Father, Thy will be done on earth as it is in heaven. Be thou our Father. Be always our eternal Father. Do not leave our souls. Do not leave us out of Your sight.. For we are Your children, whom You have created, to please You, to adore You, to honor You, living our days as You have given us the license to live it.Consecration to God, Our Father of All Mankind
For the greater glory of GOD and for the salvation of all, I consecrate myself to You, o Eternal Father, as one of Your faithful remnant. Behold, I come to do Your will. With the help of Your grace, / will keep Your commandments. / will love and reverence You with all my heart, soul, mind and strength. I will love my neighbor as You love me. I make this consecration through the Immaculate Heart of Mary and the Sacred Heart of Your beloved son, Jesus. O Eternal Father, send forth Your Holy Spirit, to restore our broken image and likeness of You. Send forth Your celestial choirs of angels, to aid us in our struggle against all the forces of evil, in this present darkness. Amen.
            
          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('him');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
       
       
      </section>
      <section className="space-y-4">
      <h2 className="text-xl font-semibold">CONSECRATION OF THE HUMAN RACE TO THE SACRED HEART OF JESUS</h2>
      <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="human" style={{ maxHeight: '4.6em' }}>Most Sweet Jesus, Redeemer of the human race, look down upon us, humbly prostrate before Your altar. We are Yours and Yours we wish to be; to be more surely united with You, behold we freely consecrate ourselves today to Your Most Sacred Heart.
        Many indeed have never known You; many, too, despising Your precepts, have rejected You. Have mercy on them all, most merciful Jesus, and draw them to Your Sacred Heart.
        Be king, O Lord, not only of the faithful who have never forsaken You, but also of the prodigal children who have abandoned You. Grant that they may quickly return to their Father's house lest they die of wretchedness and hunger. Be king of those who are deceivec by erroneous opinions, or whom discord keeps aloof, and call them back to the harbor of truth and unity of faith, so that soon there may be but one flock and one Shepherd.
        Grant, O Lord, to Your church, assurance of freedom and immunity from harm; give peace and order to all nations, and make the earth resound from pole to pole with one cry: Praise to the Divine Heart that wrought our salvation; to Him be glory and honor forever. Amen.

          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('human');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
      <div className="space-y-2">
      </div>
      </section>


      <section className="space-y-4">
        <h2 className="text-xl font-semibold">CONSECRATION TO THE IMMACULATE HEART OF MARY</h2>
        <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="immaculate" style={{ maxHeight: '4.6em' }}>Virgin of Fatima, Mother of mercy, Queen of Heaven and Earth, Refuge of Sinners, we who belong to the Marian Movement consecrate ourselves in a special way to Your Immaculate Heart. By this act of consecration, we intend to live, with you and through You, all the obligations assumed by our baptismal consecration. We further pledge to bring about ourselves that interior conversion so urgently demanded by the Gospel, a conversion that will free us of every attachment to ourselves, and to easy compromises with the world so that, like You, we may be available only to do always the will of the Father.
And as we resolve to entrust to You, O Mother most sweet and merciful, our life and vocation as Christians, that You may dispose of it according to the designs of salvation, in this hour of decision that weighs upon the world, we pledge to live it according to Your desires, especially as it pertains to a renewed spirit of prayer and of the apostolate, the daily recitation of the Holy Rosary, and an austere manner of life, in keeping with the Gospel that shall be to all, a good example of the observance of the law of God, and the practice of the Christian virtues, especially that of purity.
We further promise You to be united with the Holy Father, with the hierarchy and with our priests, in order thus to set up a barrier to the growing confrontation directed against the Magisterium, that threatens the very foundation of the Church.
Under Your protection, we want moreover, to be apostles of this sorely needed unity of prayer and love for the Pope, on whom we invoke your special protection. And lastly, insofar as is possible, we promise to lead those souls with whom we come in contact, to a renewed devotion to You. Mindful that atheism has cause shipwreck in the faith to a great number of the faithful, that desecration has entered into the holy temple of God, and that evil and sin are spreading more and more throughout the world, we make so bold as to lift our eyes trustingly to You, O Mother of Jesus, and our merciful and powerful Mother, and we invoke again today and await from You, the salvation of all Your children, O clement, O loving, O sweet Virgin Mary

          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('immaculate');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
      </section>


      <section className="space-y-4">
        <h2 className="text-xl font-semibold">PRAYER TO DEFEAT THE WORK OF SATAN</h2>
        <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="defeat" style={{ maxHeight: '4.6em' }}>O Divine Eternal Father, in union with Your Divine Son and the Holy Spirit, and through the Immaculate Heart of Mary, I beg You to destroy the power of Your greatest enemy - the evil spirits. Cast them into the deepest recesses of hell and chain them forever! Take possession of Your Kingdom, which You have created and which is rightfully Yours.
          Heavenly Father, give us the reign of the Sacred Heart of Jesus and the Immaculate Heart of Mary. I repeat this prayer out of pure love for You with every beat of my heart and every breath I take. Amen.
            <span className="hidden">
              
            </span>
          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('defeat');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
      </section>


      <section className="space-y-4">
        <h2 className="text-xl font-semibold">PRAYER TO ST. MICHAEL, THE ARCHANGEL</h2>
        <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="stMichaelPrayer" style={{ maxHeight: '4.6em' }}>
            St. Michael, the Archangel, defend us in the day of battle; be our safeguard against the wickedness and snares of the devil. May God rebuke him, we humbly pray, and do thou, o Prince of the Heavenly Host, by the power of God, cast into hell, Satan and all the other evil spirits, who prowl through the world, seeking the ruin of souls. Amen. Angel of God, My guardian dear To whom His love commits me here Ever this day be at my side
            To light and guard, to rule and guide. Amen.
            <span className="hidden">
              
            </span>
          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('stMichaelPrayer');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
      </section>


      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">ACT OF CONTRITION</h2>
        <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="contrition" style={{ maxHeight: '4.6em' }}>0 my God, I am heartily sorry for having offended Thee and I detest all my sins because I dread the loss of heaven and the pains of hell; but most of all, because I offend Thee my God, who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to confess my sins, to do penance, and to amend my life. Amen.
            <span className="hidden">
              
            </span>
          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('contrition');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
      </section>


      <section className="space-y-4">
        <h2 className="text-xl font-semibold">PRAYER FOR PRIEST</h2>
        <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="priests" style={{ maxHeight: '4.6em' }}>O Jesus, Divine master, I bless and thank Your most loving heart for the institution of the priesthood. The priests are sent by You, as You were sent by the Father. To them, You have co-signed the treasures of Your Doctrine, of Your law, of Your grace, and souls themselves.
Grant me the grace to love them, to listen to them and to let them guide me in Your ways.
Send good laborers into Your vineyard, O Jesus. May the priests be the salt which purifies and preserves; may they be the light of the world; may they be the city placed on the mountain; may they all be made according to Your Heart; and may they have, one day in heaven, around themselves, as a crown of joy, a multitude of conquered souls.
            <span className="hidden">
              
            </span>
          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('priests');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
        <p></p>
      </section>


      <section className="space-y-4">
        <h2 className="text-xl font-semibold">PRAYER FOR VOCATIONS</h2>
        <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="vocation" style={{ maxHeight: '4.6em' }}>O Lord Jesus Christ, great High Priest, we pray You to Call many worthy souls to Your service as priests, deacons and religious. Enlighten the spiritual directors in molding them and the professors in instructing them. Lead them daily in life in Your footsteps so that they may become priests, deacons and religious who are models of purity, wise and heroes of sacrifice, steeped in humility and aflame with love for God and people, apostles of your glory and sanctifiers of souls. Mary, Queen of the Church, pray for us and obtain for us numerous and holy priests, deacons and religious. Amen.

            <span className="hidden">
              
            </span>
          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('vocation');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
      </section>

      {/* Add more sections for each prayer or group of related prayers */}


      <section className="space-y-4">
        <h2 className="text-xl font-semibold">THE MEMORARE OF ST. BERNARD</h2>
        <div className="relative">
          <p className="overflow-hidden transition-all duration-300" id="benard" style={{ maxHeight: '4.6em' }}>Remember, O most gracious Virgin Mary, that never was it known, that anyone who fled to Your protection, implored Your help or sought Your intercession, was left unaided.  Inspired with this confidence, I fly unto You, O Virgin of Virgins, My Mother! To You I come, before You I stand sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in Your mercy, hear and answer them. AMEN.

            <span className="hidden">
              
            </span>
          </p>
          <button 
            className="mt-2 text-blue-600 hover:text-blue-800"
            onClick={() => {
              const prayer = document.getElementById('benard');
              const isExpanded = prayer.style.maxHeight !== '4.6em';
              prayer.style.maxHeight = isExpanded ? '4.6em' : 'none';
              event.target.textContent = isExpanded ? 'See More' : 'See Less';
            }}
          >
            See More
          </button>
        </div>
      </section>
    </div>
  )
}

export default OpeningPrayers