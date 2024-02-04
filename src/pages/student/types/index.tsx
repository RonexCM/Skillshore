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
  data: {
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    description: string;
    time: number;
    retry_after: number;
    status: number;
    pass_percentage: number;
    category: {
      id: number;
      title: string;
      slug: string;
    };
  };
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

export type TOptionFieldProps = {
  index: number;
  option: string;
  onSelect: (index: number) => void;
  isSelected: boolean;
};

export type TTimerProps = {
  initialTime: number;
  onTimeout: () => void;
  updateTimeLeft: (timeLeft: number) => void;
};
