import ProjectHead from "./projectHead";
import ProjectsAnimations from "./Projects3dAnimations";
import RelatedProjects from "./relatedProjects";
const ProjectDetailsPages = () => {
    return (
        <div className="overflow-auto">
            <ProjectHead />
            <ProjectsAnimations />
            <RelatedProjects />
        </div>
    )
}
export default ProjectDetailsPages;