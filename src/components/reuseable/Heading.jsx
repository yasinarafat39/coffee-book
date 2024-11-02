 
export default function Heading({title, subTitle}) {
  return (
    <div className="text-center py-20">
        <h2 className="text-xl md:text-2xl lg:text-5xl font-thin mb-8">{title}</h2>
        <p className="text-xs md:text-xl font-thin text-gray-600">{subTitle}</p>
    </div>
  )
}
