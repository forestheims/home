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
                <img className="m-4 h-16" key={tech} src={`./tech/${tech}.png`} alt={`${tech} logo, as a part of a visual display of my growing tech stack`} />
                );
              })}
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="mb-8">Hello, friend.</p>
            <p className="mb-8">I am a thoughtful software engineer confident and competent in planning, building and deploying full stack applications. I am most fluent and familiar with deploying projects built with the PERN stack (PostgreSQL, Express, React, Node), but am highly adaptable to other OOP tech stacks.</p>
            <p className="mb-8">I am versed in and enjoy the creative and psychological aspects of UX/UI Design, as well as systematically writing, updating and debugging RESTful API's in a test driven fashion.</p>
            <p className="mb-8">Particular interests of mine include bioinformatics, psychology, 3D engineering, audio engineering, audio visualization, game development, Linux, cybersecurity, computational chemistry/biology, genetic algorithms, drug discovery, organic chemistry, psychopharmacology, psychonautics, and open source software and education.</p>
            <p className="mb-8">I come from an academic background of chemistry, philosophy, and art. Education will always be a value I hold, and I also love to teach and continuously learn.</p>
            <p className="mb-8">Some of my hobbies include hiking, juggling, surfing the web, rollerskating, and printmaking. Essential Oil and Hydrosol distillation is a process I am also fond of practicing and learning about.</p>
            <p className="mb-8">Thanks for stopping by,</p>
            <p className="mb-8">- F</p>
          </div>
          <img src="/foxy.gif"
            alt="cute animated fox face gif" width={220} height={180} className="place-self-center" />
        </article>
  )
}

export default PersonalBio
