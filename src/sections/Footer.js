import { useState, useEffect } from "react";
import { FooterForm } from "../components/FooterForm";
import FooterMenu from "../components/FooterMenu";
import BottomFooter from "./BottomFooter";
import {
  companyItems,
  productItems,
  informationItems,
} from "../data/footerData";

function Footer({ logo }) {
  const [productData, setProductData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [informationData, setInformationData] = useState([]);

  useEffect(() => {
    setCompanyData(companyItems);
    setProductData(productItems);
    setInformationData(informationItems);
  }, []);
  return (
    <div
      id='contact'
      className='flex justify-center items-center px-16 py-20 bg-violet-700 max-md:px-5'>
      <div className='flex flex-col py-0.5 w-full max-w-[1196px] max-md:max-w-full'>
        <div className='mt-1 max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col w-[61%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col justify-center max-md:mt-10 max-md:max-w-full'>
                <div className='max-md:max-w-full'>
                  <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                    <div className='flex flex-col w-[43%] max-md:ml-0 max-md:w-full'>
                      <FooterMenu
                        title='Product'
                        data={productData}
                      />
                    </div>
                    <div className='flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full'>
                      <FooterMenu
                        data={informationData}
                        title='Information'
                      />
                    </div>
                    <div className='flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full'>
                      <FooterMenu
                        data={companyData}
                        title='Company'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow justify-center px-1 text-xs text-slate-500 max-md:mt-10 max-md:max-w-full'>
                <FooterForm />
              </div>
            </div>
          </div>
        </div>
        <BottomFooter logo={logo} />
      </div>
    </div>
  );
}

export default Footer;
