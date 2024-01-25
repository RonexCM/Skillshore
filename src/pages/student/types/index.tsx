import { ReactElement } from "react";

export type TUserProfile = {
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
    profile: {
      id: number;
      skills: string[];
      education: string;
      experience: string;
      career: string;
    };
  };
};

export type TUserRole = {
  id: number;
  name: string;
  email: string;
  role: string;
  profile: {
    id: number;
    skills: string[];
    education: string;
    experience: string;
    career: string;
  };
};

export type TProfileData = {
  id: number;
  skills: string[] | string;
  education: string;
  experience: string;
  career: string;
};

export type TUserDataTransformed = {
  data: {
    id: number;
    name: string;
    email: string;
    role: string;
    profile: {
      id: number;
      skills: string[];
      education: string;
      experience: string;
      career: string;
    };
  };
  profile: {
    id: number;
    skills: string[] | string;
    education: string;
    experience: string;
    career: string;
  };
};

export type TProfileDetails = {
  title: string;
  data: string | ReactElement[];
};

export type TQuizOptions = {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  time: number;
  retry_after: number;
  status: number;
  questions: {
    data: {
      questions: Array<{
        id: number;
        title: string;
        description: string;
        options: Array<string>;
        weightage: number;
        status: number;
      }>;
    };
  };
};
