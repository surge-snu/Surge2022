import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Terms.scss";

export async function getServerSideProps(context) {
  return {
    props: {
      currentPath: context.req.url,
    },
  };
}

export default function Terms() {
  return (
    <div className="TermsPage__container">
			<div className="TermsPage__Heading">
				<h2>Terms & Conditions</h2>
				<hr />
			</div>
			<div className="TermsPage__Content">
				<h3>1. Introduction</h3>
				<pre>
					These Website Standard Terms And Conditions (these “Terms” or these “Website Standard Terms And Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website if you have any objection to any of the Website's Standard Terms And Conditions.
					This Website is not for use by any minors (defined as those who are not at least 18 years of age), and you must not use this Website if you a minor.
				</pre>
				<h3>2. Intellectual Property Rights</h3>
				<pre>
					Other than the content you own, which you may have opted to include on this Website, under these Terms, 
					Surge and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved. You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website.
				</pre>
				<h3>3. Restrictions</h3>
				<pre>
					You are expressly and emphatically restricted from all of the following:
					publishing any Website material in any media;
					selling, sublicensing and/or otherwise commercializing any Website material;
					publicly performing and/or showing any Website material;
					using this Website in any way that is, or maybe, damaging to this Website;
					using this Website in any way that impacts user access to this Website;
					using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity;
					engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website;
					using this Website to engage in any advertising or marketing;
					Certain areas of this Website are restricted from access by you and Surge may further restrict access by you to any areas of this Website, at any time, in its sole and absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality of such information.
				</pre>
				<h3>4. Your Content</h3>
				<pre>
					In these Website Standard Terms And Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website. With respect to Your Content, by displaying it, you grant Surge a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media. Your Content must be your own and must not be infringing on any third party’s rights.
					Surge reserves the right to remove any of Your Content from this Website at any time, and for any reason, without notice.
				</pre>
				<h3>5. No warranties</h3>
				<pre>
					This Website is provided “as is,” with all faults, and Surge makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you.
				</pre>
				<h3>6. Limitation of liability</h3>
				<pre>
					In no event shall Surge, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Surge, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website. 
				</pre>
				<h3>7. Indemnification</h3>
				<pre>
					You hereby indemnify to the fullest extent Surge from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney’s fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
				</pre>
				<h3>8. Severability</h3>
				<pre>
					If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.
				</pre>
				<h3>9. Variation of Terms</h3>
				<pre>
					Surge is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing the use of this Website.
				</pre>
				<h3>10. Assignment</h3>
				<pre>
					Surge shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, .you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
				</pre>
				<h3>11. Entire Agreement</h3>
				<pre>
					These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between Surge and you in relation to your use of this Website and supersede all prior agreements and understandings with respect to the same.
				</pre>
				<h3>12. Governing Law & Jurisdiction</h3>
				<pre>
				These Terms will be governed by and construed in accordance with the laws of the state of Uttar Pradesh, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Uttar Pradesh for the resolution of any disputes.
				</pre>
			</div>
    </div>
  );
}

Terms.getLayout = function getLayout(page) {
  return (
    <div className="TermsPage">
      <Header currentPath="terms" />
      {page}
      <Footer />
    </div>
  );
};
