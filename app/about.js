function About() {
    return <div>
      Abouthelloworld  say hi say hi{process.env.customKey} and :{'my-value'}
      <p>
      {1>2?'2':'1'}
      </p>
      <p>
        {1==2?'2':'1'}
      </p>
      <p>
     a {process.env.imagePrefix} b
      </p>
    </div>
  }
  
  export default About
