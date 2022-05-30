import React from 'react'

const ImproveSkills = () => {

    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
  return (
    <div className='improve-skills'>
        <div className='image'>
            <img src='/gallery/img_10.jpg' alt="food"/>
        </div>
        <div className='skills'>
            <h1 className='title'>Improve Your Culinary Skills</h1>
            <div className='custom-skill-container'>
            {list.map((skill,index)=>(
                <div className='custom-skill' key={index}>{skill}</div>
            ))}
            </div>
            <button className='improve-skill-btn'>SignUp Now</button>
        </div>
    </div>
  )
}

export default ImproveSkills;