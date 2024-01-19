/* eslint-disable react/prop-types */
const EducationCard = ({ course ,study, schoolName, duration, location, description }) => {
    return (
        <>
            <div className="border shadow-xl mt-6 px-8 py-8">
                <div>
                    <span className="text-dark/75 text-xl">{course} in {study}</span> <span className="text-primary text-2xl font-bold">@{schoolName}</span>
                </div>
                <div className="text-sm text-dark/55">{duration} | {location}</div>
                <p>{description}</p>
            </div>

        </>
    )
}


const Education = () => {
    return (
        <>
            <div className="mt-6 py-4 w-full flex flex-col items-center">
                <h1 className='text-7xl font-bold items-center justify-center'>Education</h1>
                <div>
                    <EducationCard
                        course="Up-skilling"
                        study="Fullstack Engineering"
                        schoolName="Scaler Academy by InterviewBit"
                        duration="Aug 2022 - present"
                        location="Remote"
                        description="Relevant coursework in programme includes topics like  Data structure and Algorithm, Fullstack development in MERN. Cleared multiple expert mock interviews and earned certificates in JavaScript, React, and HLD."
                    />
                    <EducationCard
                        course="Bachelor's"
                        study="Electronics and Communication"
                        schoolName="ITER, S'O'A University"
                        duration="Aug 2016 - May 2020"
                        location="Bhubaneswar, Odisha"
                        description="Relevant coursework included the study of electronics and communication system, Control system, and programming in MATLAB. Developed problem solving skills and system designing."
                    />
                    <EducationCard
                        course="12th Higher Secondary Education"
                        study="PCMC Sciences"
                        schoolName="Kendriya Vidyalaya"
                        duration="Jun 2015 - May 2016"
                        location="Bargarh, Odisha"
                        description="Attended and successfully passed Higher Secondary Schooling in subjects of Physics, Chemistry, Mathematics, and Computer Sciences."
                    />
                    <EducationCard
                        course="10th Secondary Education"
                        study="CBSE board"
                        schoolName="Kendriya Vidyalaya"
                        duration="Jun 2013 - May 2014"
                        location="Bargarh, Odisha"
                        description="Attended and successfully passed Secondary Schooling in subjects of Science, Mathematics, Social Sciences, and Sanskrit."
                    />
                </div>
            </div>
        </>
    )
}

export default Education