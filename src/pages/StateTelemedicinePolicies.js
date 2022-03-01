import Style from './Styles/StateTelemedicinePolicies.module.css'

const StateTelemedicinePolicies = () => {
  return (
    <>
      <div className='container'>
        <div className={"row " + Style.section1}>
          <div className="col-md-6">
            <h1 className='title'>Know where your state stands on telemedicine.</h1>
          </div>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-5-1.png"></img>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={'row '+ Style.section2Text}>
          <h1>At Beam, we have all the tools</h1>
          <h1>you need for Patient &</h1>
          <h1>Insurance Telemedicine Billing.</h1>
        </div>
      </div>

      <div className='container'>
        <div className={"row " + Style.section1}>
          <div className="col-md-6">
            <img className='image1' src="https://beam.health/wp-content/uploads/2021/12/image-4-1.png"></img>
          </div>
          <div className="col-md-6">
            <h1 style={{marginTop: '100px;'}}>Private Parity Laws</h1>
            <h1>Know where your state stands on telemedicine.</h1>
          </div>
        </div>
      </div>

      <div className={Style.backgroundImage}>
        <div className='container'>
          <div className={"row " + Style.section1}>
            <div className='col'>
              <h1>States</h1>
              <div style={{ display: 'flex'}}>
              <ul className={Style.list}>
                    <li><a href="https://beam.health/states/alabama/">Alabama</a></li>
                    <li><a href="https://beam.health/states/alaska/">Alaska</a></li>
                    <li><a href="https://beam.health/states/arizona/">Arizona</a></li>
                    <li><a href="https://beam.health/states/arkansas/">Arkansas</a></li>
                    <li><a href="https://beam.health/states/california/">California</a></li>
                    <li><a href="https://beam.health/states/colorado/">Colorado</a></li>
                    <li><a href="https://beam.health/states/conecticut/">Connecticut</a></li>
                    <li><a href="https://beam.health/states/delaware/">Delaware</a></li>
                    <li><a href="https://beam.health/states/florida/">Florida</a></li>
                    <li><a href="https://beam.health/states/georgia/">Georgia</a></li>
                    <li><a href="https://beam.health/states/hawaii/">Hawaii</a></li>
                    <li><a href="https://beam.health/states/idaho/">Idaho</a></li>
                    <li><a href="https://beam.health/states/illinois/">Illinois</a></li>
                    <li><a href="https://beam.health/states/indiana/">Indiana</a></li>
                    <li><a href="https://beam.health/states/iowa/">Iowa</a></li>
                    <li><a href="https://beam.health/states/kansas/">Kansas</a></li>
                    <li><a href="https://beam.health/states/kentucky/">Kentucky</a></li>
                    <li><a href="https://beam.health/states/louisiana/">Louisiana</a></li>
                    <li><a href="https://beam.health/states/maine/">Maine</a></li>
                    <li><a href="https://beam.health/states/maryland/">Maryland</a></li>
                    <li><a href="https://beam.health/states/massachusetts/">Massachusetts</a></li>
                    <li><a href="https://beam.health/states/michigan/">Michigan</a></li>
                    <li><a href="https://beam.health/states/minnesota/">Minnesota</a></li>
                    <li><a href="https://beam.health/states/mississippi/">Mississippi</a></li>
                    <li><a href="https://beam.health/states/missouri/">Missouri</a></li>
                    <li><a href="https://beam.health/states/montana/">Montana</a></li>
                    <li><a href="https://beam.health/states/nebraska/">Nebraska</a></li>
                    <li><a href="https://beam.health/states/nevada/">Nevada</a></li>
                    <li><a href="https://beam.health/states/new-hampshire/">New Hampshire</a></li>
                    <li><a href="https://beam.health/states/new-jersey/">New Jersey</a></li>
                    <li><a href="https://beam.health/states/new-mexico/">New Mexico</a></li>
                    <li><a href="https://beam.health/states/new-york/">New York</a></li>
                    <li><a href="https://beam.health/states/north-carolina/">North Carolina</a></li>
                    <li><a href="https://beam.health/states/north-dakota/">North Dakota</a></li>
                    <li><a href="https://beam.health/states/ohio/">Ohio</a></li>
                    <li><a href="https://beam.health/states/oklahoma/">Oklahoma</a></li>
                    <li><a href="https://beam.health/states/oregon/">Oregon</a></li>
                    <li><a href="https://beam.health/states/pennsylvania/">Pennsylvania</a></li>
                    <li><a href="https://beam.health/states/rhode-island/">Rhode Island</a></li>
                    <li><a href="https://beam.health/states/south-carolina/">South Carolina</a></li>
                    <li><a href="https://beam.health/states/south-dakota/">South Dakota</a></li>
                    <li><a href="https://beam.health/states/tennessee/">Tennessee</a></li>
                    <li><a href="https://beam.health/states/texas/">Texas</a></li>
                    <li><a href="https://beam.health/states/utah/">Utah</a></li>
                    <li><a href="https://beam.health/states/vermont/">Vermont</a></li>
                    <li><a href="https://beam.health/states/virginia/">Virginia</a></li>
                    <li><a href="https://beam.health/states/washington/">Washington</a></li>
                    <li><a href="https://beam.health/states/west-virginia/">West Virginia</a></li>
                    <li><a href="https://beam.health/states/wisconsin/">Wisconsin</a></li>
                    <li><a href="https://beam.health/states/wyoming/">Wyoming</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default StateTelemedicinePolicies;
