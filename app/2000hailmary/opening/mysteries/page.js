import React from 'react'

const Mysteries = () => {
  const mysteryGroups = [
    {
      title: "JOYFUL MYSTERIES",
      days: "Every Monday & Saturday",
      mysteries: [
        { name: "THE ANNUNCIATION", decade: "1st Decade", verse: "And when the angel had come to Her, he said: 'Hail, full of grace, the Lord is with Thee. Blessed art Thou among women.'" },
        { name: "THE VISITATION", decade: "2nd Decade", verse: "Elizabeth was filled with the Holy Spirit and cried out in a loud voice: 'Blest are You among women and blest is the fruit of Your womb.'" },
        { name: "THE BIRTH OF JESUS", decade: "3rd Decade", verse: "She gave birth to Her first-born son and wrapped Him in swaddling clothes and laid Him in a manger, because there was no room for them in the place where travelers lodged." },
        { name: "THE PRESENTATION", decade: "4th Decade", verse: "When the day came to purify them according to the law of Moses, the couple brought Him up to Jerusalem so that He could be presented to the Lord, for it is written in the law of the Lord, 'Every first-born male shall be consecrated to the Lord.'" },
        { name: "FINDING THE CHILD JESUS IN THE TEMPLE", decade: "5th Decade", verse: "On the third day they came upon Him in the temple sitting in the midst of the teachers, listening to them and asking them questions." }
      ]
    },
    // ... Add Luminous, Sorrowful, and Glorious Mysteries here
  ];

  return (
    <div className="max-w-md mx-auto px-4 py-8 space-y-8 text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">MYSTERIES & PRAYERS OF THE MOST HOLY ROSARY</h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The Apostles' Creed</h2>
        <p className="text-sm leading-relaxed">
          I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, Our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried...
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Our Father</h2>
        <p className="text-sm leading-relaxed">
          Our Father, Who art in heaven, hallowed be Thy name, Thy kingdom come; Thy will be done on earth, as it is in heaven...
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hail Mary</h2>
        <p className="text-sm leading-relaxed">
          Hail, Mary, full of grace; the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus...
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Glory be to the Father</h2>
        <p className="text-sm leading-relaxed">
          Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.
        </p>
      </section>

      {mysteryGroups.map((group, groupIndex) => (
        <section key={groupIndex} className="space-y-4">
          <h2 className="text-xl font-semibold">{group.title}</h2>
          <p className="text-sm italic">{group.days}</p>
          {group.mysteries.map((mystery, mysteryIndex) => (
            <div key={mysteryIndex} className="bg-gray-100 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold">{mystery.name}</h3>
              <p className="text-sm">{mystery.decade}: {mystery.verse}</p>
              <p className="text-sm">
                <strong>COVID-19 Prayer:</strong> We pray for the protection of the first responders, doctors, and nurses who care for those made critically ill by coronavirus...
              </p>
            </div>
          ))}
        </section>
      ))}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Hail, Holy Queen</h2>
        <p className="text-sm leading-relaxed">
          Hail Holy Queen, Mother of mercy. Hail our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve...
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Pope Francis' Prayer to Our Lady to End the Pandemic</h2>
        <p className="text-sm leading-relaxed">
          Mary, you always shine on our path as a sign of salvation and of hope. We entrust ourselves to you, Health of the Sick, who at the cross, took part in Jesus' pain, keeping your faith firm...
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">A Prayer Amid an Epidemic</h2>
        <p className="text-sm leading-relaxed">
          Jesus Christ, You traveled through towns and villages 'curing every disease and 'Illness.' At Your command, the sick were made well...
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Opening Song: COME, HOLY GHOST</h2>
        <p className="text-sm leading-relaxed">
          Come. Holy Ghost, Creator blest, And in our hearts, take up Thy rest...
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Prayer To Take Authority</h2>
        <p className="text-sm leading-relaxed">
          In the name of Jesus, I take authority and I bind all powers and forces of evil in the air, in the ground, in the water, in the underground, in the netherworld, in nature and in fire...
        </p>
      </section>
    </div>
  )
}

export default Mysteries