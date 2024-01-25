type Skills = string[];

export type TUserProfile = {
  id: number;
  name: string;
  email: string;
  role: string;
  profile: {
    id: number;
    skills: Skills;
    education: string;
    experience: string;
    career: string;
  };
};

export type editedData = {
  id: number;
  skills: string[];
  education: string;
  experience: string;
  career: string;
};

export type createProfileData = {
  id: number;
  skills: string[];
  education: string;
  experience: string;
  career: string;
};
