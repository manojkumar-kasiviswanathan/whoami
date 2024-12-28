import ExperienceCard from './ExperienceCard';
import {LuBriefcaseConveyorBelt} from "react-icons/lu";

const experiences = [
    {
        title: 'Test Automation Engineer Specialist',
        company: 'ACCENTURE (Client: DWP)',
        period: 'NOV 2021 - Present',
        description: 'Leading test automation initiatives and implementing DevOps practices for enterprise applications.',
        responsibilities: [
            `Developed and maintained a comprehensive test suite for regression testing`,
            `Collaborated with stakeholders to understand project needs and develop detailed test plans`,
            `Integrated Automation tests pack into the Gitlab pipeline for continuous integration`,
            `Reviewed code with developers, testing, and suggesting improvements`,
            `Created the Grafana dashboard for the production service and used prometheus query language`,
            `Supported the creation of a separate testing framework (TAS) and published in nexus`,
            `Implemented and maintained containerization technologies such as Docker for local service operation and testing`,
        ]
    },
    {
        title: 'Senior Software Engineer',
        company: 'Wipro (Client: CapitalOne UK)',
        period: 'FEB 2017 - OCT 2021',
        description: 'The service is utilised by the consumer to pay the monthly credit card statement payment. Multiple service \n' +
            'Multiple services are involved, the most important of which are a customer-facing website, \n' +
            'microservice (APIs), and a 3D secured payment gateway.',
        responsibilities: [
            'Collaborate with stakeholders to understand project requirements and define comprehensive test plans.',
            'Identify test scenarios, test cases, and acceptance criteria.',
            'Design, develop, and maintain automated test scripts for web applications and APIs, Use automation tools such as cucumber, Protractor, Cypress Restassured and Selenium Web Driver , implement and maintain a robust and scalable automated testing framework.',
            'Identify and report defects, working closely with development teams for resolution.',
            'Perform regression testing to ensure the stability of software releases.',
            'Work closely with developers, product managers, and other stakeholders to ensure a shared understanding of testing requirements.',
            'Participate in Agile/Scrum ceremonies and provide input on testing-related aspects.',
            'Mentored junior team members in automation best practices and provided training sessions on testing tools.',
            'Use tools such as Jenkins, GitLab CI to automate build, test, and deployment processes.',
            'Working on the creating production changes in service now, supporting production change, implementation and on-call support was my responsibility because it was a payment project and any problems would be reported as sev 5.'
        ]
    },
    {
        title: 'Test Engineer',
        company: 'Wipro (Client- CapitalOne UK)',
        period: 'SEP 2013 - JAN 2017',
        description: 'Specialized in credit card eligibility checker application testing.',
        responsibilities: [
            'Determining and selecting automation test scenarios.',
            'Developing an automation test plan and approach, as well as obtaining permission.',
            'Configuring the BDD Test Environment in order to get it up and running.',
            'Automating the framework design process.',
            'Creating a performance test plan and carrying it out in JMeter. Implementing it in accordance',
            'with the project\'s framework.',
            'Developed detailed test plans for Ab Initio ETL testing.',
            'Identified and documented issues and defects in Ab Initio ETL testing.',
            'Creating TCR in accordance with the test strategy'
        ]
    }
];

export default function Experience() {
    return (
        <section className="py-20" id="experience">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 rounded-xl bg-blue-500/10">
                        <LuBriefcaseConveyorBelt className="w-6 h-6 text-blue-400"/>
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Work Experience
                    </h2>
                </div>

                <div className="relative">
                    <div
                        className="absolute top-0 left-4 w-px h-full bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent"/>
                    <div>
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={index}
                                {...exp}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}