import Style from './Styles/OnlinePayment.module.css'

const OnlinePayments = () => {
  return (
    <>
      <div className={Style.section1}>
      {console.log(Style)}
        <div className={"row"} >
          <div className="col-md-6">
            <h1 className='title'>Collect More Payments Online</h1>
            <p>Improve your patient pay services while boosting yearly revenue by 9%</p>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/07/invoice-w-blue-accent.png"></img>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage + ' ' + Style.section}>

        <div className='row'>
          <div className={Style.section2TextContainer}>
            <h2>Patient Friendly Billing</h2>
            <div>Give your patients more payment options, less hassle, and peace of mind.</div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <img className={Style.bankingImg} src="https://beam.health/wp-content/uploads/2021/12/credit-card-holder.png"></img>
              <div className={Style.bankingText}>
                <p>Credit card</p>
                <p>Securely store credit data and easily collect medical payments at the point of service or for future invoices</p>
              </div>
            </div>
            <div className='col-4'>
              <img className={Style.bankingImg} src="https://beam.health/wp-content/uploads/2021/12/Group-865.png"></img>
              <div className={Style.bankingText}>
                <p>Bank transfer</p>
                <p>Direct ACH bank transfer allowing you to reduce processing fees and receive payment faster</p>
              </div>
            </div>
            <div className='col-4'>
              <img className={Style.bankingImg} src="https://beam.health/wp-content/uploads/2021/12/Group-1157.png"></img>
              <div className={Style.bankingText}>
                <p>Payment plan</p>
                <p>Provide convenience with enhanced patient financing that ensures cost is never a factor in healthcare</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='container'>
        <div className={"row " + Style.section} >
          <div className="col-md-6">
            <div className='test'>
              <h1 className='title'>Improve Cashflow</h1>
              <p>Learn how AIM Medical’s Managing Director earned her practice an extra $100K!</p>
            </div>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/triangle-picture.png"></img>
          </div>
        </div>
      </div>

    </>
  )
};

export default OnlinePayments;
