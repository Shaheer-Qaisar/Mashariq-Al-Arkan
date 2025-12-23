import React from 'react'
import Banner from './Banner'
import ProjectsCards from './ProjectsCards'
import ProjectStatistics from './ProjectStatistics'
import ProjectSectors from './ProjectSectors'
import ProjectProcess from './ProjectProcess'
import WhyChooseOurProjects from './WhyChooseOurProjects'

const Projects = () => {
  return (
    <>
    <Banner />
    <ProjectsCards showExploreButton={false} />
    <ProjectStatistics />
    <ProjectSectors />
    <ProjectProcess />
    <WhyChooseOurProjects />
    </>
  )
}

export default Projects