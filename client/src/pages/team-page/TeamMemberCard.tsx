import { TeamMemberCardProps } from "../../types/types";
import TeamMemberImage from "./TeamMemberImage";
import TeamMemberInfo from "./TeamMemberInfo";

function TeamMemberCard({
  memberName,
  memberImage,
  memberGithub,
  memberRole,
  index,
}: TeamMemberCardProps) {
  return index % 2 === 0 ? (
    <div className="flex flex-wrap items-center justify-between h w-full h-full gap-6 max-lg:justify-center max-lg:flex-col">
      <TeamMemberImage memberImage={memberImage} memberGithub={memberGithub} />
      <TeamMemberInfo memberName={memberName} memberRole={memberRole} />
    </div>
  ) : (
    <div className="flex flex-wrap-reverse items-center justify-between w-full h-full gap-6 max-lg:justify-center max-lg:flex-col-reverse">
      <TeamMemberInfo memberName={memberName} memberRole={memberRole} />
      <TeamMemberImage memberImage={memberImage} memberGithub={memberGithub} />
    </div>
  );
}

export default TeamMemberCard;
