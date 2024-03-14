import React, { useEffect, useState } from "react";
import { ApiCall } from "../services/ApiCall";
import { useLocation } from "react-router-dom";
import ModalComponenet from "./Modal";
import Button from "react-bootstrap/Button";
import MyModal from "./Modal";

function Main() {
  const [path, setPath] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const index = queryParams.get("index");
  const [show, setshow] = useState(false);

  const open = () => {
    setshow(true);
  };

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const res = await ApiCall("post", "/api/v1/rta/client/download", {
          index: index,
        });
        console.log(res, "res");
        setPath(res?.message?.data);
        if (res) {
          setPath(res?.message?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleSubmit();
  }, []);

  return (
    <>


      <div className="container">
        <br />
        <br />
        <b>
          <p align="CENTER">
            <font size={5}>Document Validation Service</font>
          </p>
        </b>
        <br />
        <br />
        <b>
          <p>Description:</p>
        </b>
        <br />
        <br />
        <p>
          This service provides real-time validation of documents issued by the
          RTA Licensing Agency. Validation means, at the time of checking, the
          product validity is displayed to show if the product is still current,
          not expired and indicating that the client's record has not changed,
          so the product is still correct. The service also has a view button
          that shows a copy of the product that was issued. This allows a check
          that the product has not been altered since it was issued. <br />
          <br />
          <b>User Instructions:</b>
          <br />
          <br />
          1-
          <span id="firstInstr">
            Enter the document reference and press "Go"
          </span>
          <br />
          2-See document status on the page.
          <br />
          3-To see a copy of the document that RTA issued press "view"
          <br />
          4-In case the needed product is 'Drivers Experience/History
          Certificate', enter traffic number along with either 'Certificate
          Reference No.' or 'Transaction ID' <br />
        </p>
        <div className="fines cleaner">
          <p className="clrboth gray"></p>
        </div>
        <ul className="frminpts cleaner">
          <li>
            <strong className="red">
              <p>Search:</p>
            </strong>
          </li>
          <li>
            <select
              name="certificateType"
              onchange="certificateTypeChange(true);"
              className="inptslct wdth140">
              <option value>Select a Product</option>
              <option value={1043}>
                Application of Inspection for Classification
              </option>
              <option value={213}>Clearance Certificate</option>
              <option value={1035}>Commecrcial License Follow Up Paper</option>
              <option value={1038}>Commercial License Permit</option>
              <option value={100}>Commercial Permit Certificate</option>
              <option value={1006}>Drive Test Appointment</option>
              <option value={1045}>Driver NOC</option>
              <option value={105}>
                Drivers Experience/History Certificate
              </option>
              <option value={101}>Driving License</option>
              <option value={206} selected="selected">
                Export Certificate
              </option>
              <option value={403}>Eye Test Receipt</option>
              <option value={1029}>Eye Test Result - No Traffic File</option>
              <option value={1008}>File Transfer from Dubai NOC</option>
              <option value={217}>Fine Receipt And License Services</option>
              <option value={1033}>Import Vehicle Certificate</option>
              <option value={216}>Insurance Refund Certificate</option>
              <option value={103}>Interim Drivers License</option>
              <option value={204}>Interim Vehicle Registration Notice</option>
              <option value={1036}>Issue Approval Letter</option>
              <option value={1041}>Issue Civil Defense Letter</option>
              <option value={1009}>Issue Doctor Certificate</option>
              <option value={1037}>Issue Legal Author Letter</option>
              <option value={2}>Learner's Permit</option>
              <option value={215}>Non-ownership Certificate</option>
              <option value={402}>Plate Ownership Certificate</option>
              <option value={205}>Possession Certificate</option>
              <option value={1047}>Print Vehicle License</option>
              <option value={241}>Registered Vehicles Reports</option>
              <option value={1039}>Rental System Subscription</option>
              <option value={1004}>
                Replacement of Vehicle's Export Certificate
              </option>
              <option value={1032}>Return Back From Tourism Certificate</option>
              <option value={1048}>Road Test Exam Result</option>
              <option value={228}>Sales Transaction Certificate</option>
              <option value={1005}>Special Experience Certificate</option>
              <option value={1016}>
                Special Permits / Commercial Drive Permit
              </option>
              <option value={1021}>
                Special Permits / Desert Driver License
              </option>
              <option value={1018}>
                Special Permits / Desert Learning Permit
              </option>
              <option value={1052}>Special Permits / E-Scooter Permit</option>
              <option value={1020}>
                Special Permits / Instructor Learning Permit
              </option>
              <option value={1026}>Special Permits / Instructor Permit</option>
              <option value={1023}>Special Permits / Instructor Permit</option>
              <option value={1028}>
                Special Permits / Limousine Driver Permit
              </option>
              <option value={1017}>
                Special Permits / Open File To Limousine Driver
              </option>
              <option value={1014}>
                Special Permits / Open File To Taxi Driver Permit
              </option>
              <option value={1019}>
                Special Permits / Site Inspection View
              </option>
              <option value={1025}>
                Special Permits / Special Nature Driving Learning Permit
              </option>
              <option value={1022}>
                Special Permits / Special Nature Driving Permit
              </option>
              <option value={1013}>
                Special Permits / Special Needs Permit
              </option>
              <option value={1027}>Special Permits / Taxi Driver Permit</option>
              <option value={1044}>
                Special Permits / Tourist Guide Permit
              </option>
              <option value={1015}>Special Permits / Tram Drive Permit</option>
              <option value={1024}>
                Special Permits / Tram Instructor Permit
              </option>
              <option value={1049}>
                Special permit / issue limousine appointment
              </option>
              <option value={1050}>
                Special permit / issue taxi appointment
              </option>
              <option value={1011}>
                To Whom It Concern Certificate / Drivers
              </option>
              <option value={1031}>
                To Whom It Concern Certificate / Vehicles
              </option>
              <option value={1046}>To Whom It May Concern</option>
              <option value={212}>Tourism Certificate</option>
              <option value={1042}>Tourism Classification</option>
              <option value={1040}>Training Application</option>
              <option value={207}>Transfer Certificate</option>
              <option value={1010}>Transfer License</option>
              <option value={1001}>Unregistered Vehicle's Certificate</option>
              <option value={201}>Vehicle License</option>
              <option value={1002}>Vehicle's Clearance Certificate</option>
              <option value={1003}>Vehicle's Registration Certificate</option>
              <option value={214}>Vehicle(S) Ownership Certificate</option>
            </select>
            <p className="tips">e.g Vehicle OwnerShip</p>
          </li>
          <li className="referenceNoClass" style={{ display: "list-item" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="referenceNo"
                  maxLength={15}
                  defaultValue={68329245}
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>
                  Certificate Reference Number
                </span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li className="issueDateClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="issueDate"
                  defaultValue="Issue Date"
                  id="issueDate_id"
                  title
                  maxLength={10}
                  onblur="validateDate(this,'Issue Date','en_GB','Issue Date');setFieldLabelOnBlur(this,'Issue Date');"
                  onfocus="setFieldLabelOnFocus(this,'Issue Date');"
                  style={{ width: 180 }}
                  className="inpttxt slctdate hasDatepicker"
                  tabIndex={1}
                />
                <button type="button" className="ui-datepicker-trigger">
                  ...
                </button>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              Issue Date
            </p>
          </li>
          <li className="dateOfBirthClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="dateOfBirth"
                  defaultValue="Date Of Birth"
                  id="dateOfBirth_id"
                  title
                  maxLength={10}
                  onblur="validateDate(this,'Date Of Birth','en_GB','Date Of Birth');setFieldLabelOnBlur(this,'Date Of Birth');"
                  onfocus="setFieldLabelOnFocus(this,'Date Of Birth');"
                  style={{ width: 180 }}
                  className="inpttxt slctdate hasDatepicker"
                  tabIndex={1}
                />
                <button type="button" className="ui-datepicker-trigger">
                  ...
                </button>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              Date Of Birth
            </p>
          </li>
          <li className="registerationDateClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="registrationDate"
                  defaultValue="Registration Date"
                  id="registrationDate_id"
                  title
                  maxLength={10}
                  onblur="validateDate(this,'Registration Date','en_GB','Registration Date');setFieldLabelOnBlur(this,'Registration Date');"
                  onfocus="setFieldLabelOnFocus(this,'Registration Date');"
                  style={{ width: 180 }}
                  className="inpttxt slctdate hasDatepicker"
                  tabIndex={1}
                />
                <button type="button" className="ui-datepicker-trigger">
                  ...
                </button>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              Registration Date
            </p>
          </li>
          <li className="trafficNoClass" style={{ display: "list-item" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="trafficNo"
                  maxLength={8}
                  defaultValue={16408335}
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Traffic Number</span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li className="transactionIdClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="transactionId"
                  maxLength={15}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Transaction Id</span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li className="licenseNoClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="driverLicenseNumber"
                  maxLength={8}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Driver License Number</span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li className="interimLicenseNoClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="interimDriverLicenseNumber"
                  maxLength={8}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>
                  Interim Driver License Number
                </span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li
            className="interimRegistrationNoClass"
            style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="interimRegistrationNumber"
                  maxLength={8}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 230 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>
                  Interim Vehicle Registration Number
                </span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li className="registrationNoClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="registrationNumber"
                  maxLength={8}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Registration Number</span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li className="finesReceiptNoClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="finesReceiptNo"
                  maxLength={15}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Receipt Number</span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li
            className="eyeTestReceiptTransactionNumberClass"
            style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="eyeTestReceiptTransactionNumber"
                  maxLength={15}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Transaction Number</span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li className="roadTestRegIdClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="roadTestRegistrationId"
                  maxLength={15}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Traffic Number</span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              Traffic Number
            </p>
          </li>
          <li className="tradeLicenseNumberClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="tradeLicenseNumber"
                  maxLength={8}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Trade License Number</span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              Trade License Number
            </p>
          </li>
          <li className="roadTestExamDateClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="roadTestExamDate"
                  defaultValue="Exam Date"
                  id="roadTestExamDate_id"
                  title
                  maxLength={10}
                  onblur="validateDate(this,'Exam Date','en_GB','Exam Date');setFieldLabelOnBlur(this,'Exam Date');"
                  onfocus="setFieldLabelOnFocus(this,'Exam Date');"
                  style={{ width: 180 }}
                  className="inpttxt slctdate hasDatepicker"
                  tabIndex={1}
                />
                <button type="button" className="ui-datepicker-trigger">
                  ...
                </button>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              Exam Date
            </p>
          </li>
          <li className="permitNoClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="permitNo"
                  maxLength={15}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 180 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Permit No</span>
              </em>
            </span>
            <p className="tips" style={{ display: "block" }} id="refEx">
              e.g 12345
            </p>
          </li>
          <li>
            <button
              type="button"
              className="inptbtn"
              onclick="doSearch(true, this);"
              name="goButton"
              style={{ display: "inline-block" }}>
              <span>
                <em>Go</em>
              </span>
            </button>
          </li>
        </ul>
        <ul className="frminpts cleaner" id="plateInfoDivId">
          <li className="plateNoClass" style={{ display: "none" }}>
            <span className="inptcorns">
              <em>
                <input
                  type="text"
                  name="plateNo"
                  maxLength={5}
                  defaultValue
                  onkeypress="processKey(event,this);"
                  onblur="onFieldBlur(this)"
                  onfocus="onFieldFocus(this)"
                  style={{ width: 150 }}
                  className="inpttxt refbg inptcorns"
                />
                <span style={{ display: "none" }}>Plate Number</span>
              </em>
            </span>
            <p className="tips">e.g. 12345</p>
          </li>
          <li className="plateCategoryClass" style={{ display: "none" }}>
            <select
              name="plateCategory"
              onkeypress="processKey(event,this);"
              onchange="plateCategoryChanged(this);"
              id="plateCategoryId"
              className="inptslct wdth80">
              <option value selected="selected">
                Select Category
              </option>
              <option value={2}>Private</option>
              <option value={4}>Public Transportation</option>
              <option value={15}>Trailer</option>
              <option value={11}>Government Vehicle</option>
              <option value={1}>Motorcycle</option>
              <option value={3}>Taxi</option>
              <option value={17}>Import</option>
              <option value={18}>Learning Vehicle</option>
              <option value={5}>Trade Plate</option>
              <option value={14}>Entertainment Motorcycle</option>
              <option value={7}>Consulate Authority</option>
              <option value={16}>Classical</option>
              <option value={19}>Dubai Police</option>
              <option value={20}>Dubai Flag</option>
              <option value={21}>EXPO 1</option>
              <option value={22}>EXPO 2</option>
              <option value={23}>EXPO 3</option>
              <option value={24}>EXPO 4</option>
              <option value={25}>EXPO 5</option>
              <option value={26}>EXPO 6</option>
              <option value={27}>EXPO 7</option>
              <option value={28}>Under Test</option>
              <option value={10}>Protocol</option>
              <option value={9}>International Organization</option>
              <option value={8}>Political Authority</option>
            </select>
            <p className="tips">e.g. Private</p>
          </li>
          <li className="plateCodeClass" style={{ display: "none" }}>
            <select
              name="plateCode"
              onkeypress="processKey(event,this);"
              id="plateCode"
              className="jq-select">
              <option value selected="selected">
                Select Code
              </option>
              <option value={2}>A</option>
              <option value={3}>B</option>
              <option value={4}>C</option>
              <option value={5}>D</option>
              <option value={6}>E</option>
              <option value={7}>F</option>
              <option value={68}>G</option>
              <option value={70}>H</option>
              <option value={71}>I</option>
              <option value={78}>J</option>
              <option value={700}>AA</option>
              <option value={80}>K</option>
              <option value={74}>L</option>
              <option value={69}>M</option>
              <option value={95}>N</option>
              <option value={88}>O</option>
              <option value={96}>P</option>
              <option value={93}>Q</option>
              <option value={79}>R</option>
              <option value={87}>S</option>
              <option value={97}>T</option>
              <option value={98}>U</option>
              <option value={86}>V</option>
              <option value={99}>W</option>
              <option value={100}>X</option>
              <option value={102}>Y</option>
              <option value={101}>Z</option>
              <option value={109}>WHITE</option>
            </select>
            <p className="tips">e.g. A</p>
          </li>
        </ul>
        <div className="captchaDiv" style={{ display: "block" }}>
          <ul className="frminpts cleaner">
            <li>
              <div
                className="g-recaptcha"
                data-sitekey="6LfAE38oAAAAAFLx8qNOIyf_6MlKyqNx1fe3bG-0"></div>
            </li>
          </ul>
        </div>
        <ul className="frminpts cleaner">
          <li>
            <br />
            <strong
              id="idWaintingMessage"
              className="red"
              style={{ display: "none" }}>
              Please wait while getting information...
            </strong>
          </li>
        </ul>
        {/*View Requests List*/}
        <div className="movbox">
          <span className="boxcornrs">
            <span />
          </span>
        </div>
        <table className="srchrsult">
          <tbody>
            <tr>
              <th>
                <p className="digbg" align="center">
                  <span>Ref.No.</span>
                </p>
              </th>
              <th>
                <p className="digbg" align="center">
                  <span>Certification Type</span>
                </p>
              </th>
              <th>
                <p className="digbg" align="center">
                  <span>Related to</span>
                </p>
              </th>
              <th>
                <p className="digbg" align="center">
                  <span>Issue Date</span>
                </p>
              </th>
              <th>
                <p className="digbg" align="center">
                  <span>Expiry Date</span>
                </p>
              </th>
              <th>
                <p className="digbg" align="center">
                  <span>Status</span>
                </p>
              </th>
              <th>
                <p>&nbsp;</p>
              </th>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>68329245</td>
              <td style={{ textAlign: "center" }}>Export Certificate</td>
              <td style={{ textAlign: "center" }}></td>
              <td style={{ textAlign: "center" }}>02-01-2024</td>
              <td style={{ textAlign: "center" }}></td>
              <td style={{ textAlign: "center" }}></td>
              <td>
                <p className="margb4">
                  <a
                    className="vewmore reg-btn-gray vewCertificate cboxElement"
                    href="#">
                    <em className="fxdwdth">View E-Certificate</em>
                  </a>
                </p>
                <p className="margb4">
                  <a
                    className="reg-btn-gray"
                    href="https://traffic.rta.ac/assets/img/documents/1704197001_114_2SURTGXoLj/my-certificate.pdf">
                    <em className="fxdwdth">Download</em>
                  </a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Vehicle Registration Table */}
        {/* End Issue Exam Appointments Table */}
        {/* DTT Certificate Printing Logs Table */}
        {/* End DTT Certificates Print Log */}
        {/* Special Permits Printing Logs Table */}
        {/* End Special Permits Certificates Print Log */}
        {/* Scooter Permits Printing Logs Table */}
        {/* End Scooter Permits Certificates Print Log */}
        {/* Cml Printing Logs Table */}
        {/* End Cml Applications Certificates Print Log */}
        {/* Optical Results Table */}
        {/* End Optical Results */}
        {/* Active Booklets With Plate Logos Table */}
        {/* End Active Booklets With Plate Logos */}
        {/* Medical Assessments Table */}
        {/* End Medical Assessments Table */}
        {/* Vehicle Registration Table */}
        {/* End Vehicle Registration Table */}
        {/*Driver License Table */}
        {/* End Driver License Table */}
        {/* Driver Interirm License Certificate [103] */}
        {/* Driver Interirm License Certificate [103] */}
        {/*Vehicle Registration Interim License Certificate [204] */}
        {/* Vehicle Registration Interim License Certificate [204] */}
        {/*Learner Permit Table [2]*/}
        {/* EVhl License */}
        {/* End Active Booklets With Plate Logos */}
        {/* End Learner Permit Table [2] */}
        {/*Fine Receipt Table */}
        {/* End Driver License Table */}
        {/* Start Eye Test Receipts Table */}
        {/* End Eye Test Receipts Table */}
        {/*Road Test Exam Results Table [1048] */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      #cboxWrapper{position:fixed; top:0; left:38px; z-index:9999; overflow:hidden;}\n  ",
          }}
        />
        <br />
        <br />
      </div>




      <ModalComponenet pdfUrl={path} />
    </>
  );
}

export default Main;
