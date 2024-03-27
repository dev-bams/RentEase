import { TeamMembersType } from "../../types/types";
import TeamMemberCard from "./TeamMemberCard";
import khaleedAvatar from "../../assets/images/khaleed-avatar.jpeg";
import francescaAvatar from "../../assets/images/francesca-avatar.jpeg";

function TeamMembers() {
  const teamMembers: TeamMembersType[] = [
    {
      memberName: "Khaleed Opeloyeru",
      memberRole: "Frontend Developer",
      memberImage: khaleedAvatar,
      memberGithub: "https://github.com/dev-bams",
    },
    {
      memberName: "Francesca Ysabelle Galang",
      memberRole: "Frontend Developer",
      memberImage: francescaAvatar,
      memberGithub: "https://github.com/frankookies",
    },
    {
      memberName: "Heba Azeef",
      memberRole: "Designer",
      memberImage: khaleedAvatar,
      memberGithub: "https://github.com/HebaAz",
    },
    {
      memberName: "Salon Lama Pakhrin",
      memberRole: "AI Developer",
      memberImage: khaleedAvatar,
      memberGithub: "https://github.com/slama-pakhrin",
    },
    {
      memberName: "Sarah Mathew",
      memberRole: "Backend Developer",
      memberImage: khaleedAvatar,
      memberGithub: "https://github.com/NightingaleX03",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="text-center">
        <h1 className="font-bold text-3xl">
          The <span className="text-first-primary">team.</span>
        </h1>
      </div>
      <div className="gap-20 flex flex-col">
        {teamMembers.map(
          ({ memberName, memberImage, memberGithub, memberRole }, index) => {
            return (
              <TeamMemberCard
                key={index}
                index={index}
                memberName={memberName}
                memberImage={memberImage}
                memberGithub={memberGithub}
                memberRole={memberRole}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default TeamMembers;
