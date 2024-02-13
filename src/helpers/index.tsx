export const convertPayloadToFormData = (payload: any) => {
  const formData = new FormData();
  for (const key in payload) {
    if (Object.prototype.hasOwnProperty.call(payload, key)) {
      // eslint-disable-next-line
      const value: string = payload[key];
      formData.append(key, value);
    }
  }
  return formData;
};

export const generateSlug = (text: string) => {
  return text
    .replace(/\s+/g, " ")
    .replace(/[^a-zA-Z0-9-\s]/g, "")
    .replace(/\s/g, "-")
    .toLowerCase();
};
