import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <ul>
            <li><b>Data Protection:</b> At Anon E-commerce Shop, we prioritize the protection of your personal information. Rest assured, your data is handled with the utmost care and in compliance with relevant data protection laws.</li>
            <li><b>Cookies and Tracking:</b> We use cookies to enhance your browsing experience. These tools help us improve our website functionality while respecting your privacy. You can manage your cookie preferences through your browser settings.</li>
            <li><b>Third-Party Services:</b> Occasionally, we may use trusted third-party services. Be assured that these services comply with our privacy standards and are chosen to enhance your overall experience.</li>
            <li><b>Updates to Privacy Policy:</b> Our privacy policy may be updated periodically. Stay informed about any changes by reviewing our policy page regularly. Your continued use of our website implies acceptance of these updates.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;