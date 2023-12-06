"use client"
import React, { useEffect, useState } from 'react';
import './book.css'; // Import your styling if needed
import { RiSearchLine, RiBookletLine, RiTruckLine, RiLoopLeftLine, RiVerifiedBadgeFill, RiCloseFill, RiFlightTakeoffLine, RiNotification3Fill, RiMenuLine } from 'react-icons/ri';

const YourComponent = () => {
  const [countryCodeDropdown, setCountryCodeDropdown] = useState([]);
  const [selectItemDropdown, setSelectItemDropdown] = useState([]);

  // Array of objects containing country names and codes
  const countries = [
    { name: "Afghanistan", code: "+93" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "Andorra", code: "+376" },
    { name: "Angola", code: "+244" },
    // Add more countries and codes as needed
  ];

  // Function to populate the dropdown with country codes
  const populateCountryCodeDropdown = () => {
    const dropdown = countries.map(country => ({
      value: country.code,
      text: `${country.name} (${country.code})`,
    }));

    setCountryCodeDropdown(dropdown);
  };

  // Call the function to populate the dropdown when the component mounts
  useEffect(() => {
    populateCountryCodeDropdown();
  }, []);

  // Array of items
  const items = [
    { name: "Stamps" },
    { name: "Item 2" },
    { name: "Item 3" },
    // Add more items as needed
  ];

  // Function to populate the dropdown with items
  const selectItems = () => {
    const dropdown = items.map(item => ({
      value: item.name,
      text: item.name,
    }));

    setSelectItemDropdown(dropdown);
  };

  // Call the function to populate the dropdown when the component mounts
  useEffect(() => {
    selectItems();
  }, []);

  return (
    <div className="main">
      <div className="navbar">
      <div className="navbar">
        <div className="nav-l">
          <img src="https://dnk.cept.gov.in/customers.web/static/img/dnk2.png" alt="" />
          <p>डाकघर निर्यात केंद्र - ग्राहक पोर्टल <br />DakGhar Niryat Kendra - Customer Portal</p>
        </div>
        <div className="nav-c">
          <img src="https://dnk.cept.gov.in/customers.web/static/img/logo.jpg" alt="" />
          <img src="https://dnk.cept.gov.in/customers.web/static/img/g20.jpg" alt="" />
        </div>
        <div className="nav-r">
        <RiNotification3Fill />
          <a href="#"><RiMenuLine />Menu</a>
          <a href="./">Home</a>
        </div>   
      </div>
      </div>
      <div className="box">
        <div className="left_box">
          <h1>Check Availability</h1>
          <div className="boxhero">
            <select id="countryCodeDropdown">
              <option value="">Country</option>
              {countryCodeDropdown.map(option => (
                <option key={option.value} value={option.value}>{option.text}</option>
              ))}
            </select>
            <p>Availability:</p>
            <p>Service Available</p>
          </div>
          <br />
          <button>
            <a href="#">Check Now</a>
          </button>
          <button>
            <a href="#">Book Article</a>
          </button>
        </div>
        <div className="right_box">
          <h1>Tariff Calculator - For Information Purpose Only</h1>

          <select id="select_item">
            <option value="">Select product</option>
            {selectItemDropdown.map(option => (
              <option key={option.value} value={option.value}>{option.text}</option>
            ))}
          </select>
          <label htmlFor="Gross"></label>
          <input type="number" id="gross" placeholder="Gross wt." required />
          <button>
            <a href="#">continue</a>
          </button>

          <p>Total Amount: <br />
            (Inclusive of taxes, if any applicable.,)</p>
        </div>
      </div>
      <div className="down-box">
      <div class="down-box">
            <div class="lbox">
                <p>KYC status is pending. Please ensure that the IEC & GST details are validated along with documents upload.</p>
            </div>
            <div class="r_box">
                <h1>Prohibitions & Restrictions:</h1>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default YourComponent;
