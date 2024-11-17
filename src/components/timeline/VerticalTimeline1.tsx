interface TimelineItemProps {
  date: string
  label: string
  title: string
  subtitle: string
  content: string[]
  image?: string
}

export default function VerticalTimeline01({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className={`-my-6`}>

      {items.map((item, index) => (
        <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
          {/* Purple label */}
         
          {/* Time + Title + Img */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <img 
                src={item?.image ?? ''}
                className="sm:absolute left-0 translate-y-0.5 bg-slate-800 w-[60px] h-[60px] rounded-full p-0.5 aspect-square object-cover">
            </img>
            <div className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</div>
            <time className="items-center ml-auto mr-0 px-2 py-1 font-bold text-sm text-[#6e62b6] bg-[#101010] rounded-full">{item.date}</time>
          </div>
          <div className="text-md font-bold text-slate-900 dark:text-white">{item.subtitle}</div>
          {/* Description */}
          <ul className="ml-4 mt-2 text-slate-400 font-normal list-disc font-geist" >
            {item.content.map((line, index) => (
              <li key={index} className="p-1">{line}</li>
            ))}
          </ul>
          
        </div>
      ))}

    </div>
  )
}