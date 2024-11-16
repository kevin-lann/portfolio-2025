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
        {tabs.map(tab => (
          <div 
          className={`w-full text-center p-2 rounded-[10px] cursor-pointer ${curTab === tab ? 'bg-[#242424]' : 'bg-[#101010]'}
          transition ease-in-out duration-300 ${curTab === tab ? 'hover:bg-[#343434]' : 'hover:bg-[#181818]'} `}
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