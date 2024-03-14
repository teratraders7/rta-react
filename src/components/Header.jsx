import React from 'react'
import logo from '../../public/assets_new/government-dubai.png'
import Rta from '../../public/assets_new/RTA.png'

function Header() {
  return (




    <div className="headerRTA" >
      <div className="container">
        <div className="logosSection">
          <a href="https://www.digitaldubai.ae/ar" title="Government of Dubai" className="governmentDubai _updated">
            <img src={logo} />
          </a>
          <a href="https://www.rta.ae/wps/portal/rta/ae/home" title="RTA Dubai" className="RTADubai _updated">
            <img src={Rta} />
          </a>
        </div>
        <nav className="navbar navbar-default menuParent">
          <ul className="nav navbar-nav">
            <li className="home active">
              <em>
                <svg>
                  <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#home" />
                </svg>
              </em>
            </li>
            <li>
              <a href="https://www.rta.ae/wps/portal/rta/ae/driver-and-carowner">Driver and Car Owner</a>
              <em className="header__icon">
                <svg className="normal">
                  <use className="icon" xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#driver-car-owner" />
                </svg>
              </em>
            </li>
            <li>
              <a href="https://www.rta.ae/wps/portal/rta/ae/public-transport">Public Transport</a>
              <em className="header__icon">
                <svg className="normal">
                  <use className="icon" xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#metro" />
                </svg>
              </em>
            </li>
            <li>
              <a href="https://www.rta.ae/wps/portal/rta/ae/corporate-services">Business and Corporate</a>
              <em className="header__icon">
                <svg className="normal">
                  <use className="icon" xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#briefcase" />
                </svg>
              </em>
            </li>
            <li>
              <a href="https://www.rta.ae/wps/portal/rta/ae/pod/">People Of Determination</a>
              <em className="header__icon">
                <svg className="normal">
                  <use className="icon" xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#wheel-chair" />
                </svg>
              </em>
            </li>
          </ul>
          <ul className="nav navbar-nav pull-right loginOption">
            <li>
              <em>
                <svg>
                  <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#user" />
                </svg>
              </em>
              <a href="javascript:chatonline();" className="loginUserAction">
                Login
              </a>
              <div className="loginDropdown">
                <p>Login to your RTA account as:</p>
                <a href="https://www.rta.ae/wps/myportal/rta/ae/home/dashboard?lang=en">
                  <span className="icon">
                    <svg>
                      <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#chevron" />
                    </svg>
                  </span>
                  Individual / Company
                </a>
                <a href="https://www.rta.ae/trustedagents">
                  <span className="icon">
                    <svg>
                      <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#chevron" />
                    </svg>
                  </span>
                  Trusted agent
                </a>
                <a href="https://www.rta.ae/wps/portal/rta/ae/home/registration?lang=en">
                  <span className="icon">
                    <svg>
                      <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#chevron" />
                    </svg>
                  </span>
                  Create an account
                </a>
              </div>
            </li>
            <li>
              <em>
                <svg>
                  <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#eye-off" />
                </svg>
              </em>
              <a href="javascript:chatonline();" className="loginAccessibilityAction">
                Accessibility
              </a>
              <ul className="accessibilityDropdown">
                <li className="wrap">
                  <span className="tit _sizeTit">Text Size</span>
                  <div className="fontSlider">
                    <input id="fontSizeInput" type="range" min={0} max={100} defaultValue={50} step={50} onchange="onChangeFontSize(this.value)" />
                  </div>
                  <span className="sizeValue" />
                </li>
                <li>
                  <span className="tit">Colors</span>
                  <div className="colosThemes">
                    <span className="th_red active" />
                    <span className="th_black" />
                    <span className="th_blue" />
                    <span className="th_yellow" />
                  </div>
                </li>
                <li>
                  <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/accessibility" className="accessibilityOptions">
                    <span className="icon">
                      <svg role="img" width={18} height={10}>
                        <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#chevron" />
                      </svg>
                    </span>
                    <span className="caption">Accessibility options</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menuChild ">
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed menu-btn" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" onclick="openMenu()">
                  <i />
                  <i />
                  <i />
                  <span className="sr-only">Toggle navigation</span>
                </button>
                <div className="mobileMode">
                  <a href="https://traffic.rta.ae/trfesrv/public_resources/my-ecertificates.do?CSRFf7xhhg=-14flu4phtcj6z&tradeLicenseNumber=&interimRegistrationNumber=&plateCategory=&roadTestRegistrationId=&g-recaptcha-response=ZO63uuzrPR2eGbhpjUiCefNIu0nrWWdDB_roTc9fZmbJCmuA0VcKh0qwvLmj8UfhxPfa94vu_eZVJL3yybOt3GgI4n7UnzP8lVfE-ms_spgN6O6cZMo8y9z0LD9My2bT_IHBAEzG6-cnkg-k_8BlKi2gfmpchfhFbBJJU3yM_qjVwRk6IuGnRKbZvaWwzPUvMLk5H61TdjsFLmCu64QF5g18gdKmDI9wLK9NYc65NATsphb-Y0rj8Lw3A5X_yLYr-0W79mocnCeqMaxJQKvaeOkAm3VpqqtHpUwPLNZRnaqhs6Xr7vcWbYdxoTu672Km0_H4oAP2w-hYukwTVXS3XRDrMD0gIHXLdHvh-SAdmFw7NPSumWh5qDZQChdKterLRIOUuDXFbTM77sfsxjwLwndmokolg7WTWQNo3tNhD6GLJp0G-ogb3xT3uO65RlojXedPjgvNBVtdWGkIr8La_68dAGKTQEESpvTJvcJn6n0Es4D5myjcF3Crq1l_PP2z3wJXWFhTHu-ce4MIvRpFVWbH0MX50SEqPjr6crdHf9AJhj2Zp5fV0QWccydl1rfqKgDWYcO927Oh7ZRjP7DYaW59JygPBJ9uflAuxo_c4K3BoKoTpaFDgiICI9oVkGg0gUnFnhqcBWerB3dvdeedHEDLIU1gup22l6ENmwD-DbalTinSobJENw9DJFiyS_j08LGj-byccfXsTPbtyq4s8SkhTcuiWrV9u9bNCdmgYm2Cjyd3j1akKruxIzOaih7j9KK7iMPmgZf2LWBNSTqhhA==&finesReceiptNo=&fromQRCode=zr5vQPlkD_XjrghLSGgRGw==&roadTestExamDate=W56CxkrJME25LK89VMlyPA==&registrationNumber=&issueDate=ZWPU8KA1AWHPL84kii7WzA==&trialId=&dateOfBirth=a2GiC5Bi_F7u2uvHbkgnHw==&transactionId=&eyeTestReceiptTransactionNumber=&cplId=&permitNo=&bookletId=&trafficNo=Uf8zkVveUQWQd-OfKYLs-A==&interimDriverLicenseNumber=&plateNo=&preserveParameters=MCy_JUQtwonA8qNxwPWQhQ==&driverLicenseNumber=&referenceNo=qDEqLWue8ql4ymJSK-M4KQ==&actionParam=IjCsSUCQgHIp-VRzjgAf2ttnwBPNKTmseqpwhXJwMO8=&registrationDate=qD9v-PZbU5LsRH_8j3YWl2IiHi0_jkbjJntUNOIDSxY=&certificateType=fMG5lwPlRAM8Qi1DvTkwBQ==&plateCode=&switchLanguage=5eK2XlHWxWiXxIoxkQjX-g==&noCache=MUKFqoum7XPBzhvWG6Wb9w==">����</a>
                  <a href="javascript:chatonline();">Login</a>
                </div>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav hide-mobile">
                  <li>
                    <a href="javascript:chatonline();">About RTA</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/">
                        Learn more about RTA
                      </a>
                      <ul>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/explore-rta">
                            Explore RTA
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/board-of-executive-directors">
                            Board of the Executive Directors
                          </a>
                        </li>
                        <li> 
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/explore-rta?lang=en#tab-our-awards">
                            Our Awards
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/policies-procedures">
                            Our policies and procedures
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/promotions-and-campaigns">
                            Campaigns and promotions
                          </a>
                        </li>
                      </ul>
                      <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/" className="moreNav">
                        More
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:chatonline();">Media Center</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://www.rta.ae/wps/portal/rta/ae/home/news-and-media">
                        Discover our media center
                      </a>
                      <ul>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/news-and-media/all-news">News</a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/news-and-media/AllProjects">
                            Projects
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/news-and-media/all-photos">
                            Photos
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/news-and-media/AllVideos">
                            Videos
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/news-and-media/al-masar-digital">
                            Newsletter
                          </a>
                        </li>
                      </ul>
                      <a href="https://www.rta.ae/wps/portal/rta/ae/home/news-and-media" className="moreNav">
                        More
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:chatonline();">Open Data</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://www.rta.ae/wps/portal/rta/ae/home/open-data">
                        Discover our open data 
                      </a>
                      <ul>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/open-data/agencies-legislation">
                            Agencies Legislation
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/open-data/corporate-support-services">
                            Corporate Technology Support Services Sector
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/open-data/corporate-administrative-support-sector">
                            Corporate Administrative Support Sector
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/open-data/public-transport-legislations">
                            Public Transport Legislations
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/open-data/traffic-road-legislations">
                            Traffic and Road Legislations
                          </a>
                        </li>
                      </ul>
                      <a href="https://www.rta.ae/wps/portal/rta/ae/home/open-data" className="moreNav">
                        More
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:chatonline();">Services</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services">
                        All services 
                      </a>
                      <ul>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services?category=1">
                            Drivers and car owner services
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services?category=2">
                            Public Transport services
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services?category=3">
                            Business and Corporate services
                          </a>
                        </li>
                      </ul>
                      <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services" className="moreNav">
                        More
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:chatonline();">Careers</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://jobs.dubaicareers.ae/careersection/eyov4z5qhfjnsykw9q149t4es7/jobsearch.ftl?lang=en">
                        RTA careers
                      </a>
                      <ul>
                        <li>
                          <a href="https://jobs.dubaicareers.ae/careersection/iam/accessmanagement/login.jsf?redirectionURI=https://jobs.dubaicareers.ae/careersection/eyov4z5qhfjnsykw9q149t4es7/mysubmissions.ftl&TARGET=https://jobs.dubaicareers.ae/careersection/eyov4z5qhfjnsykw9q149t4es7/mysubmissions.ftl">
                            My Jobpage
                          </a>
                        </li>
                      </ul>
                      <a href="https://jobs.dubaicareers.ae/careersection/eyov4z5qhfjnsykw9q149t4es7/jobsearch.ftl?lang=en" className="moreNav">
                        More
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="javascript:chatonline();">Contact Us</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/contactus#ContactInformation">
                        Contact information
                      </a>
                      <ul>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/contact-us/help-and-support/AllGuides">
                            Service FAQs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/contactus#findus">
                            Find us
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/contactus#social">
                            Social Media FAQs
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/contactus#customer-happiness">
                            Customer happiness center location
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/CRMPortal/TrackCaseAndFeedback/TrackCase/search?LocaleKey=en">
                            Track CRM Case
                          </a>
                        </li>
                      </ul>
                      <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/contactus#ContactInformation" className="moreNav">
                        More
                      </a>
                    </div>
                  </li>
                  <li className="hide">
                    <a href="javascript:chatonline();">Vehicle Licensing</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://traffic.rta.ae/trfesrv/public_resources/revamp/common/public_request_service_info.do;jsessionid=nOPex1hC98gIMfHWDGPL40N95-ZmPRkEkwDteF2Qhh-SEHmnjpJO!2058727873?entityId=MAKc6HBYib17XhuN6HG_Ew==&serviceCode=n5N0X8OY1fYwOP5dKjnlnA==&CSRFdxbdmn=hJFm2v07tYaxulwYYv3ASw==&CSRFf7xhhg=-14flu4phtcj6z">
                        Pay fines
                      </a>
                      <ul>
                        <li>
                          <a href="https://traffic.rta.ae/trfesrv/public_resources/revamp/common/public_request_service_info.do?serviceCode=Vl8g_E8yzOHoFb7UVvwSEQ==&entityId=MAKc6HBYib17XhuN6HG_Ew==&CSRF95uqtj=9px0N9lM-JRZrY6KFDrUQg==&switchLanguage=FVq6w-b2voyFMS_LI4ejvA==&CSRFf7xhhg=-14flu4phtcj6z" className>
                            Vehicle renewal
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=3704422" className>
                            Registering new vehicle
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=3704436" className>
                            Changing License Plate Number
                          </a>
                        </li>
                        <li>
                          <a href="https://traffic.rta.ae/trfesrv/public_resources/revamp/common/public_request_service_info.do?entityId=MAKc6HBYib17XhuN6HG_Ew==&serviceCode=ywlDOKc_Kvt5whLnzCP_mg==&CSRFdxbdmn=hJFm2v07tYaxulwYYv3ASw==&CSRFf7xhhg=-14flu4phtcj6z" className>
                            Dubai Branded plate number
                          </a>
                        </li>
                        <li>
                          <a href="https://traffic.rta.ae/trfesrv/public_resources/spl/public_special_plate_inquiry.do?CSRF70oib8=z8hpYPiUkgKfCOzRZKPXsA==&serviceCode=9l6H_GusYY5n340jdieNLQ==&switchLanguage=FVq6w-b2voyFMS_LI4ejvA==&noCache=6bT_K7QMGP_A4-bCcFf8aQ==&CSRFf7xhhg=-14flu4phtcj6z" className>
                            Special plates enquiry
                          </a>
                        </li>
                      </ul>
                      <a href="https://traffic.rta.ae/wps/portal/rta/ae/driver-and-carowner/vehicle-licensing?CSRFf7xhhg=-14flu4phtcj6z" className="moreNav">
                        More
                      </a>
                    </div>
                  </li>
                  <li className="hide">
                    <a href="javascript:chatonline();">Driving license in Dubai</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://traffic.rta.ae/wps/portal/rta/ae/driver-and-carowner/drivers-licensing/licensing?CSRFf7xhhg=-14flu4phtcj6z">
                        Driving license in Dubai
                      </a>
                      <ul>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=3704298">
                            New UAE driving license
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=3704255">
                            Applying for a learning permit
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=3704299">
                            Renewing a driving license
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=3704306">
                            UAE driving license using foreign license
                          </a>
                        </li>
                        <li>
                          <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=3704291">
                            Road test appointment
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="hide">
                    <a href="javascript:chatonline();">Institutes</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://traffic.rta.ae/wps/portal/rta/ae/driver-and-carowner/drivers-licensing/licensing?CSRFf7xhhg=-14flu4phtcj6z">
                        Driving institutes in Dubai
                      </a>
                      <ul>
                        <li>
                          <a href="https://traffic.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=nhHQX4a26bmWX0Tes2rwGQ==&CSRFf7xhhg=-14flu4phtcj6z">
                            License to Operate a Driving Institute
                          </a>
                        </li>
                        <li>
                          <a href="https://traffic.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=vOTBhB6dd9a5a4fgjZW1JQ==&CSRFf7xhhg=-14flu4phtcj6z">
                            Driving Instructor Permit
                          </a>
                        </li>
                        <li>
                          <a href="https://traffic.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=8sIFCT9kTqZomZFJ8trX1w==&CSRFf7xhhg=-14flu4phtcj6z">
                            Driving Theory Lecturer Permit
                          </a>
                        </li>
                        <li>
                          <a href="https://traffic.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=mb0MNMRvC8DR4BMb0oznNw==&CSRFf7xhhg=-14flu4phtcj6z">
                            Tram Instructor Permit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="hide">
                    <a href="javascript:chatonline();">NOC</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://traffic.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=pCTXxELhnj1hw7g5pUNlPw==&CSRFf7xhhg=-14flu4phtcj6z">
                        NOC For A New Trade License
                      </a>
                      <ul>
                        <li>
                          <a href="https://traffic.rta.ae/trfesrv/public_resources/revamp/common/public_request_service_info.do?serviceCode=fZi7XuN11iXDCbSVB4i0tQ==&entityId=MAKc6HBYib17XhuN6HG_Ew==&CSRFabiw1q=0yfRMZrofW0a5xI26rkbDw==&switchLanguage=FVq6w-b2voyFMS_LI4ejvA==&noCache=h4i-PIaulFuMHPzFEzQnVQ==&CSRFf7xhhg=-14flu4phtcj6z">
                            NOC to modify trade license request
                          </a>
                        </li>
                        <li>
                          <a href="https://traffic.rta.ae/trfesrv/public_resources/revamp/common/public_request_service_info.do?CSRF3k7b0s=57I9C5C1cEPAg-jFmSsdoA==&serviceCode=b3SURrKY37M0drdagGMSvg==&entityId=MAKc6HBYib17XhuN6HG_Ew==&switchLanguage=FVq6w-b2voyFMS_LI4ejvA==&noCache=qvh_TxyeR-IOnb3nlMVQlw==&CSRFf7xhhg=-14flu4phtcj6z">
                            Issue driver NOC
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="hide">
                    <a href="javascript:chatonline();">Issue driver NOC</a>
                    <div className="SubMenu">
                      <a className="titleSubMenu" href="https://traffic.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=ygI3h9KX_eD3ZgzHb_u13A==&CSRFf7xhhg=-14flu4phtcj6z">
                        Applying for a Commercial License Plate
                      </a>
                      <ul>
                        <li>
                          <a href="https://traffic.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=K-6cBGJe5_z6XAvChApSsQ==&CSRFf7xhhg=-14flu4phtcj6z">
                            Applying for a License Plate Trading permit
                          </a>
                        </li>
                        <li>
                          <a href="https://traffic.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=mm7H-5juGdR5wovwSYnkVQ==&CSRFf7xhhg=-14flu4phtcj6z">
                            Applying for an NOC to Renew a Luxury Trade License
                          </a>
                        </li>
                        <li>
                          <a href="https://traffic.rta.ae/wps/portal/rta/ae/home/rta-services/service-details?serviceId=pCTXxELhnj1hw7g5pUNlPw==&CSRFf7xhhg=-14flu4phtcj6z">
                            Applying for an NOC for a new Trade License
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-right">
                  {/* <li>
                              <a href="#">عربي</a>
                          </li> */}
                  <li>
                    <em className="SearchBtn">
                      <svg className="global-search-icon">
                        <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#search" />
                      </svg>
                      <svg className="global-search-icon _close">
                        <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#close" />
                      </svg>
                    </em>
                  </li>
                </ul>
                <ul className="nav navbar-nav hide-desktop">
                  <li className="home active">
                    <a href="https://www.rta.ae/wps/portal/rta/ae/home">
                      <em>
                        <svg>
                          <symbol viewBox="0 0 33 28" id="home"> 	
                            <polygon id="Path" points="14.1168166 27 14.1168166 21.160263 17.6478893 21.160263 17.6478893 27 27 27 27 14.2941176 31.7647059 14.2941176 15.8823529 0 0 14.2941176 4.76470588 14.2941176 4.76470588 27" />		
                          </symbol>	
                        </svg>
                      </em>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta">
                      <em>
                        <svg>
                          <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#news" />
                        </svg>
                      </em>
                      About RTA
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rta.ae/wps/portal/rta/ae/driver-and-carowner">
                      <em className="header__icon">
                        <svg className="normal">
                          <symbol viewBox="0 0 19 25" id="driver-car-owner"> 	
                            <path d="M5.95338041,13.4514318 L12.4038397,13.4514318 C14.0818585,13.4514318 15.7073072,14.0368379 17,15.106741 C18.2667501,16.1551725 19,17.7138673 19,19.3582105 L19,25 L0,25 L0,19.1827831 C-1.07731699e-15,17.6383494 0.639404776,16.1628324 1.76632373,15.106741 C2.90114088,14.0432478 4.39812234,13.4514318 5.95338041,13.4514318 Z" id="Path" fillRule="evenodd" />
                            <circle id="Oval" cx="9.5" cy="5.5" r="5.5" />
                            <circle id="Oval" stroke="#FFFFFF" strokeWidth={2} cx="9.5" cy="26.5" r="8.5" />
                            <rect id="Rectangle" fill="#FFFFFF" x="8.49999999" y={19} width={2} height={4} />
                            <polygon id="Path-2" fill="#FFFFFF" points="8.49999999 22.5180287 6.39986907 25 12.8942221 25 10.5 22.5180287" />
                          </symbol>                                          </svg>
                      </em>
                      Driver and Car Owner
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rta.ae/wps/portal/rta/ae/public-transport">
                      <em className="header__icon">
                        <svg className="normal">
                          <symbol viewBox="0 0 31 34" id="metro">
                            <path d="M 20.9 30 h 9.4 v 3.7 H 20.9 v -3.7 H 9.7 l -7.5 -5.6 V 9.6 c 0 -5.1 4.2 -9.3 9.4 -9.3 h 7.5 c 5.2 0 9.4 4.2 9.4 9.3 v 14.8 l -7.5 5.6 z m -5.6 -9.3 c 4.1 0 7.5 -3.4 7.5 -7.4 l 0 -7.4 H 7.8 v 7.4 c 0 4 3.4 7.4 7.5 7.4 z m -7.5 3.7 c 1 0 1.9 -0.8 1.9 -1.9 c 0 -1 -0.8 -1.9 -1.9 -1.9 a 1.9 1.9 0 0 0 -1.9 1.9 c 0 1 0.8 1.9 1.9 1.9 z m 16.9 -1.9 c 0 -1 -0.8 -1.9 -1.9 -1.9 a 1.9 1.9 0 0 0 -1.9 1.9 c 0 1 0.8 1.9 1.9 1.9 c 1 0 1.9 -0.8 1.9 -1.9 z M 0.3 33.7 v -3.7 H 9.7 v 3.7 H 0.3 z" fillRule="nonzero" />
                          </symbol>
                        </svg>
                      </em>
                      Public Transport
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rta.ae/wps/portal/rta/ae/corporate-services">
                      <em className="header__icon">
                        <svg className="normal">
                          <symbol viewBox="0 0 28 23" id="briefcase">
                            <path d="M25.57 3.78c.974 0 1.763.784 1.763 1.75v7.694H.667V5.53c0-.966.79-1.75 1.764-1.75h5.855V1.75C8.286.783 9.076 0 10.049 0h7.902c.974 0 1.764.783 1.764 1.749v2.032h5.854zm-3.951 13.221a1.897 1.897 0 0 0 1.905-1.889h3.81v5.806c0 .966-.79 1.749-1.764 1.749H2.43a1.756 1.756 0 0 1-1.763-1.749v-5.806h3.809c0 1.043.853 1.889 1.905 1.889a1.897 1.897 0 0 0 1.905-1.889h11.428c0 1.043.853 1.889 1.905 1.889zM10.19 3.781h7.62V1.888h-7.62v1.893z" fillRule="nonzero" />
                          </symbol>
                        </svg>
                      </em>
                      Business and Corporate
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rta.ae/wps/portal/rta/ae/home/rta-services">
                      <em className="header__icon">
                        <symbol viewbox="0 0 33 34" id="press-release">
                          <path d="M28.886 31.22c1.16 0 2.114-.955 2.114-2.122V11.146c0-.743-.608-1.358-1.35-1.365l-2.845-.03-.005.722-2-.006v-7.12C24.8 2.606 24.195 2 23.458 2H3.322C2.598 2 2 2.603 2 3.344V29.1c0 1.172.943 2.12 2.1 2.12h24.786zm-24.785 2C1.835 33.22 0 31.374 0 29.1V3.344C0 1.501 1.49 0 3.322 0h20.136C25.3 0 26.8 1.5 26.8 3.348v4.404l2.87.029A3.372 3.372 0 0 1 33 11.146v17.952a4.126 4.126 0 0 1-4.114 4.122H4.1zm24.739-2l-.028 2h-.809a3.317 3.317 0 0 1-3.327-3.344l.124-19.415 2 .006v18.636c0 1.15.906 2.085 2.04 2.117zM6.2 6.244h14.4v8.244H6.2V6.244zm2 6.244h10.4V8.244H8.2v4.244zm-1 6.244h12.4v2H7.2v-2zm0 5.463h12.4v2H7.2v-2z" fillRule="nonzero">
                          </path></symbol>
                      </em>
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rta.ae/wps/portal/rta/ae/home/promotions-and-campaigns">
                      <em className="header__icon">
                        <svg className="normal">
                          <use className="icon" xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#dashboard" />
                        </svg>
                      </em>
                      Campaigns and promotions
                    </a>
                  </li>
                  <li>
                    <a href="https://www.rta.ae/wps/portal/rta/ae/home/about-rta/contactus">
                      <em className="header__icon">
                        <svg className="normal">
                          <use className="icon" xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#call-us" />
                        </svg>
                      </em>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="searchContainer">
          <div className="container">
            <button onclick="window.location.href = 'https://www.rta.ae/wps/portal/rta/ae/home/rta-services';">
              <svg className="global-search-icon">
                <use xlinkHref="https://traffic.rta.ac/assets_new/revamp_sprite.svg#search" />
              </svg>
            </button>
            <input type="text" placeholder="How may we help you today?"  />
          </div>
        </div>
      </div>

      
    </div>
  )

}

export default Header