import Js from '../assets/images/skillsImages/javascript-logo.png'
import React from '../assets/images/skillsImages/react-jsx-logo.png'
import Nodejs from '../assets/images/skillsImages/nodejs-icon.png'
import MongoDB from '../assets/images/skillsImages/mongodb-icon.png'
import Aws from '../assets/images/skillsImages/aws-icon.png'
import Certifications from './Certifications'


// eslint-disable-next-line react/prop-types
const SkillsCard = ({ tech }) => {
    return (
        <>
            <div className='w-[200px] shadow-xl border m-2 p-3 flex flex-col items-center justify-center'>
                <img src={tech} alt="skills icon" />
                {/* <h1 className='text-md'>{title}</h1> */}
            </div>
        </>
    )
}


const Skills = () => {
  return (
      <>
          <div className="mt-6 py-4 min-h-screen col-span-12 flex flex-col items-center px-32">
              <div>
                  <h1 className='text-7xl font-bold items-center justify-center'>Skills</h1>
              </div>
              <div className="flex mt-2">
                  <SkillsCard title="Javascript" tech={Js} />
                  <SkillsCard title="ReactJs" tech={React} />
                  <SkillsCard title="NodeJS" tech={Nodejs} />
                  <SkillsCard title="MongoDB" tech={MongoDB} />
                  <SkillsCard title="AWS" tech={Aws} />
              </div>
              <div>
                  <Certifications/>
              </div>
          </div>
          
      </>
  )
}

export default Skills