const respond = (body: object, success: boolean = true) => {
  return {
    success: success,
    data: body,
  };
};
