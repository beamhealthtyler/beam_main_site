import Style from './Styles/FAQ.module.css'

const FAQ = () => {
  return (
    <div className={Style.backgroundImg}>
      <div className='container'>
        <div className={"row " + Style.section}>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/Group-1172.png"></img>
          </div>
          <div className="col-md-6">
            <h1 className='title'>You have questions, we have answers</h1>
          </div>
        </div>
        <div className={"row " + Style.section2}>
          <div className="col">
            <h1 className='title'>Hi, how can we help?</h1>
            <p>What is Beam?</p>
            <p>How do I sign up for Beam?</p>
            <p>As a provider, why should I use Beam?</p>
            <p>How much will Beam charge me?</p>
            <p>Will integrating telemedicine into my practice be an intensive process?</p>
            <p>What if I am I’m already too busy as it is?</p>
            <p>When would I conduct telemedicine visits?</p>
            <p>Is my information safe on Beam?</p>
            <p>Does insurance cover telemedicine? What will patients pay?</p>
            <p>Are my patients going to be sold other products when they sign up to Beam?</p>
            <p>Will my competitors have access to my patients on Beam?</p>
            <p>How much can I earn with Beam?</p>
            <p>How can I encourage patients to use Beam?</p>
            <p>How does billing work with Beam?</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FAQ;
