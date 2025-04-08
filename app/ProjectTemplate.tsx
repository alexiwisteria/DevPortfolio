'use client';

import React from 'react';
import { ProjectContent } from './types/project';
import Card from './components/card';

interface ProjectTemplateProps {
  content: ProjectContent;
}

export default function ProjectTemplate({ content }: ProjectTemplateProps) {
  return (
    <div className="max-w-[1200px] mx-auto p-5 text-zinc-400">
      <div className="mb-10 space-y-6">
        <h1 className="text-4xl font-bold text-zinc-200 mb-8">{content.projectName}</h1>
        
        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Project Managers</h2>
            {content.projectManagers.map((manager, index) => (
              <div key={index}>
                {manager.name} - <a href={manager.linkedin} className="text-blue-400 hover:text-blue-300">LinkedIn</a>
              </div>
            ))}
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Scrum Master</h2>
            <div>
              {content.scrumMaster.name} - <a href={content.scrumMaster.linkedin} className="text-blue-400 hover:text-blue-300">LinkedIn</a>
            </div>
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Developers</h2>
            {content.developers.map((developer, index) => (
              <div key={index}>
                {developer.name} - <a href={developer.linkedin} className="text-blue-400 hover:text-blue-300">LinkedIn</a>
              </div>
            ))}
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Project Dates</h2>
            <div>Start Date: {content.dates.start}</div>
            <div>End Date: {content.dates.end}</div>
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Background</h2>
            <p>{content.background}</p>
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Objectives</h2>
            <ul className="list-disc ml-5 space-y-2">
              {content.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Target Audience</h2>
            <div>
              <h3 className="font-semibold text-zinc-300">Primary Users</h3>
              <p>{content.targetAudience.primary}</p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-300">Secondary Users</h3>
              <p>{content.targetAudience.secondary}</p>
            </div>
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Project Specifics</h2>
            {Object.entries(content.projectSpecifics).map(([key, value], index) => (
              <div key={index}>
                <h3 className="font-semibold text-zinc-300">{key}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Timeline</h2>
            {content.timeline.map((item, index) => (
              <div key={index} className="border-l-2 border-zinc-700 pl-4">
                <h3 className="font-semibold text-zinc-300">{item.task}</h3>
                {'owner' in item && <p>Owner: {item.owner}</p>}
                <p>Completed: {item.dateCompleted}</p>
                <p className="italic">{item.notes}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-200">Conclusion</h2>
            {Object.entries(content.conclusion).map(([key, value], index) => (
              <div key={index}>
                <h3 className="font-semibold text-zinc-300">{key}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
