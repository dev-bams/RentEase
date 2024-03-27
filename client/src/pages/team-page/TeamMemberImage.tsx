import { TeamMemberImageProps } from "../../types/types";
function TeamMemberImage({ memberImage, memberGithub }: TeamMemberImageProps) {
  return (
    <div className="basis-96 grow-[1] hover:scale-105 transition-all max-w-[540px]">
      <a href={memberGithub} className="">
        <img
          className="rounded-full h-full w-full object-cover"
          src={memberImage}
          alt="Khaleed Opeloyeru"
        />
      </a>
    </div>
  );
}

export default TeamMemberImage;
