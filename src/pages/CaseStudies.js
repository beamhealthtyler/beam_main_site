import Style from './Styles/Case-Studies.module.css'

const CaseStudies = () => {
  return (
      <div className={Style.background}>
        <div className='container'>
          <div className="row section1">
            <div className="col-md-6">
              <h1 className='title'>Customers</h1>
              <h1 className='title'>drive our</h1>
              <h1 className='title'>innovation.</h1>
            </div>
            <div className="col-md-6">
            </div>
          </div>

          <div className={'row ' + Style.section2}>
            <div className='col-md-4'>
              <img className={Style.img} src='https://beam.health/wp-content/uploads/2020/11/emergicenter-case4n.png'></img>
              <h2 className={Style.img}>Case #4 – Urgent Care facing COVID-19</h2>
              <p>Lean More ></p>
            </div>
            <div className='col-md-4'>
              <img className={Style.img} src='https://beam.health/wp-content/uploads/2020/11/Urgent-case3n.png'></img>
              <h2 className={Style.img}>Case #3 – Urgent Care looking to scale</h2>
              <p>Lean More ></p>
            </div>
            <div className='col-md-4'>
              <img className={Style.img} src='https://beam.health/wp-content/uploads/2020/11/medx-case2n.png'></img>
              <h2 className={Style.img}>Case #2 – Wellness / Medical Spa</h2>
              <p>Lean More ></p>
            </div>
          </div>

          <div className={Style.section}>
          <div className='col-md-4'>
            <img className={Style.img} src='https://beam.health/wp-content/uploads/2020/09/couchlogo-case1n.png'></img>
            <h2 className={Style.img}>Case #4 – Urgent Care facing COVID-19</h2>
            <p>Lean More ></p>
          </div>
          </div>
        </div>
      </div>
  )
};

export default CaseStudies;
