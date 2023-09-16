export default async function ProjectsList({ selectedOption }) {
    const projects = await getProjects();
    return (
        <>
            {
                projects.filter((project) => selectedOption === "none" || project.type === selectedOption).map((project) => (
                    <li key={project.id} className="card">
                        <h3>Project title</h3>
                    </li>
                ))
            }
        </>
    );
}
