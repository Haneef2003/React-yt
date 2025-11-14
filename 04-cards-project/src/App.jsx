import React from 'react'
import Card from './components/Card'
const App = () => {

const jobs = [
  {
    companyLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    postDate: "5 days ago",
    jobPost: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    price: "$85 per hour",
    location: "Mumbai, India",
  },
  {
    companyLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    postDate: "2 weeks ago",
    jobPost: "React Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    price: "$110 per hour",
    location: "Remote",
  },
  {
    companyLogo: "https://static.vecteezy.com/system/resources/previews/019/766/223/non_2x/amazon-logo-amazon-icon-transparent-free-png.png",
    companyName: "Amazon",
    postDate: "3 days ago",
    jobPost: "JavaScript Developer",
    tag1: "Part-Time",
    tag2: "Junior Level",
    price: "$70 per hour",
    location: "Hyderabad, India",
  },
  {
    companyLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    postDate: "1 week ago",
    jobPost: "UI Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    price: "$130 per hour",
    location: "Bangalore, India",
  },
  {
    companyLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    postDate: "4 days ago",
    jobPost: "Frontend Specialist",
    tag1: "Contract",
    tag2: "Senior Level",
    price: "$140 per hour",
    location: "Remote",
  },
  {
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    postDate: "6 days ago",
    jobPost: "React.js Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    price: "$100 per hour",
    location: "Delhi, India",
  },
  {
    companyLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    postDate: "3 weeks ago",
    jobPost: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    price: "$150 per hour",
    location: "San Francisco, USA",
  },
  {
    companyLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    postDate: "2 days ago",
    jobPost: "Web Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    price: "$95 per hour",
    location: "Austin, USA",
  },
  {
    companyLogo: "https://logo.clearbit.com/stripe.com",
    companyName: "Stripe",
    postDate: "1 day ago",
    jobPost: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    price: "$145 per hour",
    location: "Remote",
  },
  {
    companyLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    postDate: "4 weeks ago",
    jobPost: "React UI Developer",
    tag1: "Part-Time",
    tag2: "Junior Level",
    price: "$65 per hour",
    location: "London, UK",
  },
];


  return (
    <div className="parent">
      {jobs.map(function(elem){
        return  <Card 
        logo={elem.companyLogo}
        company={elem.companyName}
        date={elem.postDate}
        post={elem.jobPost}
        tag1={elem.tag1}
        tag2={elem.tag2}
        price={elem.price}
        location={elem.location}/>
      })}
   
    
    </div>
  )
}

export default App
