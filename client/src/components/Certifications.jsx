import AwsCert from '../assets/images/certificates/aws-certified-solutions-architect-associate.png'
import MsAzure from '../assets/images/certificates/microsoft-certified-azure-fundamentals.png'
import PwcHCD from '../assets/images/certificates/human-centered-design.png'
import PwcDA from '../assets/images/certificates/digital-acumen.png'

// eslint-disable-next-line react/prop-types
const CertificateCard = ({ certificateName }) => {
    return (
        <>
            <div className='w-[200px] shadow-xl border m-2 p-3 flex flex-col items-center justify-center'>
                <img src={certificateName} alt="certificate icon" />
                {/* <h1 className='text-md'>{title}</h1> */}
            </div>
        </>
    )
}

const Certifications = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-6'>
                <div className="mt-6 py-4">
                    <h1 className="text-7xl font-bold items-center justify-center">Certifications</h1>
                </div>
                <div className="flex">
                    <CertificateCard title="Javascript" certificateName={AwsCert} />
                    <CertificateCard title="ReactJs" certificateName={MsAzure} />
                    <CertificateCard title="NodeJS" certificateName={PwcHCD} />
                    <CertificateCard title="MongoDB" certificateName={PwcDA} />
                </div>
            </div>

        </>
    )
}

export default Certifications