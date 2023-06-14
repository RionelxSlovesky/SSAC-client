import useUsersByRole from "../../hooks/useUsersByRole";
import InstructorsCard from "./InstructorsCard/InstructorsCard";


const Instructors = () => {

    const [usersByRole] = useUsersByRole('instructor');

    return (
        <div>
            <h1 className="text-center my-8 text-4xl">Instructors page</h1>

            <div className="flex flex-wrap justify-center p-8 gap-4">
                {
                    usersByRole.map(u => <InstructorsCard key={u._id} user={u}></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;