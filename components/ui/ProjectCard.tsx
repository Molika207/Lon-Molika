
import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
          src={project.image} 
          alt={project.title} 
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>
      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span 
            key={tag} 
            className="text-xs font-bold px-2.5 py-1 bg-white/5 border border-white/10 text-gray-400 group-hover:text-primary group-hover:border-primary/40 rounded transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
