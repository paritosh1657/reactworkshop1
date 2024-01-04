import './App.css';
const Profile= ()=>{
  const details= {
    name: "Albert Einstein",
    date_of_birth: "14 May 1904",
    discoveries: "Theory of Relativity"
  }
  return (
    <>
      <img src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      className="photo"
      />
      <div>
        <h5>Personal Details</h5>
        <ul style={{listStyle: 'none'}}>
        <li><b>Name : </b>{details.name}</li>
        <li><b>Date of Birth : </b>{details.date_of_birth}</li>
        <li><b>Discoveries : </b>{details.discoveries}</li>
        </ul>

      </div>
    </>
  )
}
export default Profile