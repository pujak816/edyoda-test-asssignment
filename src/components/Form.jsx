import React, { useState } from "react";
import styles from "../styles.module.css";
import { FaRupeeSign } from "react-icons/fa";
import { IoMdRadioButtonOn } from "react-icons/io";

const FormComponent = () => {
  const [subscription1, setSubscription1] = useState();
  const [subscription2, setSubscription2] = useState();
  const [subscription3, setSubscription3] = useState();

  return (
    <div className={styles.content_container}>
      <form className={styles.Form}>
        <div className={styles.Form__progressBar}>
          <div className={styles.Form__progressBar__stages}>
            <div className={styles.Form_Icon}>1</div>
            <p>Sign Up</p>
          </div>
          <div className={styles.Form__progressBar__stages}>
            <div className={styles.Form_Icon}>2</div>
            <p>Subscribe</p>
          </div>
        </div>
        <header>
          <p>Select your subscription plan</p>
        </header>
        <div className={styles.input_container}>
          <div className={styles.Form__plans} id={styles.Form__plans_expired}>
            <IoMdRadioButtonOn />
            <p className={styles.input_tag} id={styles.input_tag1}>
              Offer Expired
            </p>
            <div className={styles.input_text_Field}>
              <label htmlFor="">12 Months Subscription</label>
              <p className={styles.input_right}>
                Total <FaRupeeSign className={styles.input_rupee} />
                99 <br></br> <FaRupeeSign className={styles.input_rupee} />
                8/mo
              </p>
            </div>
          </div>

          <div
            className={styles.Form__plans}
            id={styles.Form__plans_recommended}
          >
            <input
              type="radio"
              name="subscription"
              value={99 / 12}
              id="plan1"
              onChange={(e) => setSubscription1(e.target.value)}
            />
            <div className={styles.input_text_Field}>
              <label htmlFor="">12 Months Subscription</label>
              <p className={styles.input_right}>
                Total{" "}
                <span className={styles.span_bold} id={styles.span_primary}>
                  {" "}
                  <FaRupeeSign className={styles.input_rupee} />
                  99
                </span>
                <br></br>{" "}
                <span className={styles.span_bold} id={styles.span_secondary}>
                  <FaRupeeSign className={styles.input_rupee} />
                  {subscription1}
                </span>
                /mo
              </p>
            </div>
            <p className={styles.input_tag} id={styles.input_tag2}>
              Recommended
            </p>
          </div>

          <div className={styles.Form__plans}>
            <input
              type="radio"
              name="subscription"
              value={99 / 6}
              onChange={(e) => setSubscription2(e.target.value)}
            />
            <div className={styles.input_text_Field}>
              <label htmlFor="">6 Months Subscription</label>
              <p className={styles.input_right}>
                Total{" "}
                <span className={styles.span_bold} id={styles.span_primary}>
                  {" "}
                  <FaRupeeSign className={styles.input_rupee} />
                  99
                </span>
                <br></br>{" "}
                <span className={styles.span_bold} id={styles.span_secondary}>
                  <FaRupeeSign className={styles.input_rupee} />
                  {subscription2}
                </span>
                /mo
              </p>
            </div>
          </div>

          <div className={styles.Form__plans}>
            <input
              type="radio"
              name="subscription"
              value={99 / 3}
              onChange={(e) => setSubscription3(e.target.value)}
            />
            <div className={styles.input_text_Field}>
              <label htmlFor="">3 Months Subscription</label>
              <p className={styles.input_right}>
                Total{" "}
                <span className={styles.span_bold} id={styles.span_primary}>
                  {" "}
                  <FaRupeeSign className={styles.input_rupee} />
                  99
                </span>
                <br></br>{" "}
                <span className={styles.span_bold} id={styles.span_secondary}>
                  <FaRupeeSign className={styles.input_rupee} />
                  {subscription3}
                </span>
                /mo
              </p>
            </div>
          </div>
        </div>

        <div className={styles.summary_container}>
          <div className={styles.summary_text_box}>
            <div className={styles.summary_innerdiv}>
              <p>Subscription Fee</p>{" "}
              <span className={styles.span_bold}>
                <FaRupeeSign className={styles.input_rupee} />
                18500
              </span>
            </div>
          </div>
          <div className={styles.summary_alert_box}>
            <div className={styles.summary_alert_header}>
              <p style={{ fontWeight: "bold" }}>Limited time offer</p>{" "}
              <span className={styles.span_bold}>
                -<FaRupeeSign className={styles.input_rupee} />
                18401
              </span>
            </div>
            <div className={styles.summary_alert_body}>
              <img
                src={require("../assets/Icon Clock.png")}
                alt="clockImg"
                width="18px"
              />
              <p style={{ fontSize: "12px" }}>
                Offer valid till 25th March 2023
              </p>
            </div>
          </div>
          <div className={styles.summary_text_box}>
            <div className={styles.summary_innerdiv}>
              <p id={styles.summary_text_left}>
                <span className={styles.span_bold}>Total </span>
                {"("}Incl. of 18% GST{")"}
              </p>
              <p id={styles.summary_text_right}>
                <FaRupeeSign />
                117
              </p>
            </div>
          </div>
        </div>

        <div className={styles.btn_container}>
          <button id={styles.secondary_btn}>CANCEL</button>
          <button id={styles.primary_btn}>PROCEED TO PAY</button>
        </div>

        <div className={styles.Icon_container}>
          <img src={require("../assets/Razorpay Icon.png")} alt="" />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
