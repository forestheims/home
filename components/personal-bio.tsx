import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import { useState } from 'react'

type Props = {
  preview?: boolean
}

const PersonalBio = ({ preview }: Props) => {
  const [techStack, setTechStack] = useState([
    'html',
    'css',
    'javascript',
    'node',
    'react',
    'postgresql',
    'csharp',
    'unity',
  ]);

  return (
    <article className="flex flex-col mb-32">
          <div className="flex row mb-16 place-self-center container justify-center flex-wrap">
            {techStack.map((tech) => {
              return (
                <img className="m-4 h-16" key={tech} src={`./tech/${tech}.png`} />
                );
              })}
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="mb-8">This website was created by Forest Heims, a thoughtful software engineer confident and competent in planning, building and deploying full stack applications using the PERN stack (PostgreSQL, Express, React, Node).</p>
            <p className="mb-8">Forest is versed in and enjoys the creativity and psychology aspects of UX/UI Design, as well as systematic Test Driven Development writing, updating and debugging RESTful API's.</p>
            <p className="mb-8">Forest is particularly interested in bioinformatics, psychology, 3D engineering, audio engineering, audio visualization, game development, Linux, cybersecurity, computational chemistry/biology, genetic algorithms, drug discovery, organic chemistry, psychopharmacology, psychonautics, and open source software and education.</p>
            <p className="mb-8">Forest comes from an academic background of chemistry, philosophy, and art. Education will always be a value held, and Forest enjoys teaching and continuously learning.</p>
            <p className="mb-8">Forest's hobbies include hiking, juggling, surfing the web, rollerskating, and printmaking. Essential Oil and Hydrosol distillation is a process Forest is also fond of.</p>
          </div>
          <img src="/foxy.gif"
            alt="cute animated fox face gif" width={220} height={180} className="place-self-center" />
        </article>
  )
}

export default PersonalBio
