import React from "react";

type PageLayoutProp = {
  children: React.ReactNode;
};
type HamBurgerProps = {
  onClick: () => void;
};
type LinkType = {
  type: "anchor" | "router";
  linkName: string;
  link: string;
};
type ListingType = {
  _id: string;
  mainListingImageSrc: string;
  otherImages: string[];
  listingLocation: string;
  listingPrice: string;
  NoOfBed: number;
  NoOfBath: number;
};
type FormFieldProps = {
  icon: React.FC;
  label: string;
  type: "number" | "text";
};
type TeamMembersType = {
  memberName: string;
  memberRole: string;
  memberImage: string;
  memberGithub: string;
};
type ListingProp = ListingType;
type NavLinkProp = LinkType;
type TeamMemberCardProps = TeamMembersType & { index: number };
type TeamMemberImageProps = { memberImage: string; memberGithub: string };
type TeamMemberInfoProps = { memberName: string; memberRole: string };
export type {
  PageLayoutProp,
  HamBurgerProps,
  LinkType,
  NavLinkProp,
  ListingType,
  ListingProp,
  FormFieldProps,
  TeamMembersType,
  TeamMemberCardProps,
  TeamMemberImageProps,
  TeamMemberInfoProps,
};
