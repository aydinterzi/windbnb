import PropertyCard from '@/components/property-card'
import stays from '@/data/stays.json'
export default function Home() {
  console.log(stays)
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Stays in Finland</p>
        <p className="text-base">12+ stays</p>
      </div>
      <div className="flex flex-wrap gap-8">
        {stays.map((stay) => (
          <PropertyCard country={stay.country} imgSrc={stay.photo} rating={stay.rating} type={stay.type} superHost={stay.superHost} beds={stay.beds} title={stay.title} key={stay.title} />
        ))}
      </div>
    </div>
  )
}
