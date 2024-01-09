import React from 'react';

interface SkillsProps {
  skills: string[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  
  return (
    <section id="skills" className="mb-8 flex flex-col dark:bg-inherit dark:text-white bg-gray-100 text-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mx-auto">Skills</h2>
      </div>
      <div className="flex flex-wrap mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-full px-4 py-2 m-2 hover:bg-blue-500 hover:transform   hover:delay-75 hover:text-white dark:bg-white dark:text-black bg-gray-200 text-gray-800"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// interface SkillsProps {
//   skills: string[];
// }

// export const Skills: React.FC<SkillsProps> = ({ skills }) => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 3,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 3,
//     },
//   };

//   return (
//     <section id="skills" className="mb-8 flex flex-col mx-auto dark:bg-inherit dark:text-white bg-gray-100 text-gray-800">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-3xl font-bold mx-auto">Skills</h2>
//       </div>
//       <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} containerClass="" itemClass="">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="rounded-full px-4 py-2 m-2 w-fit hover:bg-blue-500 hover:transform hover:delay-75 hover:text-white dark:bg-white dark:text-black bg-gray-200 text-gray-800"
//           >
//             {skill}
//           </div>
//         ))}
//       </Carousel>
//     </section>
//   );
// };
