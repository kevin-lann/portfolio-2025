interface TabsProps {
  setTab: (_: string) => void;
  curTab: string;
  tabs: string[];
}

const Tabs = ({
  setTab,
  curTab,
  tabs
}: TabsProps) => {

  return (
    <>
      <div className="w-full border-white/15 p-1 flex flex-row align-center gap-4 text-lg">
        {tabs.map((tab, index) => (
          <div 
            key={index}
            className={`w-full text-center p-2 rounded-[10px] cursor-pointer
            ${curTab === tab ? 'bg-[#242424]' : 'bg-[#101010]'}
            transition ease-in-out duration-300 ${curTab === tab ? 'hover:bg-[#343434]' : 'hover:bg-[#181818]'} 
            transition-border ease-in-out duration-300 border border-transparent hover:border-white/15 
            transition-shadow ease-in-out duration-300 hover:drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)]`}
            onClick={() => setTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </>
  )
}

export default Tabs