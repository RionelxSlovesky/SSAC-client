import useClasses from "../../hooks/useClasses";
import useUserInfo from "../../hooks/useUserInfo";
import ClassesCard from "./ClassesCard/ClassesCard";

const Classes = () => {
  const [classes] = useClasses();

  const [userInfo] = useUserInfo();

  const { role, email } = userInfo;

  return (
    <div>
      <h1 className="text-center text-3xl my-4
      md:text-5xl md:mt-14 md:mb-8">Classes We Provide</h1>
      <div className="flex flex-wrap justify-center p-8 gap-4">
        {
          classes
          .filter((c) => c.status == "approved")
          .map((c) => (
            <ClassesCard key={c._id} classItem={c} role={role} email={email}></ClassesCard>
          ))
        }
      </div>
    </div>
  );
};

export default Classes;
