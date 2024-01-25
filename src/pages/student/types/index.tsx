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

export type TProfileData = {
  id: number;
  skills: string[];
  education: string;
  experience: string;
  career: string;
};
