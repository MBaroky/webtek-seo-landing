import PortfolioSlider from "./PortfolioSlider";
// import { Button } from "./ui/button";
import { portfolioData } from "../data/portfolioData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

function TabsWrapper() {
  const tabsItems = [
    { label: "All Work", value: "All" },
    { label: "Website Technology", value: "Website" },
    { label: "Mobile Apps", value: "Mobile" },
    { label: "Marketing Strategy", value: "Marketing" },
  ];
  return (
    <Tabs
      defaultValue={tabsItems[0].value}
      className='w-full mt-5 py-5 flex flex-col'>
      <TabsList className='flex max-md:flex-wrap h-auto gap-3 md:gap-5 w-full'>
        {tabsItems.map((item, index) => (
          <TabsTrigger
            className={`grow border-black border-[1px] data-[state=active]:bg-[#4F16F2] data-[state=active]:text-white text-black rounded-none tracking-normal max-md:px-1 md:mb-5 px-4 max-w-[calc(100% / ${tabsItems.length})]`}
            key={index}
            value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsItems.map((item, index) => (
        <TabsContent key={index} value={item.value}>
          {item.value === "All" ? (
            <PortfolioSlider
              data={portfolioData.sort(() => Math.random() - 0.5)}
            />
          ) : (
            <PortfolioSlider
              data={portfolioData.filter(
                portfolioItem => portfolioItem.slider === item.value
              )}
            />
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default TabsWrapper;
