const express = require('express');
const pdf = require('html-pdf');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rental Information Form</title>

        <style>

        body{
          padding:50px;
          padding-top: 5px;
          background-color:#dedbf4;
        }

        .header-section {
            background-image: linear-gradient(to right, black,#646CFF);
            color: white;
        }

        .submit {
          background-image: linear-gradient(to right, black,#646CFF);
          color: white;
          font-size: 16px;
        }
        </style>

    </head>
    <body>

        <div class = "title">
          <h1>Rental Information Form</h1>
        </div>

        <form action="/" method="post">

            <h2>Parties to the Agreement</h2>
            <div class="header-section">
            <h3>LandLord Information</h3>
            </div>

            <label for="landlord_name">Landlord's Legal Name:</label>
            <input type="text" id="landlord_name" name="landlord_name"><br>
          
            <div class="header-section">
            <h3>Rentee Information</h3>
            </div>

            <div id="rentees">
            
            <div class="rentee">
                <label for="first_name">First Name:</label>
                <input type="text" class="first_name" name="first_name[]">
                <label for="last_name">Last Name:</label>
                <input type="text" class="last_name" name="last_name[]">
                <button type="button" class="remove_rentee">Remove Rentee</button>
            </div>
            </div>

            <br>
            <button type="button" id="add_rentee">Add Rentee</button>
            
            <div class="header-section">
            <h3>Rental Unit Information</h3>
            </div>

            <table>
              <tr>
                <td><label for="retail_unit">Retail Unit:</label></td>
                <td><input type="text" id="retail_unit" name="retail_unit"><br></td>
              </tr>

              <tr>
                <td><label for="street_number">Street Number:</label></td>
                <td><input type="text" id="street_number" name="street_number"><br></td>
              </tr>

              <tr>
                <td><label for="street_name">Street Name:</label></td> 
                <td><input type="text" id="street_name" name="street_name"><br></td>
              </tr>

              <tr>
                <td><label for="city_town">City/Town:</label></td>
                <td><input type="text" id="city_town" name="city_town"><br></td>
              </tr>

              <tr>
                <td><label for="province">Province:</label></td>
                <td><input type="text" id="province" name="province"><br></td>
              </tr>

              <tr>
                <td><label for="postal_code">Postal Code:</label></td>
                <td><input type="text" id="postal_code" name="postal_code"><br></td>
              </tr>
            </table>

            <div class="header-section">
            <h3>Tenant Contact Information</h3>
            </div>

            <table>
              <tr>
                <td><label for="tenant_retail_unit">Retail Unit:</label></td>
                <td><input type="text" id="tenant_retail_unit" name="tenant_retail_unit"><br></td>
              </tr>

              <tr>
                <td><label for="tenant_street_number">Street Number:</label></td>
                <td><input type="text" id="tenant_street_number" name="tenant_street_number"><br></td>
              </tr>

              <tr>
                <td><label for="tenant_street_name">Street Name:</label></td> 
                <td> <input type="text" id="tenant_street_name" name="tenant_street_name"><br></td>
              </tr>

              <tr>
                <td><label for="tenant_PO_box">PO Box:</label></td>
                <td><input type="text" id="tenant_PO_box" name="tenant_PO_box"><br></td>
              </tr>

              <tr>
                <td><label for="tenant_city_town">City/Town:</label></td>
                <td><input type="text" id="tenant_city_town" name="tenant_city_town"><br></td>
              </tr>

              <tr>
                <td><label for="tenant_province">Province:</label></td>
                <td><input type="text" id="tenant_province" name="tenant_province"><br></td>
              </tr>

              <tr>
                <td><label for="tenant_postal_code">Postal Code:</label></td>
                <td><input type="text" id="tenant_postal_code" name="tenant_postal_code"><br></td>
              </tr>
            </table>
            
            <div class="header-section">
            <h3>Contact Notices</h3>
            </div>

            <p>Both the landlord and tenant agree to receive notices and documents by email, where allowed by the Landlord and Tenant Board’s Rules of Procedure.</p>
            <label for="email_agreement">Agreement:</label>
            <input type="checkbox" id="email_agreement" name="email_agreement" value="yes">
            <label for="email_agreement">Yes</label>
            <input type="checkbox" id="no_email_agreement" name="email_agreement" value="no">
            <label for="email_agreement">No</label>
            
            <div id="email_address_container" style="display: none;">
                <label for="email_address">Email Address:</label>
                <input type="text" id="email_address" name="email_address">
            </div>

            <p>The landlord is providing phone and/or email contact information for emergencies or day-to-day communications:</p>
            <label for="phone_agreement">Agreement:</label>
            <input type="checkbox" id="phone_agreement" name="phone_agreement" value="yes">
            <label for="phone_agreement">Yes</label>
            <input type="checkbox" id="no_phone_agreement" name="phone_agreement" value="no">
            <label for="phone_agreement">No</label>
            
            <div id="phone_container" style="display: none;">
                <label for="tenant_phone_number">Phone Number:</label>
                <input type="text" id="tenant_phone_number" name="tenant_phone_number">
            </div>
        
            <div class="header-section">
            <h3>Tenancy Occupancy Timings</h3>
            </div>
            
            <label for="tenancy_start_date">This tenancy starts on:</label>
            <input type="date" id="tenancy_start_date" name="tenancy_start_date">

            <p>This tenancy agreement is for: (select an option below and fill in details as needed)</p>

            <label for="tenancy_end_date">a fixed length of time ending on:</label>
            <input type="date" id="tenancy_end_date" name="tenancy_end_date">

            <div class="header-section">
            <h3>Services and Utilities</h3>
            </div>

            <p>The following services are included in the lawful rent for the rental unit, as specified:</p>
            
            <label for="gas">Gas:</label>
            <input type="radio" id="gas_yes" name="gas" value="Yes">
            <label for="gas_yes">Yes</label>
            <input type="radio" id="gas_no" name="gas" value="No">
            <label for="gas_no">No</label><br>

            <label for="air_conditioning">Air conditioning:</label>
            <input type="radio" id="ac_yes" name="air_conditioning" value="Yes">
            <label for="ac_yes">Yes</label>
            <input type="radio" id="ac_no" name="air_conditioning" value="No">
            <label for="ac_no">No</label><br>

            <label for="additional_storage">Additional storage space:</label>
            <input type="radio" id="storage_yes" name="additional_storage" value="Yes">
            <label for="storage_yes">Yes</label>
            <input type="radio" id="storage_no" name="additional_storage" value="No">
            <label for="storage_no">No</label><br>

            <label for="on_site_laundry">On-Site Laundry:</label>
            <input type="radio" id="laundry_yes" name="on_site_laundry" value="Yes">
            <label for="laundry_yes">Yes</label>
            <input type="radio" id="laundry_no" name="on_site_laundry" value="No">
            <label for="laundry_no">No</label><br>

            <label for="guest_parking">Guest Parking:</label>
            <input type="radio" id="parking_yes" name="guest_parking" value="Yes">
            <label for="parking_yes">Yes</label>
            <input type="radio" id="parking_no" name="guest_parking" value="No">
            <label for="parking_no">No</label><br>


            <div class="header-section">
            <h3>Responsibility of Utilities</h3>
            </div>

            <p>The following utilities are the responsibility of: </p>
            <label for="electricity_responsibility">Electricity:</label>
            <input type="radio" id="electricity_landlord" name="electricity_responsibility" value="Landlord">
            <label for="electricity_landlord">Landlord</label>
            <input type="radio" id="electricity_tenant" name="electricity_responsibility" value="Tenant">
            <label for="electricity_tenant">Tenant</label><br>

            <label for="heat_responsibility">Heat:</label>
            <input type="radio" id="heat_landlord" name="heat_responsibility" value="Landlord">
            <label for="heat_landlord">Landlord</label>
            <input type="radio" id="heat_tenant" name="heat_responsibility" value="Tenant">
            <label for="heat_tenant">Tenant</label><br>

            <label for="water_responsibility">Water:</label>
            <input type="radio" id="heat_landlord" name="water_responsibility" value="Landlord">
            <label for="water_landlord">Landlord</label>
            <input type="radio" id="heat_tenant" name="water_responsibility" value="Tenant">
            <label for="water_tenant">Tenant</label><br>

            <div class="header-section">
            <h3>Terms and Conditions</h3>
            </div>

            <label for="terms_and_conditions">Please read and agree to the terms and conditions:</label><br>
            <textarea id="terms_and_conditions" name="terms_and_conditions" rows="5" cols="50"></textarea><br>
            
            <div class="header-section">
            <h3>Payment and Details</h3>
            </div>

            <label for="retail_unit">Rental Fees (per month):</label>
            <input type="number" id="rental_fees" name="rental_fees"><br>
            <label for="retail_unit">Payment Method of Choice:</label>
            <input type="text" id="rental_fees_methods" name="rental_fees_methods"><br>

            <br>
            <button class="submit" type="submit" >Submit</button>

          </form>

        <script>

        document.getElementById('add_rentee').addEventListener('click', function() {
          const renteeDiv = document.createElement('div');
          renteeDiv.classList.add('rentee');

          renteeDiv.innerHTML = 
            '<br>' +
            '<label for="first_name">First Name: </label>' +
            '<input type="text" class="first_name" name="first_name[]">' +
            '<label for="last_name"> Last Name: </label>' +
            '<input type="text" class="last_name" name="last_name[]">' +
            '&nbsp;' +
            '<button type="button" class="remove_rentee">Remove Rentee</button>';
          document.getElementById('rentees').appendChild(renteeDiv);
      });
       

        const emailAgreementCheckbox = document.getElementById('email_agreement');
        const emailAddressContainer = document.getElementById('email_address_container');

        document.addEventListener('click', function(event) {
          if (event.target.classList.contains('remove_rentee')) {
              event.target.parentNode.remove();
          }
      });

      function getRenteeNames() {
        const renteeFirstNames = [];
        const renteeLastNames = [];
        const renteeInputs = document.querySelectorAll('.rentee');
        renteeInputs.forEach(rentee => {
            const firstName = rentee.querySelector('.first_name').value;
            const lastName = rentee.querySelector('.last_name').value;
            renteeFirstNames.push(firstName);
            renteeLastNames.push(lastName);
        });
    }

        emailAgreementCheckbox.addEventListener('change', function() {
            if (this.checked) {
                emailAddressContainer.style.display = 'block';
            } else {
                emailAddressContainer.style.display = 'none';
            }
        });

        const phoneAgreementCheckbox = document.getElementById('phone_agreement');
        const phoneAddressContainer = document.getElementById('phone_container');

        phoneAgreementCheckbox.addEventListener('change', function() {
            if (this.checked) {
                phoneAddressContainer.style.display = 'block';
            } else {
                phoneAddressContainer.style.display = 'none';
            }
        });

        </script>
    </body>
    </html>
    `)
});


app.post('/', (req, res) => {

  const landlordName = req.body.landlord_name;
  const retailUnit = req.body.retail_unit;
  const streetNumber = req.body.street_number;
  const streetName = req.body.street_name;
  const cityTown = req.body.city_town;
  const province = req.body.province;
  const postalCode = req.body.postal_code;

  const renteeFirstNames = Array.isArray(req.body.first_name) ? req.body.first_name : [req.body.first_name];
  const renteeLastNames = Array.isArray(req.body.last_name) ? req.body.last_name : [req.body.last_name];

  const tenantRetailUnit = req.body.tenant_retail_unit;
  const tenantStreetNumber = req.body.tenant_street_number;
  const tenantStreetName = req.body.tenant_street_name;
  const tenantPOBox = req.body.tenant_POBox;
  const tenantCityTown = req.body.tenant_city_town;
  const tenantProvince = req.body.tenant_province;
  const tenantPostalCode = req.body.tenant_postal_code;

  const emailAgreement = req.body.email_agreement;
  const emailAddress = req.body.email_address;

  const phoneAgreement = req.body.phone_agreement;
  const tenantPhoneNumber = req.body.tenant_phone_number;

  const tenancyStartDate = req.body.tenancy_start_date;
  const tenancyEndDate = req.body.tenancy_end_date;

  const termsAndConditions = req.body.terms_and_conditions;

  const gas = req.body.gas;
  const airConditioning = req.body.air_conditioning;
  const additionalStorage = req.body.additional_storage;
  const onSiteLaundry = req.body.on_site_laundry;
  const guestParking = req.body.guest_parking;

  const electricity = req.body.electricity_responsibility;
  const heat = req.body.heat_responsibility;
  const water = req.body.water_responsibility;

  const fees = req.body.rental_fees;
  const feePayment = req.body.rental_fees_methods;

  const htmlContent = `
  <style>

  @page {
    margin-top:50px;
  }
    body{
      padding:50px;
    }

    .header-section {
        background-color: lightgrey;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding-top: 1px;
        padding-bottom: 1px;
    }

    .box{
      margin-left:50px;
      padding: 1px;
      border: 1px solid black;
      width: 1000px;
    }
    .gap {
      margin-right: 450px;
    }

    p{
      font-size: 1.17em;
    }

    table{
      border-collapse: collapse;
      width:100%;
    }
    td{
      font-size: 1.17em;
      padding: 1px;
      text-align: left;
    }

    td p{
      font-size: 1.17em;
      padding: 1px;
      text-align: left;
    }
    li{
      font-size:1.17em;
    }

    
  </style>
  
    <h1>Residential Tenancy Agreement</h1>
    
    <h3>This Residential Lease Agreement (“Agreement”) made on <span id="datePlaceholder"></span> is between:</h3>
    
      <script>
        const today = new Date();
        const formattedDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        document.getElementById('datePlaceholder').textContent = formattedDate;
      </script>

    <h3>Landlord Information:</h3>
    <div class="box">
      <p><strong>Landlord's Legal Name: </strong> ${landlordName}</p>
    </div>
    
    <h3>Rentee Information:</h3>

    <p>In the event there is more than one Tenant, each reference to "Tenant" shall apply to each of them, jointly and severally. Each Tenant is jointly and severally liable to Landlord for payment of rent and performance in accordance with all other terms of this Agreement. Each Landlord and Tenant may be referred to individually as a "Party" and collectively as the "Parties."
    
    ${renteeFirstNames.map((firstName, index) => `
    ${renteeFirstNames.length > 1 ? `<p><strong>Rentee ${index + 1}:</strong></p>` : ''}
      <div class="box">
        <p><strong>First Name: </strong> ${firstName} <span class="gap"></span> <strong>Last Name: </strong> ${renteeLastNames[index]}</p>
      </div>
    `).join('')}

    <br>
     
    <div class="header-section">
    <h3>A. Rental Unit Information:</h3>
    </div>

    <p>PREMISES LEASED: The landlord, in consideration of the rent to be paid, and covenants and agreements to be to be performed by the Tenant, does hereby lease the following described premises located at <u>${retailUnit}</u>, <u>${streetNumber} ${streetName}</u>, <u>${cityTown} ${province}</u>, <u>${postalCode}</u> (hereinafter referred to as the "Premises"). The Premises shall include the following personal property owned by the Landlord: <u>${landlordName}</u></p>
    

    <div class="header-section">
    <h3>B. Tenant Contact Information:</h3>
    </div>

    <p>Address for Giving Notices or Documents to the Tenant</p>
    
    <table>
      <tr>
          <td><strong>Retail Unit:</strong> ${tenantRetailUnit}</td>
          <td><strong>Street Number:</strong>${tenantStreetNumber}</td>
          <td colspan="2"><strong>Street Name:</strong>${tenantStreetName}</td>
      </tr>
      <tr>
          <td><strong>PO Box:</strong>${tenantPOBox}</td>
          <td><strong>City/Town:</strong>${tenantCityTown}</td>
          <td><strong>Province:</strong>${tenantProvince}</td>
          <td><strong>Postal Code:</strong>${tenantPostalCode}</td>
      </tr>
    </table>

    <p>Both the landlord and tenant agree to receive notices and documents by email, where allowed by the Landlord and Tenant Board’s Rules of Procedure.</p>
    <p><strong>Email Agreement: </strong>
    <span id="emailAgreementYes">${emailAgreement === 'yes' ? 'Yes [x]' : 'Yes [ ]'}</span> 
    <span id="emailAgreementNo">${emailAgreement === 'no' ? 'No [x]' : 'No [ ]'}</span>
    </p>

    ${emailAgreement === 'yes' ? `<p>Email Address: ${emailAddress}</p>` : ''}

    <p>The rentee is providing phone and/or email contact information for emergencies or day-to-day communications:</p>
    <p><strong>Phone Agreement: </strong>
        <span id="phoneAgreementYes">${phoneAgreement === 'yes' ? 'Yes [x]' : 'Yes [ ]'}</span> 
        <span id="phoneAgreementNo">${phoneAgreement === 'no' ? 'No [x]' : 'No [ ]'}</span>
    </p>

    ${phoneAgreement === 'yes' ? `<p>Phone Number: ${tenantPhoneNumber}</p>` : ''}


    <div class="header-section">
    <h3>C. Landlord Contact Information:</h3>
    </div>

    <p>Address for Giving Notices or Documents to the Landlord</p>
    
    <table>
      <tr>
          <td><strong>Retail Unit:</strong> 123 </td>
          <td><strong>Street Number:</strong> 43</td>
          <td colspan="2"><strong>Street Name:</strong> Royal Crown Street</td>
      </tr>
      <tr>
          <td><strong>PO Box:</strong> 123456 </td>
          <td><strong>City/Town:</strong> North York</td>
          <td><strong>Province:</strong> Ontario</td>
          <td><strong>Postal Code:</strong>L4E 1S4</td>
      </tr>
    </table>
    
    <div class="header-section">
    <h3>D. Tenancy Occupancy Timings:</h3>
    </div>

    <p> The Tenant agrees to occupy said Premises for an original term commencing on <u>${tenancyStartDate}</u> and ending on the last day of <u>${tenancyEndDate}</u>. The Lease shall automatically renew on a month to month basis unless notice is given see sections 1 and 2.</p>

    <div class="header-section">
    <h3>E. Costs and Payment</h3>
    </div>

    <p>The monthly rent to be paid by the Renter to the Landlord is <u>${fees}</u>. It is to be paid by the Renter before the first day of every month, such that the first rent payment is due on ${tenancyStartDate}.</p>
    <p>The method of payment preferred by both parties is <u>${feePayment}</u>.</p>
    <p>In the even of late payments made by the Renter, the Landlord is entitled to impose a $100 fine as late fees.</p>
    <p>Prior to taking occupancy of the premises, the Renter will pay the Landlord an amount of <u>${fees}</u> (first months rent payment) as a security deposit to cover the cost of any damages suffered by the premises and cleaning. Such security deposit will be returned to the Renter upon the end of this Agreement, provided the premises are left in the same condition as prior to the occupancy.</p>

    <div class="header-section">
    <h3>E. Services and Utilities</h3>
    </div>

    <p>The following services are included in the lawful rent for the rental unit, as specified:</p>
    
    <table>
      <tr>
        <td>Gas:</td>

        <td>
              <span id="GasYes">${gas === 'Yes' ? 'Yes [x]' : 'Yes [ ]'}</span> 
              <span id="GasNo">${gas === 'No' ? 'No [x]' : 'No [ ]'}</span>
        </td>
      </tr>

      <tr>
        <td>Air Conditioning:</td>

        <td>
              <span id="AirConditioningYes">${airConditioning === 'Yes' ? 'Yes [x]' : 'Yes [ ]'}</span> 
              <span id="AirConditioningNo">${airConditioning === 'No' ? 'No [x]' : 'No [ ]'}</span>
        </td>
      </tr>

      <tr>
        <td>Additional Storage Space:</td>

        <td>
              <span id="StorageYes">${additionalStorage === 'Yes' ? 'Yes [x]' : 'Yes [ ]'}</span> 
              <span id="StorageNo">${additionalStorage === 'No' ? 'No [x]' : 'No [ ]'}</span>
        </td>
      </tr>

      <tr>
        <td>On-Site Laundry:</td>

        <td>
              <span id="LaundryYes">${onSiteLaundry === 'Yes' ? 'Yes [x]' : 'Yes [ ]'}</span> 
              <span id="LaundryNo">${onSiteLaundry === 'No' ? 'No [x]' : 'No [ ]'}</span>
        </td>
      </tr>

      <tr>
        <td>Guest parking:</td>

        <td>
              <span id="GuestParkingYes">${guestParking === 'Yes' ? 'Yes [x]' : 'Yes [ ]'}</span> 
              <span id="GuestParkingNo">${guestParking === 'No' ? 'No [x]' : 'No [ ]'}</span>
        </td>
      </tr>
    </table>

    <p>If any of the above specified are not included tenant will have to find their own means to obtain the following services and utilities. </p>

    <div class="header-section">
    <h3>F: Responsibility of Utilities</h3>
    </div>

    <p>The following utilities are the responsibility of: </p>

    <table>
      <tr>
        <td>Electricity: </td>

        <td>
        <span id="ElectricityYes">${electricity === 'Landlord' ? 'Landlord [x]' : 'Landlord [ ]'}</span> 
        <span id="ElectricityNo">${electricity === 'Tenant' ? 'Tenant [x]' : 'Tenant [ ]'}</span>
        </td>
      </tr>

      <tr>
        <td>Heat: </td>
        
        <td>
        <span id="HeatYes">${heat === 'Landlord' ? 'Landlord [x]' : 'Landlord [ ]'}</span> 
        <span id="HeatNo">${heat === 'Tenant' ? 'Tenant [x]' : 'Tenant [ ]'}</span>
        </td>
      </tr>

      <tr>
        <td>Hydro: </td>
        
        <td>
        <span id="ElectricityYes">${water === 'Landlord' ? 'Landlord [x]' : 'Landlord [ ]'}</span> 
        <span id="ElectricityNo">${water === 'Tenant' ? 'Tenant [x]' : 'Tenant [ ]'}</span>
        </td>
      </tr>
    </table>

    <p>If the tenant is responsible for any utilities, provide details of the arrangement, e.g. tenant sets up account with and pays the utility provider, tenant pays a portion of the utility costs, etc</p>

    <div class="header-section">
    <h2>Terms and Conditions Received</h2>
    </div>

    <p>${termsAndConditions ? termsAndConditions : 'The tenant has no further terms and conditions to add to the Residential Tenancy Agreement'}</p>

    <h1>Residential Tenancy Agreement Index</h1>

    <div class="header-section">
    <h2>1. Renewing a Tenancy Agreement</h2>
    </div>

    <p>If the landlord and tenant agree that the tenancy will last for a specific period of time, this is called a fixed term tenancy. This is because both the start and end date are set out in the tenancy agreement.</p>
    <p>The end of an agreement does not mean the tenant has to move out or sign a renewal or new agreement in order to stay. The rules of the agreement will still apply and the tenant still has the right to stay:</p>
    <ul>
      <li>as a monthly tenant, if the agreement was for a fixed term or monthly tenancy,</li>
      <li>as a weekly tenant, if the agreement was for a weekly tenancy, or </li>
      <li>as a daily tenant, if the agreement was for a daily tenancy. </li>
    </ul>

    <p>The landlord and tenant can also agree to renew the agreement for another fixed term or enter into a new agreement. In any case, changes to the rent must follow the rules under the Act (see Part I below for further information). </p>

    <div class="header-section">
    <h2>2. Ending the Tenancy</h2>
    </div>

    <p>The landlord or tenant must follow the rules of the Act when ending a tenancy. </p>
    <p><strong>When the tenant can end the tenancy</strong></p>
    <p>The tenant can end a tenancy by giving the landlord proper notice using the appropriate Landlord and Tenant Board form. They must give:</p>

    <ul>
      <li>at least 60 days’ notice if they have a monthly or fixed term tenancy, or</li>
      <li>at least 28 days’ notice if they have a daily or weekly tenancy.</li>
    </ul>

    <p>For a fixed term tenancy, the notice cannot be effective before the last day of the fixed term. For a monthly or weekly tenancy, the notice must be effective on the last day of a rental period (e.g. month or week). In certain situations, a tenant who has experienced sexual or domestic violence can give 28 days’ notice to end the tenancy at any time, even if the tenant has a fixed term agreement (e.g., one year agreement). They must use the notice form approved by the Landlord and Tenant Board.</p>

    <div class="header-section">
    <h2>3. Tenant's Insurance</h2>
    </div>

    <p> The tenant must have liability insurance at all times. If the landlord asks for proof of coverage, the tenant must provide it. It is up to the tenant to get contents insurance if they want it.</p>

    <div class="header-section">
    <h2>4. Maintenance and Repairs</h2>
    </div>

    <p> The landlord must keep the rental unit and property in good repair and comply with all health, safety and maintenance standards.
      The tenant must repair or pay for any undue damage to the rental unit or property caused by the wilful or negligent conduct of the tenant, the tenant’s guest or another person who lives in the rental unit. 
      The tenant is responsible for ordinary cleanliness of the rental unit, except for any cleaning the landlord agreed to do. </p>

    <div class="header-section">
    <h2>5. Assignment and Subletting</h2>
    </div>

    <p>The tenant may assign or sublet the rental unit to another person only with the consent of the landlord. The landlord cannot arbitrarily or unreasonably withhold consent to a sublet or potential assignee.</p>

    <div class="header-section">
    <h2>Signatures</h2>
    </div>

    <p>By signing this agreement, the landlord(s) and the tenant(s) agree to follow its terms. The landlord(s) or tenant(s) can sign this lease electronically if they both agree.</p>
    <p>Unless otherwise agreed in the additional terms under Section 15, if there is more than one tenant, each tenant is responsible for all tenant obligations under this agreement, including the full amount of rent. </p>

    <p><strong>Landlord:</strong></p>
    <table>
      <tr>
        <td><strong>Name:</strong></td>
        <td><strong>Signature:</strong></td>
      </tr>

      <tr>
        <td>${landlordName}</td>
        <td><input type="text" id="landlordName" name="landlordName"></td>
      </tr>
    </table>

    <p><strong>Tenant(s):</strong></p>
    <table>
    <tr>
      <td><strong>Name:</strong></td>
      <td><strong>Signature:</strong></td>
    </tr>

      ${renteeFirstNames.map((firstName, index) => `
        <tr style="margin-bottom: 5px;">
          <td>${firstName} ${renteeLastNames[index]}</td>
          <td><input type="text" id="Name" name="Name"></td>
        </tr>
      `).join('')}
    </table>

    <p><strong>Lease Agreement End</strong><p>
`;

pdf.create(htmlContent).toBuffer((err, buffer) => {
  if (err) {
    res.status(500).send('Error generating PDF');
  } else {
    // Send the PDF as a response
    res.contentType('application/pdf').send(buffer);
  }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

