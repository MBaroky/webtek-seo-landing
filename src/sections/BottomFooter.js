import React, { useEffect, useState } from "react";
// import Social from "../components/Social";
// import { footerLinks } from "../data/footerData";
import FooterMenu from "../components/FooterMenu";
import {
  companyItems,
  productItems,
  informationItems,
} from "../data/footerData";
import Social from "../components/Social";
function BottomFooter({ logo }) {
  const [productData, setProductData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [informationData, setInformationData] = useState([]);

  useEffect(() => {
    setCompanyData(companyItems);
    setProductData(productItems);
    setInformationData(informationItems);
  }, []);
  return (
    <>
      <footer className="flex w-full justify-between gap-5  bg-black px-16 py-20 text-white max-md:flex-wrap">
        <div className="flex w-full flex-col py-0.5 max-md:max-w-full">
          <div className="mt-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex w-full flex-col max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center max-md:mt-10 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex basis-2/5 flex-col max-md:ml-0 max-md:w-full">
                        <img
                          src={logo}
                          alt="logo"
                          className="mb-3 aspect-video max-w-[150px] object-cover brightness-0 grayscale invert"
                        />
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quo in quidem eveniet maxime! Blanditiis illum
                          voluptate corporis magnam eos praesentium, natus
                          commodi voluptatem quasi doloribus libero, a ut alias
                          optio!
                        </p>
                        <Social />
                      </div>
                      <div className="flex basis-1/5 flex-col max-md:ml-0 max-md:w-full">
                        <FooterMenu title="Product" data={productData} />
                      </div>
                      <div className="ml-5 flex basis-1/5 flex-col max-md:ml-0 max-md:w-full">
                        <FooterMenu
                          data={informationData}
                          title="Information"
                        />
                      </div>
                      <div className="ml-5 flex basis-1/5 flex-col max-md:ml-0 max-md:w-full">
                        <FooterMenu data={companyData} title="Company" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default BottomFooter;
