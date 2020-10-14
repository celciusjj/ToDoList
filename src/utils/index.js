export const validateCreation = new RegExp("^.{6,40}$");

export const uuidGenerator = () => {
  const uniqueId = Math.random().toString(36).substring(2) + Date.now().toString(36);
  return uniqueId;
};
